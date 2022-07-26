import { discountPercentage } from './Price';

describe('Discount Percentage Test', () => {
  it('100円が50円引きのとき50%になる', () => {
    const percentage = discountPercentage({
      selling_price: 50,
      original_price: 100,
      discounted: true,
      discount_amount: 50,
      discount_percentage: 50,
    });
    expect(percentage).toBe(50);
  });
  it('30円が20円引きのときに66%になる', () => {
    const percentage = discountPercentage({
      selling_price: 10,
      original_price: 30,
      discounted: true,
      discount_amount: 20,
      discount_percentage: 0,
    });
    expect(percentage).toBe(66);
  });
  it('元値が0円のときに0%になる', () => {
    const percentage = discountPercentage({
      selling_price: 0,
      original_price: 0,
      discounted: true,
      discount_amount: 0,
      discount_percentage: 0,
    });
    expect(percentage).toBe(0);
  });
});
