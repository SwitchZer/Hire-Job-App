import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workerReducer from "./workerReducer";
import editprofileReducer from "./editprofileReducer";
import { profileReducer } from "./profileReducer";
import portfolioReducer from "./portfolioReducer";
import experienceReducer from "./experienceReducer";
import roleReducer from "./checkRoleReducer";
import recruiterReducer from "./recruiterReducer";
import { fetchSkillReducer } from "./fetchskillReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  worker: workerReducer,
  editProfile: editprofileReducer,
  checkRole: roleReducer,
  skills: fetchSkillReducer,
  portfolio: portfolioReducer,
  experience: experienceReducer,
  recruiter: recruiterReducer,
});

export default rootReducer;
