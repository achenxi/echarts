<template>
	 <div>
	 	<button @click="isLogin">登录</button>
	 </div>
</template>

<script>
export default {
  	name: 'Login',
  	methods:{ 
		isLogin:function() {  
      	 	this.$router.push({ path: '/main' });
	    } 
	}
}
</script>
