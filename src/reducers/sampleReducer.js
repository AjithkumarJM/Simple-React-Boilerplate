export default function (state = [], action) {
    switch (action.type) {
        case 'SAMPLE_CALL':            
            // state = action.payload.data.data; 
            // concat to produce new instance of state (Mutating)
            // return state.concat([action.payload.data.data]); --- or 
            return [action.payload, ...state]
        default:
            return state;
    }
}