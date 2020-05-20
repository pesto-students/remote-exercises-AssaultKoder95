import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a reversed arguments: ', () => {
    let intialFn = (a, b, c) => `${a} ${b} ${c}`;
    let flippedArgsFn = flipArgs(intialFn);

    const result = flippedArgsFn('a', 'b', 'c');

    expect(result).toEqual('c b a');
  });
});
