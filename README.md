# obsidian-pdf-color-inverter

Obsidian plugin to invert PDF colors by changing extension from `.pdf` to `.invert.pdf`. This should work for desktop and mobile (tested in emulator for mobile).

## Purpose

**Issue Addressed**

While you can already invert PDFs using the Minimal Theme, Minimal Theme Settings plugin, and Style Settings plugin, doing so globally inverts PDFs, which while making light PDFs dark, also makes dark PDFs light. Ideally there is a way to control which PDFs are inverted, and which are not.

**Solution Used**

This plugin simply adds a CSS class container a filter to relevant PDF elements in obsidian based on their file extension (`.invert.pdf`), where the CSS does the inversion. This offers the user more control, and is extremely lightweight, consuming virtually no extra resources.

## Notes

- You can test this plugin by cloning this repository and then opening `test_vault` in Obsidian.
- If you rename the PDF while it is already open, you will need to close it and reopen it to apply the inversion filter.
- PDF file views and embeds are supported, but not hover popover previews, this may be added in later release, subject to demand.
- This extension does not actually modify any file data, it only adds a CSS class with an inversion filter to the PDF viewer for PDFs with the `.invert.pdf` extension. If the file is opened in a program besides obsidian, these PDFs will not be inverted.
- A slight delay is added to PDF loads to prevent a white flash in dark mode while the PDF canvas loads. I tried to address this using just CSS, but it persisted, whereas adding a delay and opacity transition in JS fixes it. This is a 0.15 second delay though, so it shouldn't be *too* noticable.
- An alternative solution would be to try and detect the brightness of a PDF so as to invert it conditionally. This would be resource heavy (computation + dependencies), could fail in edgecases (when you use dark mode, but have a light PDF with images that you want to view in true color), and the code would be significantly more complex (would need to add light/dark mode detection, maybe track state for inverted PDF when exceptions to settings rule are made). This alternative solution doesn't "keep it simple, stupid", however, it might be slightly (?) more convenient so as a feature it's on the low priority backlog.

## Install

**Via Beta Plugin Extension**

If you want to install this, you can do so by first installing and enabling the [Beta Reviewers Auto-update Tester (BRAT)](https://github.com/TfTHacker/obsidian42-brat) plugin, then copy the URL of this repository:

```
https://github.com/harttraveller/obsidian-pdf-color-inverter
```

Then in obsidian run the command: `BRAT: Plugins: Add a beta plugin for testing`, and paste the repo URL above. You'll need to reload obsidian for it to take effect.

**Via Obsidian Store**

Will be submitted for review and this message will be updated, if plugin approved.

## Develop

**Requires: [NPM/Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)**

Open a terminal in the obsidian vault you want to work in and run:

```sh
cd .obsidian/plugins
git clone https://github.com/harttraveller/obsidian-pdf-color-inverter
cd obsidian-pdf-color-inverter
npm install
npm run dev
```

Then go to obsidian, enable community plugins, filter by installed, and turn on 'PDF Color Inverter'.

More information on plugin development can be found in the [Obsidian Developer Docs](https://docs.obsidian.md/Home) ([GitHub Repository](https://github.com/obsidianmd/obsidian-developer-docs)).
