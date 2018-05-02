import Vue from 'vue'
import AutoKana from '../src/AutoKana.vue'

/* eslint-disable no-new */
new Vue({
  data () {
    return {
      kanaed: '',
      kanaed2: '',
      testvalue: 'あああ'
    }
  },
  template: '<div><h3>auto kana</h3>' +
  '<AutoKana :onChange="onChange" :value="testvalue" />' +
  '<AutoKana :onChange="onChange2" />' +
  '{{kanaed}}' +
  '{{kanaed2}}' +
  '</div>',
  methods: {
    onChange: function (v) {
      this.kanaed = v
    },
    onChange2: function (v) {
      this.kanaed2 = v
    }
  },
  components: {
    AutoKana
  }
}).$mount('#app')
