import { TextDocument, Diagnostic } from "vscode-json-languageservice";
import { ProtocolToMonacoConverter } from 'monaco-languageclient';

const DOTValidator = require('server');

const LANGUAGE_ID = 'dot';
const MODEL_URI = 'inmemory://model.dot'
const MONACO_URI = monaco.Uri.parse(MODEL_URI);

// register the DOT language with Monaco
monaco.languages.register({
    id: LANGUAGE_ID,
    extensions: ['.dot'],
    aliases: ['DOT', 'dot'],
    mimetypes: ['text/plain'],
});

// create the Monaco editor
const value = `graph { 
    a -- b
    a -- b
    b -- a [color=blue]
  }`;

monaco.editor.create(document.getElementById("container")!, {
    model: monaco.editor.createModel(value, LANGUAGE_ID, MONACO_URI),
    glyphMargin: true,
    lightbulb: {
        enabled: true
    }
});

function getModel(): monaco.editor.IModel {
    return monaco.editor.getModel(MONACO_URI);
}

function createDocument(model: monaco.editor.IReadOnlyModel) {
    return TextDocument.create(MODEL_URI, model.getModeId(), model.getVersionId(), model.getValue());
}

const p2m = new ProtocolToMonacoConverter();

const pendingValidationRequests = new Map<string, number>();

getModel().onDidChangeContent((event) => {
    validate();
});

function validate(): void {
    const document = createDocument(getModel());
    cleanPendingValidation(document);
    pendingValidationRequests.set(document.uri, setTimeout(() => {
        pendingValidationRequests.delete(document.uri);
        doValidate(document);
    }));
}

function cleanPendingValidation(document: TextDocument): void {
    const request = pendingValidationRequests.get(document.uri);
    if (request !== undefined) {
        clearTimeout(request);
        pendingValidationRequests.delete(document.uri);
    }
}

function doValidate(document: TextDocument): void {
    if (document.getText().length === 0) {
        cleanDiagnostics();
        return;
    }

    let diagnostics: Diagnostic[] = DOTValidator.getDiagnostics(document.getText());
    const markers = diagnostics.map(diagnostic => p2m.asMarker(diagnostic));
    monaco.editor.setModelMarkers(getModel(), 'default', markers);
}

function cleanDiagnostics(): void {
    monaco.editor.setModelMarkers(monaco.editor.getModel(MONACO_URI), 'default', []);
}
