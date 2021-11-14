export default function AppReducer (state, action) {
    switch(action.type) {
        case 'UPDATE_VO':
            const { booth, cardmachine } = action.payload;
            if (!booth || cardmachine === 0) {
                return state;
            }
            return {
                ...state,
                booths: {
                    ...state.booths,
                    [booth]: action.payload
                }
            };
        case 'UPDATE_CENTRE':
            return {
                ...state,
                centre: action.payload
            };
        default:
            return state;
    }
}