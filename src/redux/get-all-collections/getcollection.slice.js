import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allCollections: [],
	isLoadingShowCollection: false,
	errorCollection: '',
	collectionPageArray: [],
	pageNo: 1,
};

const creatorListSlice = createSlice({
	name: 'creatorList',
	initialState,
	reducers: {
		fetchCreatorLoading: (state) => {
			state.isLoadingShowCollection = true;
		},
		fetchCreatorSuccess: (state, action) => {
			state.allCollections = action.payload;
			state.isLoadingShowCollection = false;
			state.errorCollection = ""
		},
		fetchPageSuccess: (state, action) => {
			state.collectionPageArray = action.payload;
			state.isLoadingShowCollection = false;
			state.errorCollection = ""
		}, fetchPageNoSuccess: (state, action) => {
			state.pageNo = action.payload;
			state.isLoadingShowCollection = false;
			state.errorCollection = ""
		},
		fetchCreatorFail: (state, { payload }) => {
			state.isLoadingShowCollection = false;
			state.errorCollection = payload;
		},
		searchCreators: (state, { payload }) => {
			state.allCollections = state.allCollections.filter((row) => {
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