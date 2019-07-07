# コンポーネントの分類

## Atomic Design

http://atomicdesign.bradfrost.com/chapter-2/

### Atoms

- 他のAtoms要素をimportすることができる。
- 内包するコンポーネントが持つ機能の合計数が1つである。
- 固有のdata、methodsを持つことができない。状態はpropsによって管理される。

### Molecules

- Atoms要素をimportすることができる。
- 内包するコンポーネントが持つ機能の合計数が2つである。
- 固有のdata、methodsを持つことができない。状態はpropsによって管理される。

### Organisms

- Atoms、Molecules要素をimportすることができる。必ずしもMolecules要素を含んでいる必要はない。
- 内包するコンポーネントが持つ機能の数に制限はない。
- 固有のdata、methodsを持つことができる。
- ヘッダ、フッタなどのグローバルな要素ではない。

### Templates

- Atoms、Molecules、Organisms要素をimportすることができる。必ずしもMolecules、Organisms要素を含んでいる必要はない。
- 内包するコンポーネントが持つ機能の数に制限はない。
- 固有のdata、methodsを持つことができる。

### Pages

- Vue Routerのrouter-viewで直接制御する対象である。
- 固有のdata、methodsを持つことができる。
