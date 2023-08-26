<template>
	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__item">
				<router-link
					class="nav__link"
					to="/favorites"
					:class="{ 'nav__link--active': isActiveLink('/favorites') }"
				>
					<span class="nav__amount">{{ this.choisenItems.length }}</span>
					<img src="@/assets/icons/heart.svg" width="20" height="20" />
					Избранное
				</router-link>
			</li>
			<li class="nav__item">
				<router-link
					class="nav__link"
					to="/"
					:class="{ 'nav__link--active': isActiveLink('/') }"
				>
					<span class="nav__amount"><br /></span>
					<img src="@/assets/icons/box.svg" width="20" height="20" />
					Склад
				</router-link>
			</li>
			<li class="nav__item">
				<router-link
					class="nav__link"
					to="/trade"
					:class="{ 'nav__link--active': isActiveLink('/trade') }"
				>
					<span class="nav__amount">{{ this.tradeItems.length }}</span>
					<img src="@/assets/icons/trade.svg" width="20" height="20" />
					Сделки
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		methods: {
			goToLink(event) {
				this.removeAllActiveClass();
				event.target.classList.add("nav__link--active");
			},

			removeAllActiveClass() {
				document
					.querySelectorAll(".nav__link")
					.forEach((item) => item.classList.remove("nav__link--active"));
			},

			isActiveLink(link) {
				return this.$route.path === link;
			},
		},
		computed: {
			...mapState(["tradeItems", "choisenItems"]),
		},
	};
</script>

<style lang="scss">
	.nav {
		margin-bottom: 80px;

		&__list {
			list-style: none;
			padding: 0;
			display: flex;
			justify-content: flex-end;
		}

		&__link {
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
			color: var(--blue-dark, #2d3b87);
			font-family: sans-serif;
			font-size: 13px;
			font-weight: 700;
			text-decoration: none;
			padding: 7px 23px;
			@media (any-hover: hover) {
				&:hover {
					background-color: #f4f5f9;
					border-radius: 10px;
				}
			}
		}

		&__link--active {
			background-color: #f4f5f9;
			border-radius: 10px;
		}

		&__amount {
			font-family: sans-serif;
			display: block;
			margin-left: auto;
			padding: 4px;
		}
	}
</style>
