import { Plugin, TFile, Notice, FileView, HoverPopover } from 'obsidian';
export default class DarkPDFViewer extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on('file-open', async (file: TFile | null) => {
				this.addInversionClass(file)
			}
			)
		)
	}

	addInversionClass(file: TFile | null) {
		if (file !== null) {
			if (file.extension === 'pdf') {
				// new Notice('pdf opened');
				const view = this.app.workspace.getActiveViewOfType(FileView);
				// setting the initial opacity to zero and then turning it
				// to 1 after delay fixes an issue where there is a momentary
				// bright white flash when switching files in the same tab
				if (view && view.file === file) {
					const container = view.containerEl;
					container.style.opacity = '0';
					if (file.basename.endsWith('.invert')) {
						// new Notice('inverted-pdf class added');
						container.classList.add('inverted-pdf');
					} else {
						// new Notice('no class added');
						container.classList.remove('inverted-pdf');
					}
					setTimeout(() => {
						container.style.opacity = '1';
					}, 300);
				}
			}
		}
	}

	onunload() {
		const leaves = this.app.workspace.getLeavesOfType('pdf');
		leaves.forEach((leaf) => {
			const container = leaf.view.containerEl;
			container.classList.remove('inverted-pdf');
			container.style.opacity = '1';
		});
	}
}


