<template>
	<section class="product-list">
		<ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
	</section>
</template>
<script>
	import { mapState } from "vuex";
	import ItemCard from "@/components/ItemCard.vue";

	export default {
		name: "ItemList",

		components: {
			ItemCard,
		},

		computed: {
			...mapState(["filteredItems"]),
		},
	};
</script>
