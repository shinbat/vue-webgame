import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../3.number-baseball/NumberBaseball';
import ResponseCheck from '../4.response-check/ResponseCheck';
import RockScissorsPaper from '../5.rock-scissors-paper/RockScissorsPaper';
import LottoGenerator from '../6.lotto/LottoGenerator';
import GameMatcher from './GameMatcher';


Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/number-baseball', component: NumberBaseball },
		{ path: '/response-check', component: ResponseCheck },
		{ path: '/rock-scissors-paper', component: RockScissorsPaper },
		{ path: '/lotto-generator', component: LottoGenerator },
		{ path: '/game/:name', component: GameMatcher },
	],

});