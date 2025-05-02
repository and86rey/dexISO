function translateDex() {
  const input = document.getElementById("dexInput").value;
  const result = document.getElementById("result");
  result.innerHTML = "";

  const lines = input.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const typeLine = lines.find(l => l.includes(":79:/HSMT/"));
  if (!typeLine) return showError("Missing DEX message type (:79:/HSMT/)");

  const dexType = typeLine.match(/:79:\/HSMT\/(\w+)/)?.[1];
  const swiftType = DEX_TYPES[dexType];
  if (!swiftType) return showError("Unsupported DEX type: " + dexType);

  const requiredTags = Object.keys(DEX_TO_SWIFT_TAGS);
  const missing = requiredTags.filter(tag => !lines.some(line => line.includes(tag)));
  if (missing.length > 0) return showError("Missing required tags: " + missing.join(", "));

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
  result.innerHTML = `<h3 class="valid">✔ Valid DEX message (inferred ${swiftType})</h3><pre>${swiftMsg.join("\n")}</pre>`;
}

function showError(msg) {
  document.getElementById("result").innerHTML = `<h3 class="invalid">✖ ${msg}</h3>`;
}