<template>
	<div class="filter">
		<button
			type="button"
			@click="resetFilter"
			class="filter__item filter__item--active"
		>
			Все типы
		</button>
		<button type="button" @click="filterOne" class="filter__item">
			Прямые продажи
		</button>
		<button type="button" @click="filterTwo" class="filter__item">Аукцион</button>
	</div>
</template>
<script>
	import { mapActions } from "vuex";

	export default {
		methods: {
			...mapActions([
				"filterTypeOne",
				"filterTypeTwo",
				"resetFilters",
				"filterTypeOneTest",
				"filterTypeTwoTest",
				"resetFiltersTest",
			]),

			filterOne(event) {
				if (this.$route.fullPath == "/") {
					this.filterTypeOne();
				} else if (this.$route.fullPath == "/trade") {
					this.filterTypeOneTest();
				}
				this.addActiveClass(event);
			},

			filterTwo(event) {
				if (this.$route.fullPath == "/") {
					this.filterTypeTwo();
				} else if (this.$route.fullPath == "/trade") {
					this.filterTypeTwoTest();
				}
				this.addActiveClass(event);
			},

			resetFilter(event) {
				if (this.$route.fullPath == "/") {
					this.resetFilters();
				} else if (this.$route.fullPath == "/trade") {
					this.resetFiltersTest();
				}
				this.addActiveClass(event);
			},

			addActiveClass(event) {
				this.removeAllActiveClass();
				event.target.classList.add("filter__item--active");
			},

			removeAllActiveClass() {
				document
					.querySelectorAll(".filter__item")
					.forEach((item) => item.classList.remove("filter__item--active"));
			},
		},
	};
</script>

<style lang="scss">
	.filter {
		font-family: sans-serif;
		border-radius: 10px;
		border: 1px solid var(--platinum, #e0e3ee);
		background: var(--white-gray, #f4f5f9);
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px;

		&__item {
			color: var(--manatee, #969dc3);
			font-size: 15px;
			border: none;
			cursor: pointer;
			background-color: transparent;
		}

		&__item--active {
			color: var(--manatee, #2d3b87);
		}
	}
</style>
