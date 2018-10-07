export function reducer (state, action) {
switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
    console.log('exsiting state: ' + JSON.stringify(state));
    console.log('new: ' + action.payload);
    return {
        ...state,
        showProductCode: action.payload
    };
    default:
    return state;
    }
}
