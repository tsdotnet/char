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
export function isWhiteSpace (ch: number): boolean
{
	return ch===32 || (ch>=9 && ch<=13) || ch===133 || ch===160;
}

/**
 * Returns true if the character code is an alpha letter (case insensitive).
 * @param {number} ch
 * @returns {boolean}
 */
export function isLetter (ch: number): boolean
{
	return (65<=ch && ch<=90) || (97<=ch && ch<=122) || (ch>=128 && ch!==133 && ch!==160);
}

/**
 * Returns true if the character code is alphanumeric.
 * @param {number} ch
 * @returns {boolean}
 */
export function isLetterOrDigit (ch: number): boolean
{
	return (
		(48<=ch && ch<=57) ||
		(65<=ch && ch<=90) ||
		(97<=ch && ch<=122) ||
		(ch>=128 && ch!==133 && ch!==160)
	);
}

/**
 * Returns true if the character code is a number (0-9).
 * @param {number} ch
 * @returns {boolean}
 */
export function isDigit (ch: number): boolean;
export function isDigit (str: string, index?: number): boolean;
export function isDigit (chOrStr: number | string, index: number = 0): boolean
{
	if(typeof chOrStr=='number')
	{
		return 48<=chOrStr && chOrStr<=57;
	}
	else
	{
		const ch = chOrStr.charCodeAt(index);
		return 48<=ch && ch<=57;
	}
}
