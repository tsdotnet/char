/*!
 * @author electricessence / https://github.com/electricessence/
 * From Netjs mscorlib.ts
 * Licensing: MIT
 */
/**
 * Returns true if the character code is white-space.
 * @param {number} ch
 * @returns {boolean}
 */
export declare function isWhiteSpace(ch: number): boolean;
/**
 * Returns true if the character code is an alpha letter (case insensitive).
 * @param {number} ch
 * @returns {boolean}
 */
export declare function isLetter(ch: number): boolean;
/**
 * Returns true if the character code is alphanumeric.
 * @param {number} ch
 * @returns {boolean}
 */
export declare function isLetterOrDigit(ch: number): boolean;
/**
 * Returns true if the character code is a number (0-9).
 * @param {number} ch
 * @returns {boolean}
 */
export declare function isDigit(ch: number): boolean;
export declare function isDigit(str: string, index?: number): boolean;
