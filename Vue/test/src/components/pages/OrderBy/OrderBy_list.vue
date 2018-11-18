<template>
   <div id="b_orderby_list">
       {{name}}
   </div>
</template>

<script>


	export default{
		name:'OrderBy_list',
		components:{},
		data(){
			return{
				name:'我是OrderBy_list页面',			
			}
		}
	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");	
    #b_orderby_list{
    	color:@bg-color;
    }
</style>