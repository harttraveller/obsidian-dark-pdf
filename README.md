# obsidian-pdf-color-inverter

- Description: Obsidian plugin for color inverting PDFs. Allows user to control what PDFs are inverted.
- Usage: To invert a PDF, replace the `.pdf` extension with `.invert.pdf` - it should now be inverted when opened in obsidian or embedded in a page.
    - Note: If you rename the PDF while it is already open, you will need to close it and reopen it.
- Compatibility: This should work for desktop and mobile (tested in emulator for mobile).

## Problem

While you can already invert PDFs using the Minimal Theme, Minimal Theme Settings plugin, and Style Settings plugin, doing so globally inverts PDFs, which while making light PDFs dark, also makes dark PDFs light. Ideally there is a way to control which PDFs are inverted, and which are not.

## Solution

One solution would be to try and detect the brightness of a PDF so as to invert it conditionally, but that would be resource heavy and would fail in edgecases (eg: when you have a light PDF with images that you want to view in true color).

A much more lightweight solution (and the one this plugin uses) is to simply add a CSS class container a filter to relevant PDF elements in obsidian based on their file extension, where the CSS does the inversion. This offers the user more control, and is extremely lightweight, consuming virtually no extra resources.

**Note that a slight delay is added to PDF loads to prevent a white flash in dark mode while the PDF canvas loads. I tried to address this using just CSS, but it persisted, whereas adding a delay and opacity transition in JS fixes it. This is a 0.15 second delay though, so it shouldn't be *too* noticable.**

## Install

**Via Beta Plugin Extension**

If you want to install this, you can do so by first installing and enabling the [Beta Reviewers Auto-update Tester (BRAT)](https://github.com/TfTHacker/obsidian42-brat) plugin, then copy the URL of this repository:

```
https://github.com/harttraveller/obsidian-pdf-color-inverter
```

Then in obsidian run the command: `BRAT: Plugins: Add a beta plugin for testing`, and paste the repo URL above. You'll need to reload obsidian for it to take effect.

**Via Obsidian Store**

Will be submitted for review and this message will be updated, if plugin approved.