import { describe, it, expect } from 'vitest';
import * as Char from '../src/char';

describe('Char', () => {
	it('should export char utilities', () => {
		expect(Char).toBeDefined();
		expect(typeof Char).toBe('object');
	});

	it('should identify whitespace characters', () => {
		expect(Char.isWhiteSpace(32)).toBe(true); // space
		expect(Char.isWhiteSpace(9)).toBe(true);  // tab
		expect(Char.isWhiteSpace(65)).toBe(false); // 'A'
	});

	it('should identify letter characters', () => {
		if (Char.isLetter) {
			expect(Char.isLetter(65)).toBe(true);  // 'A'
			expect(Char.isLetter(97)).toBe(true);  // 'a'
			expect(Char.isLetter(32)).toBe(false); // space
		}
	});
});