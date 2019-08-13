<template>
	<div>
		<span>列表2</span>
		 <div id="echartContainer" style="width:500px; height:500px"></div>
	</div>
</template>

<script>
	
	export default({
    data(){
        return{
        	barlist: [],  
        	 
            optionline:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
			        name: '产品'
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [],
			        itemStyle: {   
			            normal: {
			              color: 'hotpink'
			            }
			        }
			    }]
            } 
        }
    },
    
    mounted() {
       this.drawBarChart();
    },
    methods: {
      drawBarChart() {
      // 基于准备好的dom，初始化echarts实例
      
       
      
      var myChart = this.$echarts.init(document.getElementById('echartContainer'), 'infographic');
      // 绘制基本图表
      myChart.setOption(this.optionline);

      //获取数据
       this.$http.get('static/demo.json').then(res => {
       	this.barlist = res.data.product; 
      	console.log("json数据为:" + res.body)//此处的res对象包含了json的文件信息和数据
         myChart.hideLoading();
          myChart.setOption({
            series: [{
              data: res.data.product  //将异步请求获取到的数据进行装载
            }]
          })
      })
     	/*this.$http.get('http://localhost/vue/demo.json').then(res => {
		  	console.log("json数据为:" + res.body)//此处的res对象包含了json的文件信息和数据
		})*/
		/*this.$http.get('static/demo.json').then(res => {
			this.faultlist = res.data;
		 console.log("json数据为:" + this.faultlist)//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
		})*/
		/*this.$http.get('static/demo.json').then(res => { 
		     //   this.userlist = res.data.product; 
		     console.log(this.userlist);  
		      myChart.hideLoading();
		     myChart.setOption({
            series: [{
              data: res.data.product  //将异步请求获取到的数据进行装载
            }]
          })
		    }) */
		
		
		//this.$ajax.get('http://localhost:80/static/demo' +'.json') .then( response => { this.json = response.data; }) 
		
		
		
		
    }
    }
}) 
</script>

<style>
</style>