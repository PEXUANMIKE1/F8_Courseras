export default function html([first, ...strings], ...values) {
    return values.reduce(
      (acc, cur) => acc.concat(cur, strings.shift()),
      [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
    .trim();
}

export function createStore(reducer) {
  let state = reducer();
  const roots = new Map()
  function render() {
    for(const [root,component] of roots){
      
    }
  }
}