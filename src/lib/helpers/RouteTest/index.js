function heroesRouteRegex(route = '') {
  return /^\/heroes$/.test(route)
}

function profileRouteRegex(route = '') {
  return /^\/heroes\/profile\/[1-4]{1}$/.test(route)
}

function homeRouteRegex(route = '') {
  return route === '/' // /^\/$/.test
}

export {
  heroesRouteRegex,
  profileRouteRegex,
  homeRouteRegex,
}
