<template>
   <div id="recommend">
   	   <router-view></router-view>
   	   {{name}}
   	   我是recommend
   	   我是recommend
   	   我是recommend
   </div>
</template>

<script>
//Navlist,Recommend
	export default{
		name:'recommend',
		components:{},
		data(){
			return{
				name:'我是recommend'
			}
		}
	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");	
    #recommend{
    	color:@bg-color;
    }
</style>