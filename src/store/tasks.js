import { createStore } from 'vuex'

export default createStore({
    state: {
        tasks: [
            {
                title: 'Сделать канбан',
                status: 'inProgress',
                priority: 'High',
                id: 1,
                dataStart: '02.11',
                dataEnd: '25.11'
            },
            {
                title: 'Покушать',
                status: 'requested',
                priority: 'Triage',
                id: 2,
                dataStart: '05.11',
                dataEnd: '31.12'
            },
            {
                title: 'Поспать',
                status: 'requested',
                priority: 'Triage',
                id: 3,
                dataStart: '05.11',
                dataEnd: '31.12'
            },
            {
                title: 'Сделать сайт с фильмами',
                status: 'completed',
                priority: 'High',
                id: 4,
                dataStart: '13.10',
                dataEnd: '30.10'
            },
        ]
    },

    mutations: {
        PUSH_TASK(state, task) {
            state.tasks = [...state.tasks, task]
        },
        CHANGE_TASK(state, task) {
            state.tasks = state.tasks.map((taskState) => {
                if (taskState.id === task.id) {
                    return task
                }
                return taskState
            })
        },
        CHANGE_STATUS_TO_REQUESTED(state, id) {
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, status: 'requested', priority: 'Triage'} : task)
        },
        CHANGE_STATUS_TO_IN_PROGRESS(state, id) {
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, status: 'inProgress'} : task)
        },
        CHANGE_STATUS_TO_IN_REVIEW(state, id) {
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, status: 'inReview'} : task)
        },
        CHANGE_STATUS_TO_COMPLETED(state, id) {
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, status: 'completed'} : task)
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter((task) => task.id != id)
        }

    },

    actions: {
    },
    
    getters: {
        GET_REQUESTED(state) {
            return state.tasks.filter((task) => task.status === 'requested')
        },
        GET_IN_PROGRESS(state) {
            return state.tasks.filter((task) => task.status === 'inProgress')
        },
        GET_IN_REVIEW(state) {
            return state.tasks.filter((task) => task.status === 'inReview')
        },
        GET_COMPLETED(state) {
            return state.tasks.filter((task) => task.status === 'completed')
        },
    }
})