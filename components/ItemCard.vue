<template>
	<article class="card">
		<div class="card__wrapper">
			<div class="card__descr">
				<div class="card__photo">
					<img
						src="@/assets/img/wood.jpg"
						alt="Wood"
						width="256"
						height="256"
					/>
				</div>
				<div class="card__details">
					<span class="card__type">{{ item.type }}</span>
					<h3 class="card__name">{{ item.name }}</h3>
					<address class="card__location">{{ item.location }}</address>
					<div class="card__dealer">
						<span class="card__dealer-text">Продавец</span>
						&shy;
						<span class="card__dealer-name">{{ item.dealer }}</span>
					</div>
					<div class="card__apperance">
						<span class="card__apperance-text">Вид товара</span>
						<br />
						<span class="card__apperance-name">{{ item.apperance }}</span>
					</div>
					<p class="card__text">{{ item.description }}</p>
				</div>
			</div>
		</div>
		<div class="card__info">
			<span class="card__price">{{ item.price }} ₽</span>
			<ul class="card__item-info">
				<li class="card__item-details">
					<span class="card__item-text">Количество</span>
					<span class="card__item-value">{{ item.amount }} шт.</span>
				</li>
				<li class="card__item-details">
					<span class="card__item-text">Стоимость за штуку</span>
					<span class="card__item-value">{{ item.price }} ₽</span>
				</li>
			</ul>
			<div class="card__btns">
				<ButtonAdd
					v-if="$route.fullPath == '/'"
					@click="addToTrade(item)"
					class="card__btns--add"
				>
					{{ setName(item) }}
				</ButtonAdd>

				<ButtonAdd
					v-if="$route.fullPath == '/trade'"
					class="card__btns--add btn-pay"
				>
					Оплатить
				</ButtonAdd>

				<ButtonAdd
					v-if="$route.fullPath == '/favorites'"
					@click="addToTrade(item)"
					class="card__btns--add"
				>
					{{ setName(item) }}
				</ButtonAdd>

				<ButtonAdd
					@click="addToFavorites(item)"
					:class="{ 'card__btns--choise': setColor(item) }"
				>
					<img src="@/assets/icons/heart.svg" alt="Heart" />
				</ButtonAdd>
			</div>
		</div>
	</article>
</template>

<script>
	import ButtonAdd from "@/components/ButtonAdd.vue";
	import { mapActions, mapState } from "vuex";

	export default {
		name: "ItemCard",

		data() {
			return {
				colorActive: false,
			};
		},

		props: {
			item: {
				type: Object,
				required: true,
			},
		},

		components: {
			ButtonAdd,
		},

		computed: {
			...mapState(["tradeItems", "choisenItems"]),
		},

		methods: {
			...mapActions(["addTradeItems", "addChoisenItems"]),

			addToTrade(item) {
				this.addTradeItems(item);
			},

			addToFavorites(item) {
				this.addChoisenItems(item);
			},

			setName(item) {
				return this.tradeItems.includes(item) ? "Добавлено" : "Добавить в сделки";
			},

			setColor(item) {
				return this.choisenItems.includes(item) ? true : false;
			},
		},
	};
</script>

<style lang="scss">
	.card {
		margin-bottom: 40px;
		border: 1px solid #e0e3ee;
		border-radius: 20px;
		font-family: sans-serif;
		display: flex;
		justify-content: space-between;

		&__wrapper {
			padding: 20px;
		}

		&__descr {
			display: flex;
			gap: 20px;
		}

		&__details {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		&__type,
		&__dealer-text,
		&__apperance-text,
		&__item-text {
			color: var(--manatee, #969dc3);
			font-size: 13px;
		}

		&__name,
		&__price {
			color: var(--blue-dark, #2d3b87);
			font-size: 15px;
			font-weight: 700;
			line-height: 125%;
		}

		&__location {
			align-self: flex-start;
			padding: 5px;
			border-radius: 5px;
			background: var(--white-gray, #f4f5f9);
			color: var(--blue-light, #616ca5);
			font-size: 13px;
			font-style: normal;
			position: relative;
			&::before {
				content: "";
				display: inline-block;
				background-image: url(../assets/icons/location.svg);
				background-repeat: no-repeat;
				background-position: center;
				vertical-align: sub;
				width: 12px;
				height: 16px;
				margin-right: 5px;
			}
		}

		&__dealer-name,
		&__item-value {
			color: var(--blue-dark, #2d3b87);
			font-size: 13px;
		}

		&__apperance {
			max-width: 100%;
			padding: 5px;
			border-radius: 5px;
			background: var(--white-gray, #f4f5f9);
			align-self: flex-start;
		}

		&__apperance-name {
			color: var(--blue-light, #616ca5);
			font-size: 13px;
		}

		&__text {
			color: var(--blue-dark, #2d3b87);
			font-size: 13px;
			line-height: 150%;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
		}

		&__info {
			padding: 20px;
			border: 1px solid #e0e3ee;
			border-radius: 20px;
			width: 314px; //
			display: flex;
			flex-direction: column;
			flex-shrink: 0;
		}

		&__item-info {
			list-style: none;
			padding: 0;
		}

		&__item-details {
			display: flex;
			align-items: center;
			justify-content: space-between;

			&:first-child {
				margin-bottom: 10px;
			}
		}

		&__btns {
			margin-top: auto;
			display: flex;
			gap: 12px;
		}

		&__btns--add {
			flex-grow: 2;
		}

		&__btns--choise {
			background-color: #939ed7;
		}
	}
</style>
