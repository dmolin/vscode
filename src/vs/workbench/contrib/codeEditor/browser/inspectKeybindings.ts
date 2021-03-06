/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vs/nls';
import { ICodeEditor } from 'vs/editor/browser/editorBrowser';
import { EditorAction, ServicesAccessor, registerEditorAction } from 'vs/editor/browser/editorExtensions';
import { IKeybindingService } from 'vs/platform/keybinding/common/keybinding';
import { IUntitledResourceInput } from 'vs/workbench/common/editor';
import { IEditorService } from 'vs/workbench/services/editor/common/editorService';

class InspectKeyMap extends EditorAction {

	constructor() {
		super({
			id: 'workbench.action.inspectKeyMappings',
			label: nls.localize('workbench.action.inspectKeyMap', "Developer: Inspect Key Mappings"),
			alias: 'Developer: Inspect Key Mappings',
			precondition: undefined
		});
	}

	public run(accessor: ServicesAccessor, editor: ICodeEditor): void {
		const keybindingService = accessor.get(IKeybindingService);
		const editorService = accessor.get(IEditorService);

		editorService.openEditor({ contents: keybindingService._dumpDebugInfo(), options: { pinned: true } } as IUntitledResourceInput);
	}
}

registerEditorAction(InspectKeyMap);

class InspectKeyMapJSON extends EditorAction {

	constructor() {
		super({
			id: 'workbench.action.inspectKeyMappingsJSON',
			label: nls.localize('workbench.action.inspectKeyMapJSON', "Developer: Inspect Key Mappings (JSON)"),
			alias: 'Developer: Inspect Key Mappings (JSON)',
			precondition: undefined
		});
	}

	public run(accessor: ServicesAccessor, editor: ICodeEditor): void {
		const keybindingService = accessor.get(IKeybindingService);
		const editorService = accessor.get(IEditorService);

		editorService.openEditor({ contents: keybindingService._dumpDebugInfoJSON(), options: { pinned: true } } as IUntitledResourceInput);
	}
}

registerEditorAction(InspectKeyMapJSON);
