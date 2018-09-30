<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

    export default {
        name: 'app',
        components: {
            HelloWorld
        }
    }
</script>