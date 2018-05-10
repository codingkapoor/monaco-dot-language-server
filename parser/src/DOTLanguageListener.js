const antlr4 = require('antlr4/index');
const DOTParser = require('./generated/DOTParser').DOTParser;
const DOTListener = require('./generated/DOTListener').DOTListener;

const NodeName = require('./NodeName').NodeName;

DOTLanguageListener = function() {
    DOTListener.call(this);
    this.nodeNames = [];
    return this;
}

DOTLanguageListener.prototype = Object.create(DOTListener.prototype);
DOTLanguageListener.prototype.constructor = DOTLanguageListener;

DOTLanguageListener.prototype.exitId = function(ctx) {

    var nodeName = "";

    if(ctx.parentCtx.constructor.name == "Node_idContext")
        nodeName = "(Node) ";

    if(ctx.parentCtx.constructor.name == "SubgraphContext")
        nodeName = "(Subgraph) ";

    if(ctx.parentCtx.constructor.name == "GraphContext")                
        nodeName = "(Graph) ";            
             
    if(nodeName != null || nodeName != "")
        this.nodeNames.push(new NodeName(nodeName + ctx.getText(), ctx.stop.line - 1, ctx.start.column + 1, ctx.start.column + ctx.getText().length + 1));
};

exports.DOTLanguageListener = DOTLanguageListener;
