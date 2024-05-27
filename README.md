# obsidian-dark-pdf

- Description: Obsidian plugin for color inverting PDFs. Allows user to control what PDFs are inverted.
- Usage: To invert a PDF, replace the `.pdf` extension with `.invert.pdf` - it should now be inverted when opened in obsidian or embedded in a page.
- Purpose: This aims to solve the issue wherein after inverting all PDFs with CSS or the minimal theme + style settings plugins, dark documents become blindingly bright.
- Compatibility: This should work for desktop and mobile (tested in emulator for mobile).

## Install

If you want to install this, you can do so by first installing and enabling the [Beta Reviewers Auto-update Tester (BRAT)](https://github.com/TfTHacker/obsidian42-brat) plugin, then copy the URL of this repository:

```
https://github.com/harttraveller/obsidian-dark-pdf
```

Then in obsidian run the command: `BRAT: Plugins: Add a beta plugin for testing`, and paste the repo URL above. You'll need to reload obsidian for it to take effect.


## Notes

- You can probably use this to make dark PDFs bright too, not sure though, haven't tested.
- A slight delay is added to PDF loads to prevent a white flash, tbh not exactly sure what causes that but the delay fixes it.

## Potential Future Features

- Make it work for hover popup previews.
- Add a toggle setting or hotkey or something.