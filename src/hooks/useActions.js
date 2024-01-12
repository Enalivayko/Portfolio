import {actions} from "../store/homeWork/homeWork.slice";
import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

const rootActions = {
    ...actions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}