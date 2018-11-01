export type State = {
    userLoading: bool,
    userSuccess: number,
    userMessage: string,
    user: any,
}

const defaultState = {
    userLoading: false,
    userSuccess: 0,
    userMessage: '',
    user: {},
}

export default function (state:State = defaultState, action:Action): State {
    switch (action.type) {
        case "ONGOING_USER":
            return {...state, userLoading: true, userSuccess: 0, userMessage: '', user: null};
            break;
        case "SUCCESS_USER":
            return {...state, userLoading: false, userSuccess: 1, userMessage: '', user: action.data};
            break;
        case "ERROR_USER":
            return {...state, userLoading: false, userSuccess: 0, userMessage: action.message, user: []};
            break;
        default:
            return state
    }
}
