<template>
	<div>
		
		<header class="header">
			
			 
			<h1 class="header-title">欢迎登陆监控系统！</h1> 
			<div class="login-out" style="float:right;">
				<p>  
					<span><router-link class="button" :to="{path: '/'}">Logout</router-link></span>
				</p>
			</div>
		</header>
		<div class="content">
			<div class="main-left">
				 
				<ul class="nav-ul">
			        <router-link v-for="item in nav_list" :key="item.name" :to="{ path: item.path }" tag="li" active-class="active">
			            {{ item.name }}
			        </router-link> 
	      	 	</ul>  
	      	 	  
			</div>
			<div class="main-right clearfix"> 
				 <router-view></router-view>
			</div>
		</div>
		<footer> 
		</footer> 
		
		 
		
	</div>
</template>
<script> 
	export default {  
		 data () {
    return { 
    	 
       
      nav_list: [
      	{
          name: '列表1',
          path: 'list', 
          active: false
        },
        {
          name: '列表2',
          path: 'list2', 
          active: false
        } ,
        {
          name: '列表3',
          path: 'list3', 
          active: false
        } ,
        {
          name: '列表4-e-ui',
          path: 'list4', 
          active: false
        } 
         
      ] 
    }
 }
	}
</script>
