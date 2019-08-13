<template>
	<div>
		<div class="login-tab">
			<el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
			    <el-tab-pane label="供应商注册" name="first">供应商注册</el-tab-pane>
			    <el-tab-pane label="内部用户注册" name="second">内部用户注册</el-tab-pane> 
			</el-tabs>
		</div>
	</div>
</template>

<script>
	 export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
	 
</script>

<style>
	.login-tab .el-tabs__nav{float:none; text-align: center;}
	.login-tab .el-tabs__active-bar{ display: none;}
	.login-tab .el-tabs__item.is-active{border-bottom: 3px solid #20a0ff;} 
	.login-tab .el-tabs__item{ margin: 0 20px; padding:0 16px!important;}
</style>