# union-find-js
Union find data structure in javascript, implementing "union by rank" and "path compression", compatible with script tag, AMD, commonjs and ES6.

### Installation

Find it in the <code>dist</code> directory, or <code>npm install union-find-js</code>. Then:

To use with script tag:

```html
<script src="/path/to/union-find-js/dist/unionfind.min.js"></script>
```

or with AMD:

```javascript
define(['union-find-js'],function(UnionFind){})
```

or with commonjs:

```javascript
var UnionFind = require('union-find-js');
```

or with ES6:
```javascript
import UnionFind from 'union-find-js';
```

### Usage

Union find data structure should be "**new**"ed. It supports only two methods: **union** and **find**.

```javascript
// make a union find data structure support 5 nodes: 0, 1, 2, 3, 4
var uf = new UnionFind(5);

// union node 0 and 2
uf.union(0, 2);

// union node 1 and 2
uf.union(1, 2);

// find the labe of node 2 (label should be 0)
var label = uf.find(2);
```

### license

MIT
