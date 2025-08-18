import { describe, it, expect } from 'vitest';
import * as Char from '../src/char.js';

describe('Char Module', () => {
	it('should export all char utilities', () => {
		expect(Char).toBeDefined();
		expect(typeof Char.isWhiteSpace).toBe('function');
		expect(typeof Char.isLetter).toBe('function');
		expect(typeof Char.isLetterOrDigit).toBe('function');
		expect(typeof Char.isDigit).toBe('function');
	});
});

describe('isWhiteSpace', () => {
	it('should identify standard whitespace characters', () => {
		expect(Char.isWhiteSpace(32)).toBe(true);  // space
		expect(Char.isWhiteSpace(9)).toBe(true);   // tab
		expect(Char.isWhiteSpace(10)).toBe(true);  // line feed
		expect(Char.isWhiteSpace(11)).toBe(true);  // vertical tab
		expect(Char.isWhiteSpace(12)).toBe(true);  // form feed
		expect(Char.isWhiteSpace(13)).toBe(true);  // carriage return
		expect(Char.isWhiteSpace(133)).toBe(true); // next line (NEL)
		expect(Char.isWhiteSpace(160)).toBe(true); // non-breaking space
	});

	it('should reject non-whitespace characters', () => {
		expect(Char.isWhiteSpace(65)).toBe(false);  // 'A'
		expect(Char.isWhiteSpace(97)).toBe(false);  // 'a'
		expect(Char.isWhiteSpace(48)).toBe(false);  // '0'
		expect(Char.isWhiteSpace(0)).toBe(false);   // null
		expect(Char.isWhiteSpace(8)).toBe(false);   // backspace
		expect(Char.isWhiteSpace(14)).toBe(false);  // shift out
		expect(Char.isWhiteSpace(31)).toBe(false);  // unit separator
		expect(Char.isWhiteSpace(33)).toBe(false);  // exclamation mark
	});

	it('should handle edge cases around whitespace ranges', () => {
		expect(Char.isWhiteSpace(8)).toBe(false);   // just before tab range
		expect(Char.isWhiteSpace(14)).toBe(false);  // just after carriage return
		expect(Char.isWhiteSpace(132)).toBe(false); // just before NEL
		expect(Char.isWhiteSpace(134)).toBe(false); // just after NEL
		expect(Char.isWhiteSpace(159)).toBe(false); // just before non-breaking space
		expect(Char.isWhiteSpace(161)).toBe(false); // just after non-breaking space
	});
});

describe('isLetter', () => {
	it('should identify uppercase letters', () => {
		expect(Char.isLetter(65)).toBe(true);  // 'A'
		expect(Char.isLetter(90)).toBe(true);  // 'Z'
		expect(Char.isLetter(77)).toBe(true);  // 'M'
	});

	it('should identify lowercase letters', () => {
		expect(Char.isLetter(97)).toBe(true);   // 'a'
		expect(Char.isLetter(122)).toBe(true);  // 'z'
		expect(Char.isLetter(109)).toBe(true);  // 'm'
	});

	it('should identify extended characters (>= 128)', () => {
		expect(Char.isLetter(128)).toBe(true);  // extended characters
		expect(Char.isLetter(200)).toBe(true);  // extended characters
		expect(Char.isLetter(255)).toBe(true);  // extended characters
	});

	it('should reject whitespace and control characters in extended range', () => {
		expect(Char.isLetter(133)).toBe(false); // NEL (next line)
		expect(Char.isLetter(160)).toBe(false); // non-breaking space
	});

	it('should reject non-letter characters', () => {
		expect(Char.isLetter(48)).toBe(false);  // '0'
		expect(Char.isLetter(57)).toBe(false);  // '9'
		expect(Char.isLetter(32)).toBe(false);  // space
		expect(Char.isLetter(64)).toBe(false);  // '@'
		expect(Char.isLetter(91)).toBe(false);  // '['
		expect(Char.isLetter(96)).toBe(false);  // '`'
		expect(Char.isLetter(123)).toBe(false); // '{'
	});

	it('should handle edge cases around letter ranges', () => {
		expect(Char.isLetter(64)).toBe(false);  // just before 'A'
		expect(Char.isLetter(91)).toBe(false);  // just after 'Z'
		expect(Char.isLetter(96)).toBe(false);  // just before 'a'
		expect(Char.isLetter(123)).toBe(false); // just after 'z'
		expect(Char.isLetter(127)).toBe(false); // just before extended range
	});
});

