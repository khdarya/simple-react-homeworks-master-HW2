export type SortActionType = {
    type: 'SORT'
    payload: string
}
export type CheckActionType = {
    type: 'CHECK'
    payload: number
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
            debugger
            if (action.payload === 'up') {
                newState = state.sort((a: peopleType, b: peopleType): any => {
                    let nameA = a.name.toLowerCase(),   //checked in int-t(mine)
                        nameB = b.name.toLowerCase();
                    if(nameA < nameB) {
                        return -1   //по возрастанию(мой)
                    }
                    if(nameA > nameB) {
                        return 1
                    }
                    return 0;      //0 - нет сортировки(мой)?
                    })
                return state;

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
                return state;
            }

        }

        case 'CHECK': {
         debugger
            let newState: Array<peopleType> = []
            newState = state.filter(s => s.age >= action.payload);

            return newState;
        }

        default: return state;  //Ignat fixed: was [..state]
    }
};

export const SortAC = (upOrDown: string): SortActionType => {
    return {type: 'SORT', payload: upOrDown};
}

export const CheckAC = (age: number): CheckActionType => {
    return {type: 'CHECK', payload: age};
}