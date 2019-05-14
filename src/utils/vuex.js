import camelCase from 'lodash/camelCase'

const registerStoreModules = () => {
  const requireModule = require.context('../store', false, /\.js$/)
  const modules = {}

  requireModule.keys().forEach(filename => {
    if (filename === './index.js') return
    const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ''))
    modules[moduleName] = {
      ...requireModule(filename).default,
      namespaced: true
    }
  })
  return modules
}

const set = property => (state, payload) => (state[property] = payload)

const toggle = property => state => (state[property] = !state[property])

export {
  set,
  toggle,
  registerStoreModules
}
