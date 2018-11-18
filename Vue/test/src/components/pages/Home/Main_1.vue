<template>

	<div id="b_main_1">
		<div class="strongly">
			<h2>强力推荐</h2>
			<router-link tag="div" class="main_1_1" to="" v-for="(item,index) in strongly_big_1" :key="index">
				<ul>
					<li>
						<img :src="item.pic_url"/>
					</li>
					<li>{{item.title}}</li>
				</ul>
			</router-link>
			<router-link tag="div" class="main_1_2" to="" >
				<ul>
					<li>
						<div v-for="(item,index) in strongly_small_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							<h3>
					     	    <i class="fa fa-star" aria-hidden="true"></i>
					             <span>{{item.summary}}</span>
							</h3>
						</div>

					</li>
					<li>
						<div v-for="(item,index) in strongly_small_2" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
							<h3>
					     	    <i class="fa fa-star" aria-hidden="true"></i>
					             <span>{{item.summary}}</span>
							</h3>
						</div>
					</li>

				</ul>
			</router-link>
			<router-link tag="div" class="main_1_3" to="" v-for="(item,index) in strongly_big_2" :key="index">
				<p>
					<img :src="item.pic_url" />
				</p>
				<p>{{item.title}}</p>
				<p>{{item.subtitle}}</p>
			</router-link>
		</div>
		<div class="lily">
			<router-link tag="div" class="lily_1" to="">
				<ul>
					<li v-for="(item,index) in lily_big" :key="index">
						<img :src="item.pic_url" />
					</li>
					<li>
						<p v-for="(item,index) in lily_small" :key="index">
							<img :src="item.pic_url" />
						</p>
						
					</li>
				</ul>
			</router-link>
		</div>
		<div class="newwork">
			<router-link tag="div" class="new_work" to="">
				<h2>新作的首展秀</h2>
				<router-link tag="div" class="new_work_1" to="" v-for="(item,index) in newwork_big_1" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>
				<router-link tag="div" class="new_work_2" to="">
					<ul>
						<li>
							<div v-for="(item,index) in newwork_small_1" :key="index">
								<p>
									<img :src="item.pic_url" />
								</p>
								<p>{{item.title}}</p>
								<p>{{item.subtitle}}</p>
								<h3>
					     	    <i class="fa fa-star" aria-hidden="true"></i>
					             <span>{{item.summary}}</span>
							</h3>
							</div>

						</li>
						<li>
							<div v-for="(item,index) in newwork_small_2" :key="index">
								<p>
									<img :src="item.pic_url"/>
								</p>
								<p>{{item.title}}</p>
								<p>{{item.subtitle}}</p>
								<h3>
					     	    <i class="fa fa-star" aria-hidden="true"></i>
					             <span>{{item.summary}}</span>
							</h3>
							</div>
							
						</li>

					</ul>
				</router-link>
				<router-link tag="div" class="new_work_3" to="" v-for="(item,index) in newwork_big_2" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>

			</router-link>
		</div>
		<div class="vipbook">
			<router-link tag="div" class="vip" to="">
				<h2>VIP图书馆</h2>
				<router-link tag="div" class="vip_1" to="" v-for="(item,index) in vip_big_1" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
				</router-link>
				<router-link tag="div" class="vip_2" to="">
					<ul>
						<li>
							<div v-for="(item,index) in vip_small" :key="index">
								<p>
									<img :src="item.pic_url" />
								</p>
								<p>{{item.title}}</p>
								<p>{{item.subtitle}}</p>
							</div>
						</li>
					</ul>
				</router-link>
				<router-link tag="div" class="vip_3" to="" v-for="(item,index) in vip_big_2" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
				</router-link>
			</router-link>
		</div>
		<div class="willfree">
			<router-link tag="div" class="free" to="">
				<ul>
					<li v-for="(item,index) in free_small" :key="index">
						<img :src="item.pic_url"/>
						<p>{{item.title}}</p>
					</li>
				</ul>
			</router-link>
		</div>
		<div class="hotblood">
			<router-link tag="div" class="blood" to="">
				<router-link tag="div" class="blood_1" to="" v-for="(item,index) in blood_big_1" :key="index">
					<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>
				<router-link tag="div" class="blood_2" to="" >
					<ul>
					<li>
						<div v-for="(item,index) in blood_small_1" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>
					</li>
					<li>
						<div v-for="(item,index) in blood_small_2" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>						
					</li>
					<li>
						<div v-for="(item,index) in blood_small_3" :key="index">
							<p>
								<img :src="item.pic_url"/>
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>						
					</li>
					<li>
						<div v-for="(item,index) in blood_small_4" :key="index">
							<p>
								<img :src="item.pic_url" />
							</p>
							<p>{{item.title}}</p>
							<p>{{item.subtitle}}</p>
						</div>						
					</li>

				</ul>
				</router-link>
				<router-link tag="div" class="blood_3" to="" v-for="(item,index) in blood_big_2" :key="index">
				 	<p>
						<img :src="item.pic_url" />
					</p>
					<p>{{item.title}}</p>
					<p>{{item.subtitle}}</p>
				</router-link>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Main_1',
		components: {},
		data() {
			return {
				name: '我是Main_1',
				strongly_big_1:[],
				strongly_small_1:[],
				strongly_small_2:[],
				strongly_big_2:[],
				lily_big:[],
				lily_small:[],
				newwork_big_1:[],
				newwork_big_2:[],
				newwork_small_1:[],
				newwork_small_2:[],
				vip_big_1:[],
				vip_big_2:[],
				vip_small:[],
				free_small:[],
				blood_big_1:[],
				blood_big_2:[],
				blood_small_1:[],
				blood_small_2:[],
				blood_small_3:[],
				blood_small_4:[],
				
			}
		},
		methods:{
           getMain(){
//         	console.log(this)
           	this.$axios.get('/api/api/v3/home',{params:{
           		page:1
           	}})
           	.then((res)=>{
//         		console.log(res);
           		this.strongly_big_1.push(res.datas.items[1].items[0]);
           		this.strongly_small_1.push(res.datas.items[1].items[1],res.datas.items[1].items[2]);
           		this.strongly_small_2.push(res.datas.items[1].items[3],res.datas.items[1].items[4]);
           		this.strongly_big_2.push(res.datas.items[1].items[5]);  
           		this.lily_big.push(res.datas.items[2].items[0]);  
           		this.lily_small.push(res.datas.items[2].items[1],res.datas.items[2].items[2]);
           		this.newwork_big_1.push(res.datas.items[3].items[0]);
           		this.newwork_small_1.push(res.datas.items[3].items[1],res.datas.items[3].items[2]);
           		this.newwork_small_2.push(res.datas.items[3].items[3],res.datas.items[3].items[4]);
           		this.newwork_big_2.push(res.datas.items[3].items[5],res.datas.items[3].items[6]);
           		this.vip_big_1.push(res.datas.items[4].items[0]);
           		this.vip_small.push(res.datas.items[4].items[1],res.datas.items[4].items[2]);
           		this.vip_big_2.push(res.datas.items[4].items[3]);
           		this.free_small.push(res.datas.items[6].items[0],res.datas.items[6].items[1],res.datas.items[6].items[2]);
           		this.blood_big_1.push(res.datas.items[7].items[0]);
           		this.blood_small_1.push(res.datas.items[7].items[1],res.datas.items[7].items[2]);
           		this.blood_small_2.push(res.datas.items[7].items[3],res.datas.items[7].items[4]);
           		this.blood_small_3.push(res.datas.items[7].items[5],res.datas.items[7].items[6]);
           		this.blood_small_4.push(res.datas.items[8].items[0],res.datas.items[8].items[1]);
           		this.blood_big_2.push(res.datas.items[8].items[2]);
           	})
           	.catch((err)=>{
           		console.log(err)
           	})
           }
		},
		created(){
			this.getMain()
		},
	}
