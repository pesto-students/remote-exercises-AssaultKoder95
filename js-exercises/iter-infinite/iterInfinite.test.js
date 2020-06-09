import { count } from './iterInfinite';

describe('Count function', () => {
  test('should be an iterable', () => {
    const iterator = count(10);
    expect(typeof iterator.next).toBe('function');
    expect(iterator.next()).toHaveProperty('value');
    expect(iterator.next()).toHaveProperty('done');
  });

  test('should return count series', () => {
    const iterator = count(10);
    expect(iterator.next().value).toBe(10);
    expect(iterator.next().value).toBe(11);
    expect(iterator.next().value).toBe(12);
    expect(iterator.next().value).toBe(13);
    expect(iterator.next().value).toBe(14);
    expect(iterator.next().value).toBe(15);
  });

  test('should return count series when step value is present', () => {
    const iterator = count(10, 5);
    expect(iterator.next().value).toBe(10);
    expect(iterator.next().value).toBe(15);
    expect(iterator.next().value).toBe(20);
    expect(iterator.next().value).toBe(25);
    expect(iterator.next().value).toBe(30);
    expect(iterator.next().value).toBe(35);
  });
});
