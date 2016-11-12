import UnionFind from '../src';

describe('unionfind', () => {
  it('can be empty', () => {
    /* eslint-disable no-unused-vars */
    var uf = new UnionFind(0);
    /* eslint-enable no-unused-vars */
  });

  it('is correct step by step for small data', () => {
    var uf = new UnionFind(4);
    expect(uf.find(0)).toBe(0);
    expect(uf.find(1)).toBe(1);
    expect(uf.find(2)).toBe(2);
    expect(uf.find(3)).toBe(3);

    uf.union(0, 1);
    expect(uf.find(0)).toBe(0);
    expect(uf.find(1)).toBe(0);
    expect(uf.find(2)).toBe(2);
    expect(uf.find(3)).toBe(3);

    uf.union(3, 2);
    expect(uf.find(0)).toBe(0);
    expect(uf.find(1)).toBe(0);
    expect(uf.find(2)).toBe(3);
    expect(uf.find(3)).toBe(3);

    uf.union(2, 0);
    expect(uf.find(0)).toBe(3);
    expect(uf.find(1)).toBe(3);
    expect(uf.find(2)).toBe(3);
    expect(uf.find(3)).toBe(3);
  });

  it('is correct for larger data', () => {
    var uf = new UnionFind(10);
    uf.union(0, 2);
    uf.union(1, 3);
    uf.union(2, 7);
    uf.union(4, 6);
    uf.union(5, 7);
    uf.union(0, 4);

    expect(uf.find(0)).toBe(0);
    expect(uf.find(1)).toBe(1);
    expect(uf.find(2)).toBe(0);
    expect(uf.find(3)).toBe(1);
    expect(uf.find(4)).toBe(0);
    expect(uf.find(5)).toBe(0);
    expect(uf.find(6)).toBe(0);
    expect(uf.find(7)).toBe(0);
    expect(uf.find(8)).toBe(8);
    expect(uf.find(9)).toBe(9);
  });
});
