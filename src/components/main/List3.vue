<template>
	<div>
		<span>列表2</span>
		 <<!-- 折线图 -->
        <div id="chartmainline" style="width:600px; height:400px;"></div>
        <!-- 柱状图 -->
        <div id="chartmainbar" style="width:600px; height:400px;"></div> 
	</div>
</template>

<script>
	
	export default({
    data(){
        return{
        	linedata: [],  
        	bardata: [],  
        	time1:[],
        	 
            optionline:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:[]
                },
                yAxis:{
 
                },
                series:[{
                    name:'访问量',
                    type:'line', //设置图表主题
                    data:[]
                }]
            },
            optionbar:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:["Android","IOS","PC","Ohter"]
                },
                yAxis:{
 
                },
                series:[{
                    name:'访问量',
                    type:'bar', //设置图表主题
                    data:[]
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
	      
	      //基于准本好的DOM，初始化echarts实例
	        let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
	        let chartmainbar = this.$echarts.init(document.getElementById("chartmainbar"));
	        //绘制图表
	        chartmainline.setOption(this.optionline);
	        chartmainbar.setOption(this.optionbar);
	        
	        this.$http.get('static/demo.json').then(res => {
	        	
	       		this.linedata = res.data.linedata; 
	       		this.time1 = res.data.time1; 
	      		console.log("json数据为:" + res.data.linedata)//此处的res对象包含了json的文件信息和数据
	         	chartmainline.hideLoading();
	          	chartmainline.setOption({
	          		xAxis:{
	          			data:res.data.time1
	          		},
		            series: [{
		              data: res.data.linedata  //将异步请求获取到的数据进行装载
		            }]
	          	});
	          	
	          	this.bardata = res.data.bardata;  
	         	chartmainbar.hideLoading();
	          	chartmainbar.setOption({
		            series: [{
		              data: res.data.bardata  //将异步请求获取到的数据进行装载
		            }]
	          	}); 
	      	}) 
	    }
    }
}) 
</script>

<style>
</style>