<template>
  <div>
    <MyTest/>
    <MyTest2/>
    <MyTest3/>
  </div>
</template>

<script>
import MyTest from './components/MyTest'
import MyTest2 from './components/MyTest2'
import MyTest3 from './components/MyTest3'


export default {
  name: "App",
  components: {
   MyTest,
   MyTest2,
   MyTest3
  },

  data() {
    return {
     
    };
  },
 



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
.btn-edit {
  color: #fff;
  background-color: #38e5e5;
  border: 1px solid #30c0c0;
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