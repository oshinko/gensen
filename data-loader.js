import path from 'path'

// https://ja.vitejs.dev/guide/using-plugins.html
export default (_options = {}) => {
  return {
    transform(code, id) {
      const ext = path.extname(id)

      if (!['.csv'].includes(ext))
        return

      const [columns, ...rows] = code
        .trim()
        .split('\n')
        .map(row => row.split(','))

      const data = rows
        .map(cols => cols.map(x => (x ?? '') === '' ? null : Number(x)))

      return {
        code: `
export default {
  columns: ${JSON.stringify(columns)},

  get data() {
    return ${JSON.stringify(data)}.map(row => row.reduce((acc, val, i) => ({
      ...acc, [this.columns[i]]: val
    }), {}))
  }
}
`.trim(),
        map: { mappings: '' }
      }
    }
  }
}
