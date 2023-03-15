<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input type="text" v-show="todo.isEdit"  :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle"> 
      </label>
      
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>

    </li>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  //声明接收todo对象
  props: ["todo", ],
  methods: {
    //勾选
    handCheck(id) {
      this.$bus.$emit('checkTodo',id)
    },
    //删除
    handleDelete(id){
    if(confirm('确定删除么')){
      this.$bus.$emit('deleteTodo', id)
    }
    },
    //编辑
    handleEdit(todo){
    
      //console.log(Object.prototype.hasOwnProperty.call(todo,'isEdit'))
      //如果todo身上有isEdit
      if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
        todo.isEdit =  true
      }else{
        this.$set(todo,'isEdit',true)
      }
      //$nextTick的回调会在模板解析结束后执行
     this.$nextTick(function(){
      this.$refs.inputTitle.focus()
     })
      
    },
    //失去焦点回调
    handleBlur(todo,e){

      todo.isEdit=false
     // console.log(e)
     if(!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color:#ddd
}
li:hover button{
  display: block;
}
</style>