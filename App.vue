<template>
	<div class="container">
		<NavBar />
		<SearchSection />
		<router-view></router-view>
	</div>
</template>

<script>
	import NavBar from "@/components/NavBar.vue";
	import SearchSection from "@/components/SearchSection.vue";

	export default {
		name: "App",
		components: { SearchSection, NavBar },
	};
</script>

<style style="scss">
	.container {
		max-width: 1200px;
		padding: 0 15px;
		margin: 0 auto;
	}
</style>
