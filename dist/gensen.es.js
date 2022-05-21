function* zip(...arrays) {
  try {
    arrays[0] = [...arrays[0]];
  } catch {
    throw Error(`TypeError: First argument "${arrays[0]}" is not iterable`);
  }
  for (const i in arrays[0])
    yield arrays.map((array) => array[i]);
}
var main = {
  zip
};
export { main as default, zip };
