let initialState = {    
    loading: true,
    Detail: {}
}

function tourDetailReducer (state = initialState,action) {

    let {type,payload} = action;

    switch (type) {

        case "GET_TOUR_DETAIL_SUCCESS" :
            return {
                ...state,
                Detail : payload,
                loading : false,
            };

        case "GET_TOUR_DETAIL_REQUEST" :

            return {
                ...state,
                loading : true,
            };

        case "GET_TOUR_DETAIL_FAILURE" :
            return {
                ...state,
                loading : false
            };
        
        default : {
            return {
                ...state
            }
        }

    }

}

export default tourDetailReducer;