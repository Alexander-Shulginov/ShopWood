<template>
	<section class="trade-list">
		<h1 v-if="!filteredTradeItems.length">Пока что ничего нет</h1>
		<ItemCard v-for="item in filteredTradeItems" :key="item.id" :item="item" />
	</section>
</template>
<script>
	import { mapState } from "vuex";
	import ItemCard from "@/components/ItemCard.vue";

	export default {
		components: {
			ItemCard,
		},

		computed: {
			...mapState(["filteredTradeItems"]),
		},
	};
</script>
