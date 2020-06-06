import { freqSort } from './freqSort';

describe('Frequency Sort', () => {
  test('should return an array', () => {
    const characterArray = ['a', 'b', 'c', 'd', 'e', 'f'];
    const result = freqSort(characterArray);
    expect(Array.isArray(result)).toBe(true);
  });

  test('should return an empty array', () => {
    const characterArray = [];
    const result = freqSort(characterArray);
    expect(result).toEqual([]);
  });

  test('should return an empty array', () => {
    const characterArray = [];
    const result = freqSort(characterArray);
    expect(result).toEqual([]);
  });

  test('should return a single element array', () => {
    const characterArray = ['a'];
    const result = freqSort(characterArray);
    expect(result).toEqual(['a']);
  });

  describe('should return frequency wise sorted array', () => {
    test('when unique values are provided', () => {
      const characterArray = [...new Array(5).fill('a'), ...new Array(5).fill('d'), ...new Array(5).fill('c')];
      const result = freqSort(characterArray);
      expect(result).toEqual(['a', 'd', 'c']);
    });

    test('when only 1 unique value is present in whole array', () => {
      const characterArray = new Array(10).fill('a');
      const result = freqSort(characterArray);
      expect(result).toEqual(['a']);
    });

    test('when a generic array is passed', () => {
      const characterArray = ['b', 'c', 'd', 'a', 'b', 'c', 'd', 'e', 'f', 'c', 'd'];
      const result = freqSort(characterArray);
      expect(result).toEqual(['c', 'd', 'b', 'a', 'e', 'f']);
    });

    test('when a numeric array is passed', () => {
      const numberArray = [1, 2, 4, 5, 23, 1, 4, 5, 12, 124, 5, 2, 4];
      const result = freqSort(numberArray);
      expect(result).toEqual([4, 5, 1, 2, 23, 12, 124]);
    });
  });
});
