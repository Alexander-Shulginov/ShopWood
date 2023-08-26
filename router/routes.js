import "@/views/StockView.vue";
import "@/views/TradeView.vue";
import "@/views/FavoritesView.vue";

export const routes = [
	{
		name: "StockView",
		path: "/",
		component: () => import("@/views/StockView.vue"),
	},
	{
		name: "TradeView",
		path: "/trade",
		component: () => import("@/views/TradeView.vue"),
	},
	{
		name: "FavoritesView",
		path: "/favorites",
		component: () => import("@/views/FavoritesView.vue"),
	},
];
