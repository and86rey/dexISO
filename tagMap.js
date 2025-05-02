// Mapping of DEX field tags to ISO15022 fields
const DEX_TO_SWIFT_TAGS = {
  ":20:": ":20:", // Transaction Reference Number
  ":31P:": ":30:", // Trade Date
  ":35B:": ":35B:", // Financial Instrument Identification
  ":32B:": ":19A::SETT//", // Settlement Amount
  ":79:/EISD/": ":98A::SETT//", // Intended Settlement Date
  ":79:/DPRT/": ":95P::DEAG//",
  ":79:/IPRT/": ":95P::SELL//",
  ":79:/ICPS/": ":95P::BUYR//"
};