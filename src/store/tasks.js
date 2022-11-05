import { createStore } from 'vuex'

export default createStore({
    state: {
        requested: [],
        inProgress: [],
        inReview: [],
        completed: []
    },

    mutations: {
        PUSH_REQUESTED(state, task) {
            state.requested.push(task)
        },
        DELETE_REQUESTED(state, task) {
            state.requested = state.requested.filter((taskRequested) => {taskRequested != task})
        },
        PUSH_IN_PROGRESS(state, task) {
            state.inProgress.push(task)
        },
        DELETE_PROGRESS(state, task) {
            state.inProgress = state.inProgress.filter((taskInProgress) => {taskInProgress != task})
        },
        PUSH_IN_REVIEW(state, task) {
            state.inReview.push(task)
        },
        DELETE_IN_REVIEW(state, task) {
            state.inReview = state.inReview.filter((taskInReview) => {taskInReview != task})
        },
        PUSH_COMPLETED(state, task) {
            state.completed.push(task)
        },
        DELETE_COMPLETED(state, task) {
            state.completed = state.completed.filter((taskCompleted) => {taskCompleted != task})
        },
    },

    actions: {
    },
    
    getters: {
        GET_REQUESTED(state) {
            return state.requested
        },
        GET_IN_PROGRESS(state) {
            return state.inProgress
        },
        GET_IN_REVIEW(state) {
            return state.inReview
        },
        GET_COMPLETED(state) {
            return state.completed
        },
    }
})