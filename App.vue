<template>
	<div class="container">
		<div class="link">
			Основано на ТЗ -
			<a
				href="https://docs.google.com/document/d/1_BN8bbym0InYFDElyyVJ5GzPptaOe0p9kteX-Uaww3I/edit#heading=h.ikkq5tsgq96y"
			></a>
		</div>
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

	.link {
		font-family: sans-serif;
		text-align: center;
		padding: 6px 0;
		background-color: rgb(25, 189, 214);
	}
</style>
