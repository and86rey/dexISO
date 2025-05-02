// Richer tag map to support more MT5xx message types
const DEX_TO_SWIFT_TAGS = {
  ":20:": ":20:",                          // Transaction Reference
  ":31P:": ":30:",                         // Trade Date
  ":35B:": ":35B:",                        // Financial Instrument ID
  ":32B:": ":19A::SETT//",                // Settlement Amount
  ":79:/EISD/": ":98A::SETT//",           // Intended Settlement Date
  ":79:/TTRD/": ":98A::TRAD//",           // Trade Date/Time
  ":79:/DPRT/": ":95P::DEAG//",           // Delivering Agent
  ":79:/IPRT/": ":95P::SELL//",           // Seller
  ":79:/ICPS/": ":95P::BUYR//",           // Buyer
  ":79:/VSTC/": ":19A::DEAL//",           // Deal Price
  ":79:/CTSU/": ":22F::SETR//",           // Settlement Type
  ":79:/DSHN/": ":70E::SPRO//",           // Narrative settlement info
  ":79:/CDCP/": ":22F::RPOR//",           // Repo Indicator
  ":79:/CTSS/P": ":22F::PAYM//APMT",      // Payment Indicator (Paid)
  ":79:/CTSS/F": ":22F::PAYM//FREE",      // Payment Indicator (Free)
  ":79:/IDPC/": ":95P::PSET//",           // Place of Settlement
  ":79:/CCMT/": ":23G:",                  // Function of the Message
  ":79:/UTRF/": ":20C::TRRF//",           // Common Reference
  ":79:/IPRT/": ":95P::SELL//",           // Seller again for confirmation
  ":79:/ICPC/": ":95P::BUYR//",           // Buyer confirmation
  ":79:/TTRD/": ":98A::TRAD//"            // Trade timestamp
};