<template>
	<div>
		<div>{{turn}} 님의 턴</div>
		<table-component :table-data="tableData" />
		<div v-if="winner">{{winner}} 님의 승리</div>
	</div>
</template>

<script>
	// import Vue from 'vue';
	import TableComponent from './TableComponent';

	export default {
		components: {
			TableComponent,
		},
		data() {
			return {
				tableData: [
					['', '', ''],
					['', '', ''],
					['', '', ''],
				],
				turn: 'O',
				winner: '',
			};
		},
		computed: {
		},
		methods: {
			onChangeData() {
				// this.$set(this.tableData[1], 0, 'X');	// Vue.set과 동일
				// this.tableData[0][1] = 'O'; 작동하지 않음
			},
		},
		mounted() {
			console.log('mounted');
		},
		beforeDestroy() {
			console.log('beforeDestroy');
		},
	};
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>