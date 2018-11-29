<template>
   <div id="InfoHome">
   	    <Header></Header>
   	    <div id="info_nav">
			<div class="nav" >
				    <a @click="back"><i class="fa fa-long-arrow-left"></i></a>
					<p>{{item.id}}</p>
					<span class="fa fa-angle-double-down"></span>
			</div>
	    </div>
	    <div id="inform_info">

		<div class="type" >
			
			<div class="data" >
				<div class="data-top">
					<ul>
						<li>
							<img src="http://m.buka.cn/static/img/star_2.png"/>
							<p>{{item.pic_height}}</p>
						</li>
						<li>
							<img :src="item.pic_url"/>
						</li>
						<li>
							<img src="http://m.buka.cn/static/img/fire.png"/>
							<p>{{item.pic_width}}</p>
						</li>
					</ul>
					
				</div>
				<div class="data-center">
					<p class="center-one">{{item.title}}</p>
					<p class="center-two">{{item.subtitle}}</p>
					<p class="center-three">客户端观看</p>
					<p class="center-four">
					[每周二、四、六、日更新]{{item.title}}
					
					</p>
					<!--<i class="fa fa-angle-down" aria-hidden="true"></i>-->
				</div>
				<div class="data-bottom">
					<div class="bottom-one" @click="gopage(item.path)" v-for="(item,index) in sharelist" :key="index">
						<div class="icon">
							<i :class="item.iconClass"></i>
						</div>
						<p>{{item.title}}</p>
					</div>
				</div>
				
				<div class="data-add">
					<span class="add-one">连载话</span>
					<span class="add-two">更新时间：2018-11-17</span>
					<span class="add-three">倒叙<i class="fa fa-long-arrow-down"> </i></span>
				</div>
				
				<div class="data-last">
					<ul>
						<li v-for="(item,index) in data" :class="sel===item?'orange':''" @click="getList(item)" :key="index">{{item}}</li>
						
					</ul>
				</div>
			</div>
		</div>
		
		 <router-view></router-view>
		
	</div>
   </div>
</template>

