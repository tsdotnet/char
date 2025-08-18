"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * From Netjs mscorlib.ts
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWhiteSpace = isWhiteSpace;
exports.isLetter = isLetter;
exports.isLetterOrDigit = isLetterOrDigit;
exports.isDigit = isDigit;
function isWhiteSpace(ch) {
    return ch === 32 || (ch >= 9 && ch <= 13) || ch === 133 || ch === 160;
}
function isLetter(ch) {
    return (65 <= ch && ch <= 90) || (97 <= ch && ch <= 122) || (ch >= 128 && ch !== 133 && ch !== 160);
}
function isLetterOrDigit(ch) {
    return ((48 <= ch && ch <= 57) ||
        (65 <= ch && ch <= 90) ||
        (97 <= ch && ch <= 122) ||
        (ch >= 128 && ch !== 133 && ch !== 160));
}
function isDigit(chOrStr, index = 0) {
    if (typeof chOrStr == 'number') {
        return 48 <= chOrStr && chOrStr <= 57;
    }
    else {
        const ch = chOrStr.charCodeAt(index);
        return 48 <= ch && ch <= 57;
    }
}
//# sourceMappingURL=char.js.map