describe('isLetterOrDigit', () => {
	it('should identify digits', () => {
		expect(Char.isLetterOrDigit(48)).toBe(true);  // '0'
		expect(Char.isLetterOrDigit(57)).toBe(true);  // '9'
		expect(Char.isLetterOrDigit(53)).toBe(true);  // '5'
	});

	it('should identify uppercase letters', () => {
		expect(Char.isLetterOrDigit(65)).toBe(true);  // 'A'
		expect(Char.isLetterOrDigit(90)).toBe(true);  // 'Z'
	});

	it('should identify lowercase letters', () => {
		expect(Char.isLetterOrDigit(97)).toBe(true);   // 'a'
		expect(Char.isLetterOrDigit(122)).toBe(true);  // 'z'
	});

	it('should identify extended characters', () => {
		expect(Char.isLetterOrDigit(128)).toBe(true);  // extended characters
		expect(Char.isLetterOrDigit(200)).toBe(true);  // extended characters
	});

	it('should reject whitespace and control characters in extended range', () => {
		expect(Char.isLetterOrDigit(133)).toBe(false); // NEL
		expect(Char.isLetterOrDigit(160)).toBe(false); // non-breaking space
	});

	it('should reject non-alphanumeric characters', () => {
		expect(Char.isLetterOrDigit(32)).toBe(false);  // space
		expect(Char.isLetterOrDigit(33)).toBe(false);  // '!'
		expect(Char.isLetterOrDigit(47)).toBe(false);  // '/'
		expect(Char.isLetterOrDigit(58)).toBe(false);  // ':'
		expect(Char.isLetterOrDigit(64)).toBe(false);  // '@'
		expect(Char.isLetterOrDigit(91)).toBe(false);  // '['
		expect(Char.isLetterOrDigit(96)).toBe(false);  // '`'
		expect(Char.isLetterOrDigit(123)).toBe(false); // '{'
	});

	it('should handle edge cases around alphanumeric ranges', () => {
		expect(Char.isLetterOrDigit(47)).toBe(false);  // just before '0'
		expect(Char.isLetterOrDigit(58)).toBe(false);  // just after '9'
		expect(Char.isLetterOrDigit(64)).toBe(false);  // just before 'A'
		expect(Char.isLetterOrDigit(91)).toBe(false);  // just after 'Z'
		expect(Char.isLetterOrDigit(96)).toBe(false);  // just before 'a'
		expect(Char.isLetterOrDigit(123)).toBe(false); // just after 'z'
	});
});

describe('isDigit', () => {
	describe('with number parameter', () => {
		it('should identify digit characters', () => {
			expect(Char.isDigit(48)).toBe(true);  // '0'
			expect(Char.isDigit(49)).toBe(true);  // '1'
			expect(Char.isDigit(53)).toBe(true);  // '5'
			expect(Char.isDigit(57)).toBe(true);  // '9'
		});

		it('should reject non-digit characters', () => {
			expect(Char.isDigit(47)).toBe(false);  // '/' (just before '0')
			expect(Char.isDigit(58)).toBe(false);  // ':' (just after '9')
			expect(Char.isDigit(65)).toBe(false);  // 'A'
			expect(Char.isDigit(97)).toBe(false);  // 'a'
			expect(Char.isDigit(32)).toBe(false);  // space
		});

		it('should handle edge cases around digit range', () => {
			expect(Char.isDigit(47)).toBe(false);  // just before '0'
			expect(Char.isDigit(58)).toBe(false);  // just after '9'
		});
	});

	describe('with string parameter', () => {
		it('should identify digits in strings', () => {
			expect(Char.isDigit('0')).toBe(true);
			expect(Char.isDigit('5')).toBe(true);
			expect(Char.isDigit('9')).toBe(true);
			expect(Char.isDigit('123', 0)).toBe(true); // first char
			expect(Char.isDigit('123', 1)).toBe(true); // middle char
			expect(Char.isDigit('123', 2)).toBe(true); // last char
		});

		it('should identify digits at specific indices', () => {
			expect(Char.isDigit('a1b', 1)).toBe(true);  // digit in middle
			expect(Char.isDigit('1ab', 0)).toBe(true);  // digit at start
			expect(Char.isDigit('ab2', 2)).toBe(true);  // digit at end
		});

		it('should reject non-digits in strings', () => {
			expect(Char.isDigit('a')).toBe(false);
			expect(Char.isDigit('Z')).toBe(false);
			expect(Char.isDigit(' ')).toBe(false);
			expect(Char.isDigit('!')).toBe(false);
			expect(Char.isDigit('abc', 0)).toBe(false);
			expect(Char.isDigit('abc', 1)).toBe(false);
			expect(Char.isDigit('abc', 2)).toBe(false);
		});

		it('should handle mixed alphanumeric strings', () => {
			const mixed = 'a1b2c3';
			expect(Char.isDigit(mixed, 0)).toBe(false); // 'a'
			expect(Char.isDigit(mixed, 1)).toBe(true);  // '1'
			expect(Char.isDigit(mixed, 2)).toBe(false); // 'b'
			expect(Char.isDigit(mixed, 3)).toBe(true);  // '2'
			expect(Char.isDigit(mixed, 4)).toBe(false); // 'c'
			expect(Char.isDigit(mixed, 5)).toBe(true);  // '3'
		});

		it('should default to index 0 when no index provided', () => {
			expect(Char.isDigit('1abc')).toBe(true);  // checks first character
			expect(Char.isDigit('a123')).toBe(false); // checks first character
		});

		it('should handle empty strings and edge cases', () => {
			expect(Char.isDigit('', 0)).toBe(false); // empty string should be NaN
			expect(Char.isDigit('5', 10)).toBe(false); // index out of bounds should be NaN
		});
	});
});