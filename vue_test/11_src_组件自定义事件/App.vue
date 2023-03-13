<template>
  <div>
    <MyStudent v-on:atguigu="getStudentName" @demo="m1"/>
    <hr />
    <MySchool />
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
  methods:{
    getStudentName(name){
      console.log('demo被调用了',name)
    },
    m1(){
      console.log('demo事件被触发了')
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>