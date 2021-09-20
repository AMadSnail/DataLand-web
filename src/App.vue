<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view/>
  </div>
</template>
<script>
import vueHeader from './views/header/index.vue'
export default {
  components: {
    vueHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
body{
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
