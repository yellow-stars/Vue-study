<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <my-header :addTodo="addTodo" />
          <my-list :todos="todos" />
          <my-footer :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//引入MySchool组件
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },

  data() {
    return {
      //这里直接JSON.parse(localStorage.getItem('todos'))返回null会报错在data里用||判断一下
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //取消or勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //删除tudo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //全选or取消
    checkAllTodo(boollean){
       this.todos.forEach((todo)=>{
            todo.done = boollean
       })
    },
    //清除所有已完成的todo
    clearAllTodo(){
      this.todos= this.todos.filter((todo)=>{
        return !todo.done
      })
    },
    //更新
    updateTodo(id,title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
    
  },

mounted(){
  this.$bus.$on('checkTodo',this.checkTodo)
  this.$bus.$on('deleteTodo',this.deleteTodo)
  this.$bus.$on('updateTodo',this.updateTodo)
  
},
beforeDestroy(){
  this.$bus.$off('checkTodo')
  this.$bus.$off('deleteTodo')
  this.$bus.$off('updateTodo')
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