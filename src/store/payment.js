import { set } from '../utils/vuex'
import { load, save, remove } from '../utils/http'

const state = {
  payments: []
}

const mutations = {
  PARSE: set('payments')
}

const url = 'api/payments/'

const actions = {
  load: load(url, 'PARSE'),
  save: save(url),
  remove: remove(url)
}

export default { state, mutations, actions }
