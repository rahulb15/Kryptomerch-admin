import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	creators: [],
	isLoadingShowCreator: false,
	error: '',
	pageArray: [],
	pageNo: 1,
};

const creatorListSlice = createSlice({
	name: 'creatorList',
	initialState,
	reducers: {
		fetchCreatorLoading: (state) => {
			state.isLoadingShowCreator = true;
		},
		fetchCreatorSuccess: (state, action) => {
			state.creators = action.payload;
			state.isLoadingShowCreator = false;
			state.error = ""
		},
		fetchPageSuccess: (state, action) => {
			state.pageArray = action.payload;
			state.isLoadingShowCreator = false;
			state.error = ""
		}, fetchPageNoSuccess: (state, action) => {
			state.pageNo = action.payload;
			state.isLoadingShowCreator = false;
			state.error = ""
		},
		fetchCreatorFail: (state, { payload }) => {
			state.isLoadingShowCreator = false;
			state.error = payload;
		},
		searchCreators: (state, { payload }) => {
			state.creators = state.creators.filter((row) => {
				if (!payload) return row;

				if (row.name) {
					return row.name.toLowerCase().includes(payload.toLowerCase());
				} else {
					return false
				}
			});
		},
	},
});

const { reducer, actions } = creatorListSlice;

export const {
	fetchCreatorLoading,
	fetchCreatorSuccess,
	fetchCreatorFail,
	searchCreators,
	fetchPageSuccess,
	fetchPageNoSuccess
} = actions;

export default reducer;