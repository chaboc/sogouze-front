export type State = {
    matchLoading: bool,
    matchSuccess: number,
    matchMessage: string,
    matchList: any,
}

const defaultState = {
    matchLoading: false,
    matchSuccess: 0,
    matchMessage: '',
    matchList: [],
}

export default function (state:State = defaultState, action:Action): State {
    console.log(action);
    switch (action.type) {
        case "ONGOING_MATCH":
            return {...state, matchLoading: true, matchSuccess: 0, matchMessage: '', matchList: []};
            break;
        case "SUCCESS_MATCH":
            return {...state, matchLoading: false, matchSuccess: 1, matchMessage: '', matchList: action.data.list};
            break;
        case "ERROR_MATCH":
            return {...state, matchLoading: false, matchSuccess: 0, matchMessage: action.message, matchList: []};
            break;
        case "REMOVE_MATCH":
            console.log(state);
            const prunedList = state.matchList.filter(item => {
                return item.id === action.idToRemove;
            });
            return {...state, matchList: prunedList};
            break;
        default:
            return state
    }
}
