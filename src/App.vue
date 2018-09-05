<template>
  <div id="app">
    <input  type="text" v-model="itemNew" v-on:keyup.enter="addNew"/>
    <ul>
    	<li v-for="item in items" :class="{isStudent:item.student}" @click="turnRed(item)">
    		{{item.name}}
    	</li>
    </ul>
  </div>
</template>

<script>
import Storage from './localstorage'

export default {
  name: 'App',
    data () {
  	return {
  		msg:'Type name and mark who is student',
  		items:Storage.fetch(),//获取存在 storage 里面的键值对
  		itemNew:''
  	}
  },
    methods:{
  	turnRed: function (item) {
  		//逆反布尔值
  		item.student = !item.student;
  	},
  	addNew:function () {
  		this.items.push({
  			name : this.itemNew,
  			student : false
  		});
  		//清空文本栏
  		this.itemNew = null;
  	}
  },
  watch:{

		
  	items:{
					
	  	 handler: function (items) {
	      Storage.save(items);
	    },									
	  	deep:true						
  	}
  }

}
</script>

<style>
.isStudent {
	color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
