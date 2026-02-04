# Directus Extension: Formatted Numbers

A custom display extension for Directus that provides highly readable, localised, and abbreviated number formatting.
Perfect for dashboards and tables where space is limited or where accurate numbers are not a must.

## Features

- **Smart Abbreviations**: Automatically scales large numbers using standard signifiers (k, M, B, T, P, E, Z, Y).
- **Localisation Support**: Correctly formats abbreviations based on the selected language (e.g., `Mrd.` for German
  Billions, `億` for Japanese). Configure via the "Localisation" field option.
- **Full Value Tooltip**: Hover over any abbreviated number to see the exact, unformatted value in a tooltip.
- **Customisable Appearance**: Add custom prefixes (like currency symbols) and suffixes.

## Configuration Options

When configuring a field to use the "Formatted numbers" display, you can customise the following options:

- **Decimals**: Set the maximum number of decimal places to display (default: 2). This controls how accurate the
  displayed number is.
- **Localisation**: Choose the formatting rules for a specific language. Supported languages:
    - English (en)
    - French (fr)
    - German (de)
    - Spanish (es)
    - Japanese (ja)
    - Chinese (zh)
- **Prefix**: Add text or symbols before the number (e.g., `$`, `€`).
- **Suffix**: Add text or symbols after the number (e.g., ` units`, ` EUR`).

## Examples

| Raw Value             | Config            | Output      |
|:----------------------|:------------------|:------------|
| `1,234,567`           | `en`, 2 decimals  | `1.23M`     |
| `123,456,789,000`     | `de`, 1 decimal   | `123,5Mrd.` |
| `5,000`               | `en`, prefix: `$` | `$5K`       |
| `100,000,000,000,000` | `en`              | `100T`      |

## Supported Scales

The extension supports values from thousands up to septillions. Do you require more? Open an issue and we'll add
it!

- **K**: Kilo (10³)
- **M**: Mega (10⁶)
- **B / G**: Giga / Billion (10⁹)
- **T**: Tera / Trillion (10¹²)
- **P**: Peta / Quadrillion (10¹⁵)
- **E**: Exa (10¹⁸)
- **Z**: Zetta (10²¹)
- **Y**: Yotta (10²⁴)

---

Developed by [Protoqol](https://protoqol.nl/).
