<template>
   <div id="Inform">
   	   <Header></Header>
   	   <Inform_nav></Inform_nav>
   	   <Inform_info></Inform_info>
   	   <Footer></Footer>
   </div>
</template>

<script>
import Header from '../../commons/Header.vue';
import Inform_nav from './Inform_nav';
import Inform_info from './Inform_info';
import Footer from '../../commons/Footer.vue';


	export default{
		name:'Inform',
		components:{Header,Inform_nav,Inform_info,Footer},
		data(){
			return{
				name:'我是Inform页面',
			}
		}
	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");	
    #Inform{
    	color:@bg-color;
    }
</style>