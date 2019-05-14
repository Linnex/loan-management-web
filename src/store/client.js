import { set } from '../utils/vuex'
import { load, save, remove } from '../utils/http'

const state = {
  clients: []
}

const mutations = {
  PARSE: set('clients')
}

const url = 'api/clients/'

const actions = {
  load: load(url, 'PARSE'),
  save: save(url),
  remove: remove(url)
}

export default { state, mutations, actions }
