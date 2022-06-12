# 源泉徴収

日本国の源泉徴収 (所得税と復興特別所得税) を計算するパッケージです。

給与所得の源泉徴収税額を計算する例:

```html
<script src="./dist/gensen.umd.js"></script>
```

```js
const income = 200000  // after deduction social insurance premiums, etc.

const withholdingTax =
  gensen({ date: '2019-01-01T00:00:00+09:00' })
    .employmentIncome(200000)
    .monthly({ dependents: 2 })

const expected = 3140

console.assert(
  withholdingTax === expected,
  { expected, actual: withholdingTax }
)
```
