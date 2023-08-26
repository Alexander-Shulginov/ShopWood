import { createStore } from "vuex";
import data from "@/data/data.json";

export default createStore({
	state: {
		listItems: data,
		filteredItems: data,
		tradeItems: [],
		filteredTradeItems: [],
		choisenItems: [],
	},

	mutations: {
		filteredItems(state, item) {
			state.filteredItems = item;
		},

		updateTradeItems(state, item) {
			state.tradeItems.push(item);
			state.filteredTradeItems = state.tradeItems; //!
		},

		filteredTrade(state, item) {
			state.filteredTradeItems = item;
		},

		updateChoisenItems(state, item) {
			state.choisenItems.push(item);
		},

		removeChoisenItems(state, item) {
			state.choisenItems = state.choisenItems.filter((el) => el !== item);
		},
	},

	actions: {
		filterTypeOneTest({ commit, state }) {
			let updatedData = state.tradeItems.filter(
				(item) => item.type == "Разовая продажа"
			);
			commit("filteredTrade", updatedData);
		},

		filterTypeTwoTest({ commit, state }) {
			let updatedData = state.tradeItems.filter((item) => item.type == "Аукцион");
			commit("filteredTrade", updatedData);
		},

		resetFiltersTest({ commit, state }) {
			let updatedData = state.tradeItems;
			commit("filteredTrade", updatedData);
		},

		filterTypeOne({ commit, state }) {
			let updatedData = state.listItems.filter(
				(item) => item.type == "Разовая продажа"
			);
			commit("filteredItems", updatedData);
		},

		filterTypeTwo({ commit, state }) {
			let updatedData = state.listItems.filter((item) => item.type == "Аукцион");
			commit("filteredItems", updatedData);
		},

		resetFilters({ commit, state }) {
			let updatedData = state.listItems;
			commit("filteredItems", updatedData);
		},

		searchItems({ commit, state }, value) {
			let updatedData = state.listItems.filter((item) =>
				item.name.toLowerCase().includes(value.toLowerCase().trim())
			);
			commit("filteredItems", updatedData);
		},

		addTradeItems({ commit, state }, item) {
			if (state.tradeItems.includes(item)) return;
			else {
				commit("updateTradeItems", item);
			}
		},

		addChoisenItems({ commit, state }, item) {
			if (state.choisenItems.includes(item)) {
				commit("removeChoisenItems", item);
			} else {
				commit("updateChoisenItems", item);
			}
		},
	},
});
