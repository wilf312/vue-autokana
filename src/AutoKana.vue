<template>
  <input @keyup="onKeyUp" />
</template>

<script>
import historykana from 'historykana'

var logic = (history, value) => {
  history.push(value)
  return historykana(history)
}

export default {
  name,
  data () {
    return {
      name,
      kana: '',
      _value: '',
      history: []
    }
  },
  props: {
    value: String,
    onChange: Function
  },
  methods: {
    onKeyUp: function ({target: {value: _value = ''}}) {
      this.kana = logic(this.history, _value)
      this.onChange(this.kana)
    }
  }
}
</script>
<style>
</style>
