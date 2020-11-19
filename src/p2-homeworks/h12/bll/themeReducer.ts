export type InitStateType = {
    theme: string
   // themes: Array<string>
}

const initState: InitStateType = {
    theme: "some",
  //  themes: ['dark', 'red', 'some']
};

export type ChangeThemeCType = {
    type: "CHANGE-BACKGROUND"
    theme: string
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeCType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-BACKGROUND":
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string): ChangeThemeCType => {
    return {type: "CHANGE-BACKGROUND", theme}
}; // fix any