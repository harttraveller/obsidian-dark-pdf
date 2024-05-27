# obsidian-pdf-color-inverter

Obsidian plugin for color inverting PDFs. Allows user to control what PDFs are inverted.

## Usage

To invert a PDF, replace the `.pdf` extension with `.invert.pdf` - it should now be inverted when opened in obsidian or embedded in a page. This should work for desktop and mobile (tested in emulator for mobile).

## Installation

**Via Beta Plugin Extension**

If you want to install this, you can do so by first installing and enabling the [Beta Reviewers Auto-update Tester (BRAT)](https://github.com/TfTHacker/obsidian42-brat) plugin, then copy the URL of this repository:

```
https://github.com/harttraveller/obsidian-pdf-color-inverter
```

Then in obsidian run the command: `BRAT: Plugins: Add a beta plugin for testing`, and paste the repo URL above. You'll need to reload obsidian for it to take effect.

**Via Obsidian Store**

Will be submitted for review and this message will be updated, if plugin approved.

## Purpose

**Issue Addressed**

While you can already invert PDFs using the Minimal Theme, Minimal Theme Settings plugin, and Style Settings plugin, doing so globally inverts PDFs, which while making light PDFs dark, also makes dark PDFs light. Ideally there is a way to control which PDFs are inverted, and which are not.

**Solution Used**

This plugin simply adds a CSS class container a filter to relevant PDF elements in obsidian based on their file extension (`.invert.pdf`), where the CSS does the inversion. This offers the user more control, and is extremely lightweight, consuming virtually no extra resources.

<!-- An alternative solution (the one the LLMs suggested) would be to try and detect the brightness of a PDF so as to invert it conditionally. This would be resource heavy (computation + dependencies), could fail in edgecases (when you use dark mode, but have a light PDF with images that you want to view in true color), and the code would be significantly more complex (would need to add light/dark mode detection, maybe track state for inverted PDF when exceptions to settings rule are made). This alternative solution doesn't "keep it simple, stupid", and I don't much like it, but it might be slightly (?) more convenient so as a feature it's on the low priority backlog. -->

## Notes

- If you rename the PDF while it is already open, you will need to close it and reopen it to apply the inversion filter.
- A slight delay is added to PDF loads to prevent a white flash in dark mode while the PDF canvas loads. I tried to address this using just CSS, but it persisted, whereas adding a delay and opacity transition in JS fixes it. This is a 0.15 second delay though, so it shouldn't be *too* noticable.
- This extension does not actually modify any file data, it only adds a CSS class with an inversion filter to the PDF viewer for PDFs with the `.invert.pdf` extension. If the file is opened in a program besides obsidian, these PDFs will not be inverted.