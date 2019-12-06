function heroesRouteRegex(route = '') {
  return /^\/heroes$/.test(route)
}

function profileRouteRegex(route = '') {
  return /^\/heroes\/[1-4]{1}$/.test(route)
}

function homeRouteRegex(route = '') {
  return route === '/'
}

export {
  heroesRouteRegex,
  profileRouteRegex,
  homeRouteRegex,
}
