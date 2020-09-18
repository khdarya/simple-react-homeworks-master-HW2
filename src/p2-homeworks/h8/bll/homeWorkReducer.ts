export type SortActionType = {
    type: 'SORT'
    payload: string
}
export type CheckActionType = {
    type: 'CHECK'
    payload: string
}
export type ActionType = SortActionType | CheckActionType

export type peopleType = {
    _id: number
    name: string
    age: number
}


export const homeWorkReducer = (state: Array<peopleType>, action: ActionType): Array<peopleType> => {
    switch (action.type) {
        case 'SORT': {
            let newState: Array<peopleType> = []
            if (action.payload === 'up') {
                newState = state.sort((a: peopleType, b: peopleType): any => {
                    let nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase();
                    if(nameA < nameB) {
                        return -1   //по возрастанию(мой)
                    }
                    if(nameA > nameB) {
                        return 1
                    }
                    return 0;      //нет сортировки(мой)
                    })
            }
            if(action.payload === 'down') {
                newState = state.sort((a: peopleType, b: peopleType): any => {
                    let nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase();
                    if(nameB < nameA) {
                        return -1
                    }
                    if(nameB > nameA) {
                        return 1
                    }
                    return 0;
                })
            }
        }
        case 'CHECK': {

            return state
        }
        default: return state
    }
};