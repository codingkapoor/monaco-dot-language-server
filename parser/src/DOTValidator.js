const antlr4 = require('antlr4/index');

const DOTLexer = require('./generated/DOTLexer').DOTLexer;
const DOTParser = require('./generated/DOTParser').DOTParser;

const DOTLanguageListener = require('./DOTLanguageListener').DOTLanguageListener;
const DOTSyntacticErrorListener = require('./DOTSyntacticErrorListener').DOTSyntacticErrorListener;
const DOTSemanticErrorListener = require('./DOTSemanticErrorListener').DOTSemanticErrorListener;

function doValidation(text) {
    var is = new antlr4.InputStream(text);
    var lexer = new DOTLexer(is);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new DOTParser(tokens);
       
    parser.buildParseTrees = true;

    var syntacticErrorListener = new DOTSyntacticErrorListener();
    var semanticErrorListener = new DOTSemanticErrorListener();

    lexer.removeErrorListeners();
    lexer.addErrorListener(syntacticErrorListener);

    parser.removeErrorListeners();
    parser.addErrorListener(semanticErrorListener);

    var tree = parser.graph();
    
    var languageListener = new DOTLanguageListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(languageListener, tree);

    return {
        syntacticErrors: syntacticErrorListener.diagnostics,
        semanticErrors: semanticErrorListener.diagnostics,
        nodeNames: languageListener.nodeNames
    };
}

exports.doValidation = doValidation;
