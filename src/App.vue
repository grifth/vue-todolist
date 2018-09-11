<template>
  <div id="app">
    <input  type="text" @keyup.enter="addNew" v-focus/>
    <ul class="">
    	<li :class="{editing:item===currentEditing}" v-for="(item,index) of todos">
        <div class="view">
            <input type="checkbox" v-model="item.completed">
            <label @dblclick="currentEditing=item">{{item.title}}</label>
            <button type="button" name="button" @dblclick="removeTodo(index)">X</button>
        </div>
        <input class="edit" v-model="item.title" @keyup.enter="currentEditing=null" @blur="currentEditing = null" >
    	</li>
    </ul>
  </div>
</template>

<script>
const todos = [
  {
    id:1,
    title:'士郎',
    completed:false
  },
  {
    id:2,
    title:'切嗣',
    completed:false
  },
]

export default {

  name: 'App',
    data () {
  	return {
      todos,
      currentEditing:null
  	}
  },
  methods:{
    addNew(){
      var todoText = event.target.value.trim()
      if(!todoText.length){
        return
      }
      var lastTodo = this.todos[this.todos.length-1]
      var id = lastTodo ? lastTodo+1:1
      this.todos.push({
        id,
        title:todoText,
        completed:false
      })
      event.target.value=""
    },
    removeTodo(index){
      this.todos.splice(index,1)
    },

  },

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 500px;
  margin:0 auto;
  border:1px solid red;
}
li{
  list-style: none;
  position: relative;
  right: 10px;

}

button{
  cursor:pointer;
  position: absolute;
  right:0;
}
.edit{
  display: none;
}

.editing .edit{
  display: block;
  margin:0 auto;
}
.editing .view{
  display: none;
}
</style>
