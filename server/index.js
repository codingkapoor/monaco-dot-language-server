const parser = require('parser');
const Diagnostic = require('vscode-languageserver').Diagnostic;
const DiagnosticSeverity = require('vscode-languageserver').DiagnosticSeverity;

exports.getDiagnostics = function(text) {
    var diagnostics = [];	

    var maxNumberOfProblems = 100;
	var res = parser.DOTValidator.doValidation(text);
	var messages = res.syntacticErrors.concat(res.semanticErrors);
	names = res.nodeNames;
		
	var lines = text.split(/\r?\n/g);
	var problems = 0;		

	for (var i = 0; i < messages.length && problems < maxNumberOfProblems; i++) {		
		problems++;
		
		if(messages[i].length == 0)
			messages[i].length = lines[i].length - messages[i].character;

		diagnostics.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: { line: messages[i].line, character: messages[i].character},
				end: { line: messages[i].line, character: messages[i].character + messages[i].length }
			},
			message: messages[i].message,
			source: 'ex'
		});			
	}

    return diagnostics;
}