<script>
import Header from '../../commons/Header';


	export default{
		name:'InfoHome',
		components:{Header},
		data(){
			return{
				name:'我是InfoHome页面',
				sharelist:[{title:'分享',iconClass:'fa fa-share-square-o',path:'/Share'},
							{title:'投稿',iconClass:'fa fa-paper-plane-o',path:'/Submit'},
							{title:'评论',iconClass:'fa fa-commenting',path:'/Discuss'},
				     ],
				type:'列表页',
				data:['第一话','第二话','第三话','第四话','第五话','第六话','第七话','第八话','第九话',
				'第十话','第十一话','第十二话','第十三话','第十四话','第十五话',
				'第十六话','第十七话','第十八话','第十九话','第二十话','第二十一话',
				'第二十二话','第二十三话','第二十四话','第二十五话','第二十六话','第二十七话',
				'第二十八话','第二十九话','第三十话','第三十一话','第三十二话','第三十三话','第三十四话',
				'第三十五话','第三十六话','第三十七话','第三十八话','第三十九话','第四十话','第四十一话',
				'第四十二话','第四十三话','第四十四话','第四十五话','第四十六话','第四十七话','第四十八话','第四十九话','第五十话','第五十一话',
				'第五十二话','第五十三话','第五十四话','第五十五话','第五十六话','第五十七话','第五十八话','第五十九话','第六十话','第六十一话',
				'第六十二话',
				],
				sel:'第一话',
//				newdata:[]
			}
		},
		methods:{
			back(){
				this.$router.history.go(-1);
			},
			getDatas(){
				this.$axios.post("str/ranking/get_data",{
					
				})
				.then((res)=>{
//					console.log(res)
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			gopage(path){//编程式导航，router.push()
				this.item=JSON.parse(window.localStorage.getItem('data'))
				let id=this.item.id;
			    this.$router.push({path:`${path}/${id}`,params:{id:id}})//跳转成这种形式的路由localhost:8080/#/Discuss/217438
			},
			getinfo(){
				this.item=JSON.parse(window.localStorage.getItem('data'));//存储到localStorage，不需要在存到数组了，可以直接获取				
//			    this.newdata.push(this.item);
console.log(this.item)
//			    this.newdata=this.newdata[0];
			}
		},
		created(){
//			console.log(this.$route.params)
            this.getinfo()
		}
	}
</script>

<style lang="less" scoped>	
@import url("../../../styles/main.less");	
.orange{
	background:#fe960e ;
	color: #fff;
}
    #InfoHome{
    	.width(375);
    	#info_nav{
			.width(375);
		    .height(37);
		    .padding(0,10,0,10);
		    position:fixed;
		    .top(40);
		    background:#fff;
		    z-index:99;
			.nav{
					.height(37);
					display:flex;
					justify-content: space-between;
					.line-height(37);
					.font-size(16);
					text-align:center;
					border-bottom:1px solid #ccc;
					a{
						p{
							
						}
					}
					
					i{
						.font-size(24);
						color:#ccc;
					}
					span{
						.line-height(39);
						.font-size(20);
						color:#ccc;
					}
			}
		}
		#inform_info{
	.width(375);
	.padding(10,10,0,10);
	.margin(20,0,0,0);
	.type{
		.data{
			z-index: -1;
			.data-top{
				.height(150);
				z-index: -1;
				background: url(../../../../static/img/img4.png);
				background-size: cover;
				ul{
					display: flex;
					justify-content: space-around;
					position:relative;
					li:nth-child(1){
						.height(60);
						.width(40);
						position: absolute;
						.top(40);
						.left(30);
						display: flex;
						flex-direction: column;
						align-items: center;
						img{
							.width(30);
							.height(30);
						    .margin(0,0,10,0);
						}
						p{
							.font-size(15);
							color: #fff;
						}
					}
					li:nth-child(2){
						.width(106);
						.height(159);
						border: 2px solid #ccc;
						position: absolute;
						.top(17);
						img{
							.width(106);
						    .height(159);
						}
					}
					li:nth-child(3){
						.height(60);
						.width(40);
						position: absolute;
						.top(40);
						.right(30);
						display: flex;
						flex-direction: column;
						align-items: center;
						img{
							.width(30);
							.height(30);
						    .margin(0,0,10,0);
						}
						p{
							.font-size(15);
							color: #fff;
						}
					}
				}			
			}
			.data-center{
				.margin(30,0,0,0);
				text-align:center;
				z-index: 9999;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				p{
					.font-size(16);
				}
				.center-one{
					color: #333;
					.font-size(14);
					font-weight: bold;
					.margin(8,0,6,0);
				}
				.center-two{
					color:#80cece;
					.margin(0,0,15,0);
					.font-size(12);
				}
				.center-three{
					background:#fe960e;
					color:#fff;
					text-align: center;
					border-radius: 5px;
					.width(335);
					.height(35);
					.line-height(35);
					.font-size(14);
				}
				.center-four{
					.font-size(14);
					.line-height(25);
					.margin(15,20,0,20);
					position:relative;
					color: #333;
				}
				i{
					position: absolute;
					.font-size(22);
					.right(10);
					}
			}
			.data-bottom{
				display: flex;
				justify-content: space-around;
				.margin(20,0,10,0);
				.bottom-one{
					/*.padding(6,2,6,2);*/
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					.icon{
						.width(46);
						.height(46);
						.margin(0,0,10,0);
						border: 1px solid orange;
						border-radius:50%;
						text-align: center;
						.line-height(33);
						i{
						color: rgb(253, 197, 76);
						.font-size(24);
						
					}
					}
					
					p{
						.font-size(12);
						color: #333;
					}
					
				}
			}
			.data-add{
				.font-size(15);
				.margin(20,0,0,0);
				.add-one{
				.margin(0,10,0,10);
				}
				.add-two{
					color: #999;
					.font-size(14)
				}
				.add-three{
					.margin(0,0,0,70);
					color:#fe960e ;
				}
			}
			.data-last{
				.margin(10,0,0,10);
				ul{
					li{
						.width(80);
						.height(37);
						border-radius:3px;
						border:1px solid #ccc;
						display: inline-block;
						.margin(0,5,0,0);
						.margin(0,0,0,5);
						text-align: center;
						.line-height(37);
						color: #333;
						.font-size(12);
						
					}
				}
			}
		}
		
	
	}
	
}	
    }
</style>