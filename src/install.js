import VueAutoKana from './AutoKana.vue'

export default {
  install (Vue, options = {}) {
    // Create component instance
    Vue.component('AutoKana', VueAutoKana)
  }
}