</script>

<style lang="less" scoped>
	@import url("../../../styles/main.less");
	#b_main_1 {
		.width(375);
		.height(850);
		.margin(10,0,0,0);
		.padding(0,10,0,10);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.font-size(16);
		.strongly {
			h2 {
				.height(18);
				border-left: 3px solid #fe960e;
				.margin(0,0,6,0);
				.padding(0,0,0,20);
				.line-height(18);
				.font-size(15);
				color: #333;
			}
			.main_1_1 {
				.width(355);
				.margin(10,0,0,0);
				.height(210);
				ul {
					display: flex;
					flex-direction: column;
					li {
						flex: 1;
						.margin(0,0,6,0);
						img {
							width: 100%;
							.height(180);
							.border-radius(3);
						}
					}
					li:nth-child(2) {
						.height(20);
						.line-height(20);
						.font-size(15);
						color: #333;
					}
				}
			}
			.main_1_2 {
				.width(355);
				.height(356);
				.margin(16,0,0,0);
				ul {
					.width(355);
					.height(356);
					.padding(0,0,0,0);
					display: flex;
					flex-direction: column;
					li {
						.height(175);
						display: flex;
						justify-content: space-between;
						.margin(0,0,10,0);
						div {
							.width(172);
							display: flex;
							flex-direction: column;
							position: relative;
							p:nth-child(1) {
								img {
									.width(172);
									.height(117);
									.border-radius(3);
								}
							}
							p:nth-child(2) {
								.font-size(14);
								color: #333;
								.margin(5,0,5,0);
							}
							p:nth-child(3) {
								.font-size(12);
								color: #999;
							}
							h3 {
								/*.width(66);*/
								.padding(0,0,0,5);
								box-sizing:border-box;
								background: rgba(0, 0, 0, .6);
								box-sizing: border-box;
								.font-size(12);
								text-align: center;
								.border-top-left-radius(10);
								.border-top-right-radius(0);
								.border-bottom-right-radius(0);
								.border-bottom-left-radius(10);
								position: absolute;
								.right(0);
								.bottom(60);
								i {
									color: #fff;
								}
								span {
									.padding(3,3,3,3);
									color: #fff;
								}
							}
						}
					}
				}
			}
			.main_1_3 {
				.height(260);
				display: flex;
				flex-direction: column;
				.margin(7,0,0,0);
				p {
					.margin(0,0,5,0);
				}
				p:nth-child(1) {
					img {
						.width(355);
						.height(180);
						.border-radius(3);
					}
				}
				p:nth-child(2) {
					.font-size(14);
					color: #333;
				}
				p:nth-child(3) {
					.font-size(12);
					color: #999;
				}
			}
		}
		.lily {
			.height(330);
			.lily_1 {
				.height(330);
				ul {
					.height(330);
					display: flex;
					flex-direction: column;
					li {
						flex: 1;
						.margin(0,0,15,0);
					}
					li:nth-child(1) {
						.height(180);
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					li:nth-child(2) {
						display: flex;
						justify-content: space-between;
						p {
							.width(173);
							.height(117);
							img {
								.width(173);
								.height(117);
								.border-radius(3);
							}
						}
					}
				}
			}
		}
		.newwork {
			.height(1100);
			.margin(15,0,0,0);
			.new_work {
				.height(1100);
				h2 {
					.height(18);
					border-left: 3px solid #fe960e;
					.margin(0,0,10,0);
					.padding(0,0,0,20);
					.line-height(18);
					.font-size(15);
					color: #333;
			    }
				.new_work_1,.new_work_3,.new_work_4 {
					.height(230);
					display: flex;
					flex-direction: column;
					.margin(7,0,0,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
					p:nth-child(3) {
						.font-size(12);
						color: #999;
					}
				}
				.new_work_2 {
					.width(355);
					.height(356);
					.margin(16,0,0,0);
				ul {
					.width(355);
					.height(356);
					.padding(0,0,0,0);
					display: flex;
					flex-direction: column;
					li {
						.height(175);
						display: flex;
						justify-content: space-between;
						.margin(0,0,10,0);
						div {
							.width(172);
							display: flex;
							flex-direction: column;
							position: relative;
							p:nth-child(1) {
								img {
									.width(172);
									.height(117);
									.border-radius(3);
								}
							}
							p:nth-child(2) {
								.font-size(14);
								color: #333;
								.margin(5,0,5,0);
							}
							p:nth-child(3) {
								.font-size(12);
								color: #999;
							}
							h3 {
								.width(66);
								background: rgba(0, 0, 0, .6);
								box-sizing: border-box;
								.font-size(12);
								text-align: center;
								.border-top-left-radius(10);
								.border-top-right-radius(0);
								.border-bottom-right-radius(0);
								.border-bottom-left-radius(10);
								position: absolute;
								.right(0);
								.bottom(60);
								i {
									color: #fff;
								}
								span {
									.padding(3,3,3,3);
									color: #fff;
								}
							}
						}
					}
				  }
				}	
			}
		}
		.vipbook{
			.height(685);
			.margin(35,0,0,0);
			.vip{
				.height(645);
				h2 {
					.height(18);
					border-left: 3px solid #fe960e;
					.margin(0,0,10,0);
					.padding(0,0,0,20);
					.line-height(18);
					.font-size(15);
					color: #333;
			    }
				.vip_1,.vip_3{
					.height(230);
					display: flex;
					flex-direction: column;
					.margin(7,0,0,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
				}
				.vip_2{
					.width(355);
					.height(175);
					.margin(16,0,0,0);
					ul {
						.width(355);
						.height(175);
						.padding(0,0,0,0);
						display: flex;
						flex-direction: column;
						li {
							.height(175);
							display: flex;
							justify-content: space-between;
							.margin(0,0,10,0);
							div {
								.width(172);
								display: flex;
								flex-direction: column;
								position: relative;
								p:nth-child(1) {
									img {
										.width(172);
										.height(117);
										.border-radius(3);
									}
								}
								p:nth-child(2) {
									.font-size(14);
									color: #333;
									.margin(5,0,5,0);
								}
								p:nth-child(3) {
									.font-size(12);
									color: #999;
								}
							}
						}
					}
				}				
			}
		}
		.willfree{
			.height(220);
			.margin(50,0,0,0);
			.free{
				.height(220);
				ul{
					.height(220);
					display: flex;
					justify-content: space-between;
					li{
						.width(112);
				        .height(220);
				        display: flex;
				        flex-direction: column;
				        img{
				        	.width(112);
				            .height(177);
				            .margin(0,0,6,0);
				            .border-radius(3);
				        }
				        p{
				        	.height(20);
				        	.font-size(14);
				        	color: #333;
				        }
					}
				}
			}
		}
		.hotblood{
			.height(1240);
			.margin(15,0,0,0);
			.blood{
				.height(1240);
				.blood_1{
					.height(230);
					display: flex;
					flex-direction: column;
					.margin(7,0,0,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(180);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
					p:nth-child(3) {
						.font-size(12);
						color: #999;
					}
				
				}
				.blood_2{
					
				.width(355);
				.height(712);
				.margin(16,0,0,0);
				ul {
					.width(355);
					.height(712);
					.padding(0,0,0,0);
					display: flex;
					flex-direction: column;
					li {
						.height(175);
						display: flex;
						justify-content: space-between;
						.margin(0,0,10,0);
						div {
							.width(172);
							display: flex;
							flex-direction: column;
							position: relative;
							p:nth-child(1) {
								img {
									.width(172);
									.height(117);
									.border-radius(3);
								}
							}
							p:nth-child(2) {
								.font-size(14);
								color: #333;
								.margin(5,0,5,0);
							}
							p:nth-child(3) {
								.font-size(12);
								color: #999;
							}
						}
					}
				}
			
				}
				.blood_3{
					
					.height(285);
					display: flex;
					flex-direction: column;
					.margin(7,0,0,0);
					p {
						.margin(0,0,5,0);
					}
					p:nth-child(1) {
						img {
							.width(355);
							.height(240);
							.border-radius(3);
						}
					}
					p:nth-child(2) {
						.font-size(14);
						color: #333;
					}
					p:nth-child(3) {
						.font-size(12);
						color: #999;
					}
				
				
				}
			}
		}
	}
</style>