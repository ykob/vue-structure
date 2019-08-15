# Web API: The Good Parts

https://www.oreilly.co.jp/books/9784873116860/

O'REILLY JAPAN
水野 貴明 著

## 3章 レスポンスデータの設計

### 3.3.4 配列とフォーマット
APIで配列を返したいケースでは、配列をそのまま返す方法と、レスポンス全体をオブジェクトにしてその中に配列を入れる方法がある。  
オブジェクトで包んだ記述方法のほうがおすすめ。
- レスポンスデータが何を示しているかがわかりやすくなる。
- レスポンスデータをオブジェクトに統一することができる。
- セキュリティ上のリスクを避けることができる。
  - トップレベルが配列であるJSONは、JSONインジェクションという脆弱性に対するリスクが大きくなる。