import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workerReducer from "./workerReducer";
import editprofileReducer from "./editprofileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  worker: workerReducer,
  profile: editprofileReducer,
  skills: editprofileReducer,
});

export default rootReducer;
