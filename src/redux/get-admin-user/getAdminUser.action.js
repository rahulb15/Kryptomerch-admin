import { fetchAdminUser } from "../../api/user.api";
import { getUserFail, getUserPending, getUserSuccess } from "./getAdminUser.slice";

export const getAdminUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const result = await fetchAdminUser();

    if (result.adminUser && result.adminUser._id)
      return dispatch(getUserSuccess(result.adminUser));

    dispatch(getUserFail("Admin User is not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};