const _base = 'http://localhost:3000/public/';

const getURL = (path) => {
  return `${_base}${path}`
}

export default getURL;