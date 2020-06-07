import { alphabeticShift, alphabeticShiftUsingShiftFactor } from './alphabeticShift';

describe('Alphabetic Shift Test Cases', () => {
  test('Should return a string', () => {
    const result = alphabeticShift('abc');
    expect(typeof result).toBe('string');
  });

  it('returns a shifted string', () => {
    expect(alphabeticShift('Pseudopseudohypoparathyroidism')).toEqual('Qtfvepqtfvepizqpqbsbuizspjejtn');

    expect(alphabeticShift('Floccinaucinihilipilification')).toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Floccinaucinihilipilification')).toEqual('Gmpddjobvdjojijmjqjmjgjdbujpo');

    expect(alphabeticShift('Antidisestablishmentarianism')).toEqual('Boujejtftubcmjtinfoubsjbojtn');

    expect(alphabeticShift('supercalifragilisticexpialidocious')).toEqual('tvqfsdbmjgsbhjmjtujdfyqjbmjepdjpvt');
  });

  test('Should return same string is shift key is multiple of 26', () => {
    expect(alphabeticShiftUsingShiftFactor('abcdefghijklmno', 26)).toEqual('abcdefghijklmno');
    expect(alphabeticShiftUsingShiftFactor('abcdefghijklmno', 52)).toEqual('abcdefghijklmno');
    expect(alphabeticShiftUsingShiftFactor('ABCDEFGHIJKLMNO', 26)).toEqual('ABCDEFGHIJKLMNO');
    expect(alphabeticShiftUsingShiftFactor('ABCDEFGHIJKLMNO', 52)).toEqual('ABCDEFGHIJKLMNO');
  });

  test('Should effectively wrap the string if addition to shift key exceeds range values', () => {
    expect(alphabeticShiftUsingShiftFactor('xyz', 25)).toEqual('wxy');
    expect(alphabeticShiftUsingShiftFactor('AZAZAZ', 2)).toEqual('CBCBCB');
  });
});
