import { allPromises } from './allPromises';

describe('allPromises', () => {
  test('The function should return a Promise', () => {
    expect(allPromises([Promise.resolve(1)]) instanceof Promise).toBe(true);
  });

  test('The function should throw an error if argument is not an array', () => {
    const promises = { p1: Promise.resolve(1), p2: Promise.resolve(2) };

    return expect(() => allPromises(promises)).toThrowError(
      new Error('Incorrect argument type, it should be an array')
    );
  });

  test('The function should resolve if argument is an empty array', () => {
    const promises = [];
    return expect(allPromises(promises)).resolves.toEqual([]);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise((res) => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    return expect(allPromises([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
  });

  test('Promise call should terminate if any of promises is rejected', () => {
    const p1 = new Promise((res) => res(1));
    const p2 = 2;
    const p3 = Promise.reject(3);
    return expect(allPromises([p1, p2, p3])).rejects.toEqual(3);
  });
});
