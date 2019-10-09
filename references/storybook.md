# Vue-CLIにStorybookを導入する

## Storybookとは
https://storybook.js.org/
> Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient.

## Install
1. Vue-CLI専用のStorybook導入のためのプラグインが存在するので、それを使う。  
- [vue-cli-plugin-storybook](https://github.com/storybookjs/vue-cli-plugin-storybook)
```
vue add storybook
```

2. package.jsonに必要なモジュールが追加されるので、それをインストールする。  
```
npm install
```

3. `storybook`コマンドが使えるようになっているので、Storybookを初期化する。
```
storybook init
```

4. Storybookを起動することができる。
```
npm run storybook
```

## Storybook内でSCSSとPugを使用する
Storybookは本体の開発ファイルのwebpack.config.jsの内容を引き継がないため、独自に定義・作成する必要がある。  
何も準備しないまま `npm run storybook` すると当然Parse Errorになる。  
Storybook用のwebpack.config.jsは `.storybook` の直下に置く。  
