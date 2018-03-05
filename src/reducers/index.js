const initialState = {
    lsystem: { rules: []}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LSYSTEM":
            return {...state, lsystem: action.payload};
        default:
            return state;
    }
};

export default rootReducer;