<template>
   <div id="b_orderby">
   	   <router-view></router-view>
   	   {{name}}
   	   我是OrderBy页面
   	   我是OrderBy页面
   	   我是OrderBy页面
   </div>
</template>

<script>
	export default{
		name:'OrderBy',
		components:{},
		data(){
			return{
				name:'我是OrderBy页面',			
			}
		}
	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");	
    #b_orderby{
    	color:@bg-color;
    }
</style>