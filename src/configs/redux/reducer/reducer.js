import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workerReducer from "./workerReducer";
import editprofileReducer from "./editprofileReducer";
import { profileReducer } from "./profileReducer";
import { checkRoleReducer } from "../action/checkRoleAction";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  worker: workerReducer,
  editProfile: editprofileReducer,
  checkRole: checkRoleReducer,
  skills: editprofileReducer,
});

export default rootReducer;
