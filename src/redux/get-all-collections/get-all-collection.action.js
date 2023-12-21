import {
	fetchCreatorFail,
	fetchCreatorLoading,
	fetchCreatorSuccess,
	fetchPageNoSuccess,
	fetchPageSuccess
} from './getCreators.slice';

import { fetchAdminCreators, fetchFilteredAdminCreators } from '../../api/user.api';

export const fetchAllCreators = (frmdata) => async (dispatch) => {
	dispatch(fetchCreatorLoading());
	try {
		const result = await fetchAdminCreators(frmdata);
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
		dispatch(fetchCreatorSuccess(result.adminUser));
		dispatch(fetchPageSuccess(result.totalPages));
		dispatch(fetchPageNoSuccess(result.pageNo))
	} catch (error) {
		dispatch(fetchCreatorFail(error.message));
	}
};