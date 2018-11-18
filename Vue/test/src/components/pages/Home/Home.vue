<template>
   <div class="home">
   	   	<!--<Navlist></Navlist>-->
   	   	<div id="b_nav">

			<div>
				<ul>
					<router-link tag="li" @click="selItem(item)" 
							:class="sel===item.title?'hl':''" 
							v-for="(item,index) in navlist" 
							:key="index" :to="item.rou">
							{{item.title}}
					</router-link>	
					</ul>
			</div>
	</div>
   	   
   	   <router-view></router-view>
   	   
   </div>
</template>

<script>
import Navlist from '../Navlist/Navlist';
import Home from '../Home/Home'
import Tuijian from './Tuijian'
import Recommend from '../Recommend/Recommend'
import OrderBy from '../OrderBy/OrderBy'
Home,Tuijian,Recommend,OrderBy
	export default{
		name:'Home',
		components: {Home,Tuijian,Recommend,OrderBy},
		data() {
			return {
				navlist: [{
						title: '推荐',
						rou: '/Home/Tuijian'
					},
					{
						title: '排行',
						rou: '/Home/Recommend'
					},
					{
						title: '分类',
						rou: '/Home/OrderBy'
					}
				],
				sel: '推荐',
			}
		},
		methods: {
			selItem(item) {
				this.sel = item;
				setTimeout(location.reload(),1000)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../styles/main.less");
	#b_nav {
		.width(375);
		.height(40);
		.margin(46,
		0,
		0,
		0);
		position: fixed;
		.top(0);
		z-index: 999;
		background: #fff;
		div {
			.height(40);
			ul {
				display: flex;
				justify-content: space-around;
				border-bottom: 1px solid #ccc;
				li {
					flex: 1;
					.height(40);
					width: 33%;
					.font-size(16);
					text-align: center;
					.line-height(40);
					color: #333;
				}
				.hl {
					color: orange;
				}
			}
		}
	}
</style>