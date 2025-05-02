function translateDex() {
  const input = document.getElementById("dexInput").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (input.startsWith("{1:")) {
    return convertSwiftToDex(input, result);
  } else {
    return convertDexToSwift(input, result);
  }
}

function convertDexToSwift(input, result) {
  const lines = input.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const typeLine = lines.find(l => l.includes(":79:/HSMT/"));
  if (!typeLine) return showError("Missing DEX message type (:79:/HSMT/)", result);

  const dexType = typeLine.match(/:79:\/HSMT\/(\w+)/)?.[1];
  const swiftType = DEX_TYPES[dexType];
  if (!swiftType) return showError("Unsupported DEX type: " + dexType, result);

  const swiftMsg = [`{1:F01BANKBEBBAXXX0000000000}`, `{2:I${swiftType}BANKDEFFXXXXN}`, "{4:"];
  for (const line of lines) {
    for (const tag in DEX_TO_SWIFT_TAGS) {
      if (line.startsWith(tag)) {
        const val = line.split(tag)[1] || "";
        swiftMsg.push(DEX_TO_SWIFT_TAGS[tag] + val);
        break;
      }
    }
  }
  swiftMsg.push("-}");
  result.innerHTML = `<h3 class="valid">✔ DEX → ${swiftType}</h3><pre>${swiftMsg.join("\n")}</pre>`;
}

function convertSwiftToDex(input, result) {
  const lines = input.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const typeLine = lines.find(l => l.startsWith("{2:"));
  const mtMatch = typeLine?.match(/\{2:I(MT5\d{2})/);
  if (!mtMatch) return showError("Missing or unsupported SWIFT message type", result);

  const mtType = mtMatch[1];
  if (!["MT540", "MT541", "MT542", "MT543", "MT544"].includes(mtType)) {
    return showError(`SWIFT ${mtType} → DEX not supported in this scope`, result);
  }

  const reversed = {};
  for (const dexTag in DEX_TO_SWIFT_TAGS) {
    reversed[DEX_TO_SWIFT_TAGS[dexTag]] = dexTag;
  }

  const dexLines = [];
  dexLines.push(":79:/HSMT/CT0020"); // Generic settlement instruction
  for (const line of lines) {
    for (const swiftTag in reversed) {
      if (line.startsWith(swiftTag)) {
        const val = line.split(swiftTag)[1] || "";
        dexLines.push(reversed[swiftTag] + val);
        break;
      }
    }
  }

  result.innerHTML = `<h3 class="valid">✔ ${mtType} → DEX</h3><pre>${dexLines.join("\n")}</pre>`;
}

function showError(msg, result) {
  result.innerHTML = `<h3 class="invalid">✖ ${msg}</h3>`;
}