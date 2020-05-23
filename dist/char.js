"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * From Netjs mscorlib.ts
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDigit = exports.isLetterOrDigit = exports.isLetter = exports.isWhiteSpace = void 0;
/**
 * Returns true if the character code is white-space.
 * @param {number} ch
 * @returns {boolean}
 */
function isWhiteSpace(ch) {
    return ch === 32 || (ch >= 9 && ch <= 13) || ch === 133 || ch === 160;
}
exports.isWhiteSpace = isWhiteSpace;
/**
 * Returns true if the character code is an alpha letter (case insensitive).
 * @param {number} ch
 * @returns {boolean}
 */
function isLetter(ch) {
    return (65 <= ch && ch <= 90) || (97 <= ch && ch <= 122) || (ch >= 128 && ch !== 133 && ch !== 160);
}
exports.isLetter = isLetter;
/**
 * Returns true if the character code is alphanumeric.
 * @param {number} ch
 * @returns {boolean}
 */
function isLetterOrDigit(ch) {
    return ((48 <= ch && ch <= 57) ||
        (65 <= ch && ch <= 90) ||
        (97 <= ch && ch <= 122) ||
        (ch >= 128 && ch !== 133 && ch !== 160));
}
exports.isLetterOrDigit = isLetterOrDigit;
function isDigit(chOrStr, index = 0) {
    if (typeof chOrStr == 'number') {
        return 48 <= chOrStr && chOrStr <= 57;
    }
    else {
        const ch = chOrStr.charCodeAt(index);
        return 48 <= ch && ch <= 57;
    }
}
exports.isDigit = isDigit;
//# sourceMappingURL=char.js.map