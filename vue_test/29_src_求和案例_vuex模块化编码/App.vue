<template>
  <div>
   <my-count></my-count>
   <hr>
  <MyPersons></MyPersons>
  </div> 
</template>

<script>
import MyCount from './components/MyCount.vue'
import MyPersons from './components/MyPersons.vue'

export default {
  name: "App",

  methods: {},
  components: { MyCount , MyPersons},
};
</script>
<style>

</style>

