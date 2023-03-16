<template>
  
    <div class="container">
      <MySearch></MySearch>
      <MyList></MyList>
    </div>
  
</template>

<script>
import MySearch from './components/MySearch.vue';
import MyList from './components/MyList.vue'

export default {
    name: "App",
    methods: {},
    components: { MySearch ,MyList}
};
</script>
<style>

</style>

