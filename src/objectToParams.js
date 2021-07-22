export default params => '?' + Object.keys(params)
  .map(param => `${param}=${encodeURIComponent(params[param])}`)
  .join('&');
