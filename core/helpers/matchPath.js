import pathToRegExp from 'path-to-regexp-es6'

const cache = new Map()

/**
 * Converts path to a regex, if a match is found then we extract params from it
 * @param routePattern
 * @param url
 * @returns {any}
 */
export default function matchPath(routePattern, url) {
  const [pathToMatch = '/', search = ''] = url.split('?');
  let regexp = cache.get(routePattern);

  if (!regexp) {
    const keys = [];
    regexp = {
      pattern: pathToRegExp(routePattern, keys),
      keys
    };
    cache.set(routePattern, regexp);
  }

  const m = regexp.pattern.exec(pathToMatch);

  if (!m) {
    return null;
  }

  const path = m[0];
  const params = Object.create(null);

  for (let i = 1; i < m.length; i += 1) {
    params[regexp.keys[i - 1].name] = decodeURIComponent(m[i]);
  }

  // Add querystring params
  Object.assign(params, mapSearchParams(search))

  return {
    path: path === '' ? '/' : path,
    params
  };
}

/**
 * Maps a querystring to an object
 * Supports arrays and utf-8 characters
 * @param search
 * @returns {any}
 */
function mapSearchParams(search) {
  let params = {};
  let params_re = /([^?&=]+)=?([^&]*)/g;

  if (search.indexOf('?') !== -1) {
    search = search.split('?')[1];
  }

  search.replace(params_re, function(m, name, value) {
    params[decodeURIComponent(name)] = decodeURIComponent(value);
  })

  return params;
}
