import {
	fetchCreatorLoading,
	fetchCreatorSuccess,
	fetchCreatorFail,
	fetchPageSuccess,
	fetchPageNoSuccess
} from './getCreators.slice';

import { fetchAdminCreators, fetchFilteredAdminCreators } from '../../api/user.api';

export const fetchAllCreators = (frmdata) => async (dispatch) => {
	dispatch(fetchCreatorLoading());
	try {
		const result = await fetchAdminCreators(frmdata);
		console.log("hen", result)
		dispatch(fetchCreatorSuccess(result.adminUser));
		dispatch(fetchPageSuccess(result.totalPages));
		dispatch(fetchPageNoSuccess(result.pageNo))
	} catch (error) {
		dispatch(fetchCreatorFail(error.message));
	}
};

// export const filterSerachCreator = (str) => (dispatch) => {
//     console.log("hna",str)
// 	dispatch(searchCreators(str));
// };

export const filterSerachCreator = (frmdata) => async (dispatch) => {
	dispatch(fetchCreatorLoading());
	try {
		const result = await fetchFilteredAdminCreators(frmdata);
		console.log("hen", result)
		dispatch(fetchCreatorSuccess(result.adminUser));
		dispatch(fetchPageSuccess(result.totalPages));
		dispatch(fetchPageNoSuccess(result.pageNo))
	} catch (error) {
		dispatch(fetchCreatorFail(error.message));
	}
};