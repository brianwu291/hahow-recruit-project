function get(target = {}, props = '', def) {
  if (props === '') {
    return target
  }
  const propsArr = props.split('.')
  const result = propsArr.reduce((pre, cur) => (
    pre === null || pre[cur] === undefined ? def : pre[cur]
  ), target)
  return result
}

export default get
