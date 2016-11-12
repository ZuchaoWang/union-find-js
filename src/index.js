export default class UnionFind {
  constructor(n) {
    this.parents = new Array(n);
    this.ranks = new Array(n);
    for (var i = 0; i < n; i++) {
      this.parents[i] = i;
      this.ranks[i] = 0;
    }
  }

  find(i) {
    var parents = this.parents,
      root = i;
    while (root !== parents[root]) {
      root = parents[root];
    }

    // path compression
    var cur = i;
    while (root !== parents[cur]) {
      cur = parents[cur];
      parents[cur] = root;
    }

    return root;
  }

  union(i, j) {
    var parents = this.parents,
      ranks = this.ranks,
      iroot = this.find(i),
      jroot = this.find(j);

    // union by rank
    if (ranks[iroot] < ranks[jroot]) {
      parents[iroot] = jroot;
    } else if (ranks[iroot] > ranks[jroot]) {
      parents[jroot] = iroot;
    } else {
      parents[jroot] = iroot;
      ranks[iroot]++;
    }
  }
}
