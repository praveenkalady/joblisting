export const groupBy = (array, key, keepindex) => {
  let index = 0;
  return array.reduce((hash, obj) => {
    if (keepindex) {
      obj.index = index;
      index += 1;
    }
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
};
