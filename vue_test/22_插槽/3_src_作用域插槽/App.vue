<template>
  <div class="container">
    <MyCategory title="游戏">
     <template scope="atguigu">
      <ul >
        <li v-for="(item, index) in atguigu.games" :key="index">{{ item }}</li>
      </ul>
     </template>
    </MyCategory>

    <MyCategory title="游戏">
      <template scope="atguigu">
      <ol >
        <li v-for="(item, index) in atguigu.games" :key="index">{{ item }}</li>
      </ol>
     </template>
    </MyCategory>

    <MyCategory title="游戏">
      <!-- 解构赋值 -->
      <template scope="{games}">
      <h4 v-for="(g,index) in games" :key="index">{{ g }}</h4>
     </template>
    </MyCategory> 
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";

export default {
  name: "App",
  
  methods: {},
  components: { MyCategory },
};
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4{
  text-align: center;
}
</style>

