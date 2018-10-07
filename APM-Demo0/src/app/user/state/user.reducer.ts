
export function reducer(state, action) {
    switch (action.type) {
        case 'MASK_USER_NAME': {
            console.log('old:' + JSON.stringify(state));
            console.log('new:' + JSON.stringify(action.payload));
            return {
                ...state,
                maskUserName: action.payload
            };
        }
        default:
            return state;
    }
}
