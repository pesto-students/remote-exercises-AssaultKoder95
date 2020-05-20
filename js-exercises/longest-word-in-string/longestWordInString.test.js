import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  it('should return a string', () => {
    expect(typeof longestWordInString('hello world')).toBe('string');
  });

  it('should return empty string', () => {
    const testString = '';
    const expectedResult = '';

    const result = longestWordInString(testString);

    expect(result).toEqual(expectedResult);
  });

  it('should return longest word in the string', () => {
    const testString = 'well this is a test string I am creating in order to find longest word in the string';
    const expectedResult = 'creating';

    const result = longestWordInString(testString);

    expect(result).toEqual(expectedResult);
  });

  it('should return first longest word ( if two / more same length words are present ) in the string', () => {
    const testString = 'well this is a test string I am making to show that it will select string as answer';
    const expectedResult = 'string';

    const result = longestWordInString(testString);

    expect(result).toEqual(expectedResult);
  });
});
