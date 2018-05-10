// Generated from DOT.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DOTParser.
function DOTListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DOTListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DOTListener.prototype.constructor = DOTListener;

// Enter a parse tree produced by DOTParser#graph.
DOTListener.prototype.enterGraph = function(ctx) {
};

// Exit a parse tree produced by DOTParser#graph.
DOTListener.prototype.exitGraph = function(ctx) {
};


// Enter a parse tree produced by DOTParser#stmt_list.
DOTListener.prototype.enterStmt_list = function(ctx) {
};

// Exit a parse tree produced by DOTParser#stmt_list.
DOTListener.prototype.exitStmt_list = function(ctx) {
};


// Enter a parse tree produced by DOTParser#nodeStmt.
DOTListener.prototype.enterNodeStmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#nodeStmt.
DOTListener.prototype.exitNodeStmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#edgeStmt.
DOTListener.prototype.enterEdgeStmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#edgeStmt.
DOTListener.prototype.exitEdgeStmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#attrStmt.
DOTListener.prototype.enterAttrStmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#attrStmt.
DOTListener.prototype.exitAttrStmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#globalAttrStmt.
DOTListener.prototype.enterGlobalAttrStmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#globalAttrStmt.
DOTListener.prototype.exitGlobalAttrStmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#subgraphStmt.
DOTListener.prototype.enterSubgraphStmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#subgraphStmt.
DOTListener.prototype.exitSubgraphStmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#attr_stmt.
DOTListener.prototype.enterAttr_stmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#attr_stmt.
DOTListener.prototype.exitAttr_stmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#attr_list.
DOTListener.prototype.enterAttr_list = function(ctx) {
};

// Exit a parse tree produced by DOTParser#attr_list.
DOTListener.prototype.exitAttr_list = function(ctx) {
};


// Enter a parse tree produced by DOTParser#a_list.
DOTListener.prototype.enterA_list = function(ctx) {
};

// Exit a parse tree produced by DOTParser#a_list.
DOTListener.prototype.exitA_list = function(ctx) {
};


// Enter a parse tree produced by DOTParser#edge_stmt.
DOTListener.prototype.enterEdge_stmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#edge_stmt.
DOTListener.prototype.exitEdge_stmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#edgeRHS.
DOTListener.prototype.enterEdgeRHS = function(ctx) {
};

// Exit a parse tree produced by DOTParser#edgeRHS.
DOTListener.prototype.exitEdgeRHS = function(ctx) {
};


// Enter a parse tree produced by DOTParser#edgeop.
DOTListener.prototype.enterEdgeop = function(ctx) {
};

// Exit a parse tree produced by DOTParser#edgeop.
DOTListener.prototype.exitEdgeop = function(ctx) {
};


// Enter a parse tree produced by DOTParser#node_stmt.
DOTListener.prototype.enterNode_stmt = function(ctx) {
};

// Exit a parse tree produced by DOTParser#node_stmt.
DOTListener.prototype.exitNode_stmt = function(ctx) {
};


// Enter a parse tree produced by DOTParser#node_id.
DOTListener.prototype.enterNode_id = function(ctx) {
};

// Exit a parse tree produced by DOTParser#node_id.
DOTListener.prototype.exitNode_id = function(ctx) {
};


// Enter a parse tree produced by DOTParser#port.
DOTListener.prototype.enterPort = function(ctx) {
};

// Exit a parse tree produced by DOTParser#port.
DOTListener.prototype.exitPort = function(ctx) {
};


// Enter a parse tree produced by DOTParser#subgraph.
DOTListener.prototype.enterSubgraph = function(ctx) {
};

// Exit a parse tree produced by DOTParser#subgraph.
DOTListener.prototype.exitSubgraph = function(ctx) {
};


// Enter a parse tree produced by DOTParser#id.
DOTListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by DOTParser#id.
DOTListener.prototype.exitId = function(ctx) {
};



exports.DOTListener = DOTListener;