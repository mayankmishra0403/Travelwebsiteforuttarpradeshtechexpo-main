# Font Setup Instructions

## Required Font Files

To complete the font setup for DARSHAN360, you need to add the following font files to the `public/fonts/` directory:

### Agarthi Font (for headings and company name)
- `Agarthi.woff2`
- `Agarthi.woff`
- `Agarthi.ttf`
- `Agarthi-Bold.woff2`
- `Agarthi-Bold.woff`
- `Agarthi-Bold.ttf`

### Shangrilla Font (for body text - entire website)
- `Shangrilla.woff2`
- `Shangrilla.woff`
- `Shangrilla.ttf`
- `Shangrilla-Bold.woff2`
- `Shangrilla-Bold.woff`
- `Shangrilla-Bold.ttf`

## How to Add Fonts

1. Download or obtain the Agarthi and Shangrilla font files
2. Convert them to web formats (.woff2, .woff, .ttf) if needed using a tool like:
   - https://transfonter.org/
   - https://www.fontsquirrel.com/tools/webfont-generator
3. Place all font files in: `public/fonts/`
4. Restart the dev server

## Current Setup

The following files have been configured:

- ✅ `src/styles/fonts.css` - Font-face declarations
- ✅ `src/main.tsx` - Font CSS imported
- ✅ `src/components/Header.tsx` - DARSHAN360 uses Agarthi font
- ✅ Global CSS - All headings use Agarthi, body uses Shangrilla

## Fallback

If font files are not added, the site will use system fonts:
- Headings: Georgia, serif
- Body: System sans-serif fonts
