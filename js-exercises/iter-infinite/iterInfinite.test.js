import { count, cycle, repeat } from './iterInfinite';

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

describe('Cycle function', () => {
  test('should be an iterable', () => {
    const iterator = cycle('abc');
    expect(typeof iterator.next).toBe('function');
    expect(iterator.next()).toHaveProperty('value');
    expect(iterator.next()).toHaveProperty('done');
  });

  test('should follow circular series', () => {
    const iterator = cycle('abcd');
    expect(iterator.next().value).toBe('a');
    expect(iterator.next().value).toBe('b');
    expect(iterator.next().value).toBe('c');
    expect(iterator.next().value).toBe('d');
    expect(iterator.next().value).toBe('a');
  });

  test('should return circular series when step value is present', () => {
    const iterator = cycle('abcd', 10);
    expect(iterator.next().value).toBe('a');
    expect(iterator.next().value).toBe('b');
    expect(iterator.next().value).toBe('c');
    expect(iterator.next().value).toBe('d');
    expect(iterator.next().value).toBe('a');
    expect(iterator.next().value).toBe('b');
    expect(iterator.next().value).toBe('c');
    expect(iterator.next().value).toBe('d');
    expect(iterator.next().value).toBe('a');
    expect(iterator.next().value).toBe('b');

    // Post 10 cycles it should return done as true
    const result = iterator.next();
    expect(result.value).toBe(undefined);
    expect(result.done).toBe(true);
  });
});

describe('Repeat function', () => {
  test('should be an iterable', () => {
    const iterator = repeat(3);
    expect(typeof iterator.next).toBe('function');
    expect(iterator.next()).toHaveProperty('value');
    expect(iterator.next()).toHaveProperty('done');
  });

  test('should repeat the input infinitely', () => {
    const iterator = repeat(4);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(4);
  });

  test('should return circular series when step value is present', () => {
    const iterator = repeat(1024, 10);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);
    expect(iterator.next().value).toBe(1024);

    // Post 10 cycles it should return done as true
    const result = iterator.next();
    expect(result.value).toBe(undefined);
    expect(result.done).toBe(true);
  });
});
