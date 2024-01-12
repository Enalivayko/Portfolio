import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isLoading: true,
    homeWorkList: [],
    homeWorkListReact: [],
    page: 1,
    currentHomeWork: {},
    comment:[],
    commentReact:[],
    dataPieCharts:[],
    user:[],
}

export const homeWorkSlice = createSlice({
    name: 'homework',
    initialState,

    reducers: {
        togglePassed: (state, {payload}) => {
            state.homeWorkList.map((item, index) => {
                if (index === payload  ) {
                    state.homeWorkList[index].complete = !state.homeWorkList[index].complete
                }
            })
        },
        togglePassedReact: (state, {payload}) => {
            state.homeWorkListReact.map((item, index) => {
                if (index === payload  ) {
                    state.homeWorkListReact[index].complete = !state.homeWorkListReact[index].complete
                }
            })
        },
        getHomeWork: (state, {payload}) => {
            state.homeWorkList = payload
        },
        getUsers: (state, {payload}) => {
            state.user = payload
        },
        getHomeWorkReact: (state, {payload}) => {
            state.homeWorkListReact = payload
        },
        getComment: (state, {payload}) => {
            state.comment = payload
        },
        getDataChartsPie: (state, {payload}) => {
            state.dataPieCharts = payload
        },
        getCommentReact: (state, {payload}) => {
            state.commentReact = payload
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        },
        changeHomeWork: (state, {payload}) => {
            state.currentHomeWork = payload;
        },
    }
})
export const {actions, reducer} = homeWorkSlice