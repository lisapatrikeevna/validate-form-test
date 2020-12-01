type changeInputACType = ReturnType<typeof changeInputAC>
export type inputType = {
    inputValue: string
    key: string
}
export type initialStateType = {
    inputs: Array<inputType>
}
type actionType = changeInputACType;
let initialState: initialStateType = {
    inputs:
        [{inputValue: '', key: 'numberCart'},
            {inputValue: '', key: 'date'},
            {inputValue: '', key: 'CVV2'},
        ]
}
export const AppReduser = (state = initialState, action: actionType) => {
    switch (action.type) {
        case "CHANHE-INPUT-VALUE": {

            return {
                ...state, inputs: state.inputs.map (i => {
                    if (i.key !== action.key) {
                        return i
                    } else  {return  {...i, inputValue: action.inputValue} }
                })
            }
        }
        default:
            return state
    }
}
export const changeInputAC = (inputValue: string, key: string) => ({type: 'CHANHE-INPUT-VALUE', inputValue, key} as const)