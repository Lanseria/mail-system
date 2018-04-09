<template>
  <div class="hello">
    <div class="marker" ref="marker"></div>
    <button @click="addVueComponents">add</button>
    <card ref="cardTemplate" v-show="false"/>
  </div>
</template>

<script>
import card from './card'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    addVueComponents () {
      console.log(this.$refs.cardTemplate)
      const helloW = document.createElement('div')
      helloW.innerHTML = 'hello'
      this.$refs.marker.appendChild(this.$refs.cardTemplate.$el)
    }
  },
  components: {
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
