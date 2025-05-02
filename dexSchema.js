// Expanded DEX → ISO15022 mapping
const DEX_TYPES = {
  ADVN: "MT542",       // Delivery free
  CT0020: "MT540",     // Instruction to Deliver Free
  CT0023: "MT541",     // Instruction to Receive Free
  CT0026: "MT548",     // Settlement Status and Processing Advice
  CT0048: "MT578",     // Corporate Action Instructions
  CT0001: "MT564",     // Corporate Action Notification
  CT0002: "MT564",
  CT0041: "MT558",     // Settlement discipline
  CT0006: "MT950",     // Cash Position
  CT0013: "MT900",     // Cash Posting
  CT0052: "MT543",     // Deliver vs. Payment
  CT0053: "MT544",     // Receive vs. Payment
  CT0054: "MT545",     // Deliver Free
  CT0055: "MT546",     // Receive Free
  CT0056: "MT547"      // Settlement Allegement
};