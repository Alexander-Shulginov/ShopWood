<template>
	<div class="search-container">
		<FilterBlock />
		<SearchInput />
	</div>
</template>
<script>
	import FilterBlock from "@/components/FilterBlock.vue";
	import SearchInput from "@/components/SearchInput.vue";

	export default { components: { FilterBlock, SearchInput } };
</script>
<style lang="scss">
	.search-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
	}
</style>
