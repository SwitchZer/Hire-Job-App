import api from "@/configs/api";

export const CHECK_ROLE_REQUEST = "CHECK_ROLE_REQUEST";
export const CHECK_ROLE_SUCCESS = "CHECK_ROLE_SUCCESS";
export const CHECK_ROLE_FAILURE = "CHECK_ROLE_FAILURE";

export const checkRoleRequest = () => ({
  type: CHECK_ROLE_REQUEST,
});

export const checkRoleSuccess = (role) => ({
  type: CHECK_ROLE_SUCCESS,
  payload: role,
});

export const checkRoleFailure = (error) => ({
  type: CHECK_ROLE_FAILURE,
  payload: error,
});

export const checkRoleReducer = () => {
  return async (dispatch) => {
    try {
      dispatch(checkRoleRequest());

      // Make a GET request to the check-role endpoint
      const response = await api(`/auth/check-role`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any necessary authorization headers, such as the token
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const role = data.data.role;
        dispatch(checkRoleSuccess(role));
      } else {
        const errorData = await response.json();
        dispatch(checkRoleFailure(errorData.error));
      }
    } catch (error) {
      dispatch(checkRoleFailure(error.message));
    }
  };
};
