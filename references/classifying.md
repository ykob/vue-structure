# コンポーネントの分類

## Atomic Design

http://atomicdesign.bradfrost.com/chapter-2/

Atomic Designが示す分類を見た目だけに当てはめて判断、分類すると、実際にVue Componentとして定義した際に、機能面での使いにくさや分類のわかりにくさを生む原因になる。  
そこでAtomic Designが定義する5つの分類の階層や名前はそのまま、分類方法を機能面で判断することによって使いやすさやわかりやすさを担保していく。  

### Ions

- Atomic Designの原典には存在しない、独自拡張の分類。
- Atoms未満の粒度であり、単純なHTMLとCSSでのみ構成される。
- propsをまったく持たない。
- Vue Componentにする必要がないため、FLOCSSのcomponentやutilityなどとして定義する。
- この要素の状態の変化はFLOCSSのmodifilerで管理、制御する。

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

- ページの本文全体を指す。
- Vue Routerのrouter-viewで直接制御する対象である。
- 固有のdata、methodsを持つことができる。

## 参考

- [Extending Atomic Design](http://bradfrost.com/blog/post/extending-atomic-design/)
