# コンポーネントの分類

## Atomic Design

http://atomicdesign.bradfrost.com/chapter-2/

Atomic Designが示す分類を見た目だけに当てはめて判断、分類すると、実際にVue Componentとして定義した際に、機能面での使いにくさや分類のわかりにくさを生む原因になる。  
そこでAtomic Designが定義する5つの分類の階層や名前はそのまま、分類方法を機能面で判断することによって使いやすさやわかりやすさを担保していく。  

### Ions

- Atomic Designの原典には存在しない、独自拡張の分類。
- Atoms未満の粒度であり、単純なHTMLとCSSでのみ構成される。
- propsをまったく持たない。
    - この要素の状態の変化はFLOCSSのmodifilerで管理、制御する。
- Vue Componentにする必要がないため、FLOCSSのcomponentやutilityなどとして定義する。

### Atoms

- 他のAtoms要素をimportすることができる。
  - 逆に言えば他のAtoms要素をimportしているというだけではMoleculesにしない。
- 自身と内包するコンポーネントが持つ機能の合計数が1つ以下である。
- 固有のdata、methodsを持つことができない。状態や機能は親コンポーネントからpropsとして渡される。
    - 但し、引数を用いてclassやsytle属性の値を生成するといったような、何らかの状態を直接更新することのないmethodはその対象ではない。
    - マウスオンによって要素の色が変わるだけなどの、CSSの値が変わるだけ且つ可視/不可視の状態が変わらないmethodもその対象ではない。

### Molecules

- Atoms要素をimportすることができる。
- 自身と内包するコンポーネントが持つ機能の合計数が2つ以上である。
- 固有のmethodsを持つことができる。
- 固有のdataを持つことができない。状態は親コンポーネントからpropsとして渡される。

### Organisms

- Atoms、Molecules、他のOrganisms要素をimportすることができる。
  - 必ずしもMolecules要素を含んでいる必要はない。
- 自身と内包するコンポーネントが持つ機能の合計数に制限はない。
- 固有のdata、methodsを持つことができる。
- グローバルな要素ではない。
  - グローバルな要素とは、特定のページの外に存在し、それ自体が再利用される可能性がないものを指す。
  - グローバルヘッダ、グローバルフッタ、サイドメニューなど。

### Templates

- Atoms、Molecules、Organisms要素をimportすることができる。
  - 必ずしもMolecules、Organisms要素を含んでいる必要はない。
- 自身と内包するコンポーネントが持つ機能の合計数に制限はない。
- 固有のdata、methodsを持つことができる。
- グローバルな要素である。

### Views(Pages)

- ページの本文全体を指す。
- Atomic Design上の命名はPagesだが、ViewsにすることでAtomsからViewsまでのアルファベットが昇順になり、ディレクトリの順番がAtomic Designの粒度の順番と一致し一覧性が向上するため、Viewsと改名する。
- Vue Routerのrouter-viewで直接制御する対象である。
- 固有のdata、methodsを持つことができる。

## 参考

- [Extending Atomic Design](http://bradfrost.com/blog/post/extending-atomic-design/)
