import { reverse, equal } from './betterStringLib';

describe('reverse', () => {
  it('should reverse string with characters beyond ascii values', () => {
    expect(reverse('abcdefgh')).toBe('hgfedcba');
    expect(reverse('@2 foo - 𝌆 - bar $$')).toBe('$$ rab - 𝌆 - oof 2@');
    expect(reverse('α β γ η κ λ ω')).toBe('ω λ κ η γ β α');
    expect(reverse('℗ 𝌆 abc')).toBe('cba 𝌆 ℗');
    expect(reverse('abcd 𝌆☃★♲你 ฿')).toBe('฿ 你♲★☃𝌆 dcba');
    expect(reverse('É 𝌆 ☃ ü ★ ♲ 你 lala')).toBe('alal 你 ♲ ★ ü ☃ 𝌆 É');
  });
});

describe('equal', () => {
  it('should return true ', () => {
    expect(equal('mañana', 'mañana')).toBe(true);
    expect(equal('abcd 𝌆☃★♲你 ฿', 'abcd 𝌆☃★♲你 ฿')).toBe(true);
    expect(equal('É 𝌆 ☃ ü ★ ♲ 你 lala', 'É 𝌆 ☃ ü ★ ♲ 你 lala')).toBe(true);
  });

  it('should return false ', () => {
	expect(equal('môñana', 'mõñana')).toBe(false);
    expect(equal('abcd 𝌆☃★Ω♲你 ฿', 'abcd 𝌆☃★Φ♲你 ฿')).toBe(false);
    expect(equal('É Ξ ☃ ü ★ ♲ 你 lala', 'É 𝌆 ☃ ü ★ ♲ 你 lala')).toBe(false);
  });
});
