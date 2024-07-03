import api from "@/configs/api";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginUser =
  ({ email, password }, navigate) =>
  (dispatch) => {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    api({
      method: "POST",
      url: `/auth/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS" });
        const { token, refreshToken } = res.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
        dispatch({ type: "LOGIN_SUCCESS", payload: err.response });
      });
  };

export const register = ({ name, email, phone, password }, navigate) => {
  return (dispatch) => {
    dispatch(registerRequest());

    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    api
      .post("/workers/register", data)
      .then(() => {
        dispatch(registerSuccess());
        navigate("/profile");
      })
      .catch((error) => {
        dispatch(registerFailure(error.message));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    try {
      // Dispatch the logout action
      dispatch({ type: "LOGOUT_USER" });

      // Remove the token from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    } catch (error) {
      // Handle any errors that may occur during the logout process
      console.error("Logout error:", error);
    }
  };
};
