import Vue from 'vue'
import Router from 'vue-router'
import camelCase from 'lodash/camelCase'

Vue.use(Router)

const registerRouterFiles = (prePath = {}) => {
  const requireModule = require.context('./views/', false, /\.vue$/)
  const routes = []
  const parsePath = name => prePath[name] ? prePath[name] : `/${name}`

  requireModule.keys().forEach(filename => {
    if (filename === './Login.vue' || filename === './NotExists.vue') return
    const moduleName = camelCase(filename.replace(/(\.\/|\.vue)/g, ''))
    routes.push({
      path: `${parsePath(moduleName)}`,
      name: moduleName,
      component: requireModule(filename).default
    })
  })

  return routes
}

const prePath = { 'Dashboard': '/' }

export default new Router({
  routes: registerRouterFiles(prePath)
})
