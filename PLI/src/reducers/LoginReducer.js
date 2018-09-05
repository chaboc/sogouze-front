export type State = {
    loginLoading: bool,
    loginSuccess: number,
    loginMessage: string,
}

const defaultState = {
    loginLoading: false,
    loginSuccess: 0,
    loginMessage: '',
}

export default function (state:State = defaultState, action:Action): State {
    switch (action.type) {
        case "ONGOING_LOGIN":
            return {...state, login1Loading: true, login1Success: 0, login1Message: ''};
            break;
        case "SUCCESS_LOGIN":
            return {...state, login1Loading: false, login1Success: 1, login1Message: ''};
            break;
        case "ERROR_LOGIN":
            return {...state, login1Loading: false, login1Success: 0, login1Message: action.message};
            break;
        default:
            return state
    }
}
