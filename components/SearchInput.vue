<template>
	<div class="search">
		<input @input="search" v-model="inputQuery" type="text" class="search__input" />
		<ButtonAdd class="search__btn">
			<img src="@/assets/icons/search.svg" />
		</ButtonAdd>
	</div>
</template>
<script>
	import ButtonAdd from "@/components/ButtonAdd.vue";
	import { mapActions } from "vuex";
	export default {
		name: "SearchInput",

		components: {
			ButtonAdd,
		},

		data() {
			return {
				inputQuery: "",
			};
		},

		methods: {
			...mapActions(["searchItems"]),

			search() {
				this.searchItems(this.inputQuery);
			},
		},
	};
</script>

<style lang="scss">
	.search {
		position: relative;
		&__input {
			padding: 16px 52px 16px 20px;
			border-radius: 10px;
			border: 1px solid var(--platinum, #e0e3ee);
			background: var(--white, #fff);
		}

		&__btn {
			position: absolute;
			top: 2px;
			right: 2px;
			padding: 12px;
			background-color: #2d3b87;
			@media (any-hover: hover) {
				&:hover {
					background-color: #384383;
				}
			}
		}
	}
</style>
