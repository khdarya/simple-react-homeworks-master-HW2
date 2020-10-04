export type LoadingType = {
    type: "LOADING"
    loading: boolean
}

export type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: LoadingType): initStateType => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {...state, loading: action.loading};
        }
        default: return state;
    }
};

export const loadingAC = (loading: boolean): LoadingType => {
    return { type: "LOADING", loading}
}; // fix any