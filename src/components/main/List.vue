<template>
	<div>
		<span>列表1</span>
		<!-- 折线图 -->
        <div id="chartmainline" style="width:600px; height:400px;"></div>
        <!-- 柱状图 -->
        <div id="chartmainbar" style="width:600px; height:400px;"></div> 
	</div>
</template>

<script>
	export default({
    data(){
        return{
        	 
        	 
            optionline:{
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
                    type:'line', //设置图表主题
                    data:[500,200,360,100]
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
                    data:[500,200,360,100]
                }]
            }
        }
    },
    
    mounted() {
       this.drawLine()
    },
    methods: {
      drawLine: function(){
        //基于准本好的DOM，初始化echarts实例
        let chartmainline = this.$echarts.init(document.getElementById("chartmainline"));
        let chartmainbar = this.$echarts.init(document.getElementById("chartmainbar"));
        //绘制图表
        chartmainline.setOption(this.optionline);
        chartmainbar.setOption(this.optionbar);
      }  
    }
}) 
</script>

<style>
</style>