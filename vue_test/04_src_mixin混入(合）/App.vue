<template>
  <div>
    <MyStudent  />
    <hr />
    <MySchool  />
  </div>
</template>

<script>
//引入MySchool组件
import MyStudent from "./components/MyStudent.vue";
import MySchool from './components/MySchool.vue'
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool
  },
  data() {
    return {
      msg: "欢迎学习Vue！",
    };
  },
};
</script>

