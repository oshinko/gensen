# 源泉徴収

日本国の源泉徴収 (所得税と復興特別所得税) を計算するパッケージです。

給与所得の源泉徴収税額を計算する例:

```js
const withholdingTax =
  gensen({ date: '2019-01-01' })
    .income(171890)
    .monthly({ dependents: 2 })

const expected = 2140

console.assert(
  withholdingTax === expected,
  { expected, actual: withholdingTax }
)
```
