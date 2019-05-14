import { set } from '../utils/vuex'
import { load, save, remove } from '../utils/http'

const state = {
  loans: []
}

const mutations = {
  PARSE: set('loans')
}

const url = 'api/loans/'

const actions = {
  load: load(url, 'PARSE'),
  save: save(url),
  remove: remove(url)
}

export default { state, mutations, actions }
