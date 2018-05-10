DiagnosticMessage = function(message, line, character, symbol, length) {
    this.message = message;
    this.line = line;
    this.character = character;
    this.symbol = symbol;
    this.length = length;
}

exports.DiagnosticMessage = DiagnosticMessage;