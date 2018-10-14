export type State = {
    conversationLoading: bool,
    conversationSuccess: number,
    conversationMessage: string,
    conversationList: any,
}

const defaultState = {
    conversationLoading: false,
    conversationSuccess: 0,
    conversationMessage: '',
    conversationList: [],
}

export default function (state:State = defaultState, action:Action): State {
    switch (action.type) {
        case "ONGOING_CONVERSATION":
            return {...state, conversationLoading: true, conversationSuccess: 0, conversationMessage: '', conversationList: []};
            break;
        case "SUCCESS_CONVERSATION":
            return {...state, conversationLoading: false, conversationSuccess: 1, conversationMessage: '', conversationList: action.data.list};
            break;
        case "ERROR_CONVERSATION":
            return {...state, conversationLoading: false, conversationSuccess: 0, conversationMessage: action.message, conversationList: []};
            break;
        case "REMOVE_CONVERSATION":
            const prunedList = state.conversationList.filter(item => {
                return item.id !== action.idToRemove;
            });
            return {...state, conversationList: prunedList};
            break;
        default:
            return state
    }
}
