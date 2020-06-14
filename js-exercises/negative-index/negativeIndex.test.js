import { negativeIndex } from './negativeIndex';

describe('negativeIndex', () => {
  test('behaves like an array', () => {
    const fixture = negativeIndex(['foo', 'bar', 'baz']);
    expect(fixture.length).toBe(3);
    expect(fixture.toString()).toBe('foo,bar,baz');
  });

  test('get values', () => {
    const fixture = negativeIndex(['foo', 'bar', 'baz']);
    expect(fixture[0]).toBe('foo');
    expect(fixture[1]).toBe('bar');
    expect(fixture[-1]).toBe('baz');
    expect(fixture[-2]).toBe('bar');
  });

  test('set values', () => {
	const arr = ['foo', 'bar', 'baz'];
    const fixture = negativeIndex(arr);
    fixture[0] = 0;
    expect(fixture).toEqual([0, 'bar', 'baz']);
    fixture[1] = 1;
    expect(fixture).toEqual([0, 1, 'baz']);
    fixture[-1] = -1;
    expect(fixture).toEqual([0, 1, -1]);
    fixture[-2] = -2;
	expect(fixture).toEqual([0, -2, -1]);
  });

  test('only accepts arrays', () => {
    expect(() => {
      negativeIndex({});
    }).toThrowError(TypeError, /Only arrays are supported/);

    expect(() => {
      negativeIndex(undefined);
    }).toThrowError(TypeError, /Only arrays are supported/);

    expect(() => {
      negativeIndex(null);
    }).toThrowError(TypeError, /Only arrays are supported/);

    expect(() => {
      negativeIndex(new Set([1, 2, 3]));
    }).toThrowError(TypeError, /Only arrays are supported/);
  });
});
