<template>
  <div>
    <MyStudent name="李四" :age="19" sex="女" />
    <hr />
    <MyStudent name="张三" sex="男" :age="18" />
  </div>
</template>

<script>
//引入MySchool组件
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MyStudent,
  },
  data() {
    return {
      msg: "欢迎学习Vue！",
    };
  },
};
</script>

