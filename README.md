# DEX to ISO15022 Translator (Client-Only HTML App)

## Overview
This is a static web application that accepts DEX-formatted (CREST) messages and translates them into ISO 15022-compliant MT messages using in-browser logic only.

## Files

- `index.html`: Main UI
- `dexSchema.js`: Known DEX type → ISO 15022 message map
- `tagMap.js`: DEX tags to SWIFT field mappings
- `dexToSwift.js`: Core translation logic

## Usage

1. Open `index.html` in a browser.
2. Paste a DEX message.
3. Click **Validate & Translate**.
4. You'll get either a SWIFT message or a validation error.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. Enable Pages from the repository settings using the `main` branch and `/ (root)`.

## License

MIT