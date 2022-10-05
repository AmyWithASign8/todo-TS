import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { gitHubAcions } from "../store/github/github.slice";

const actions = {
  ...gitHubAcions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
