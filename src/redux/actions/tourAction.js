import api from "../../api";


function getTourDetailInfo(product_id) {
    
    return async (dispatch) => {

        try {


            dispatch({type:"GET_TOUR_DETAIL_REQUEST"});
            
            const info = await api.post(`/Order/GetProductInDetail`, {
                ProductID: product_id,
                SearchDate: "2022-11-15",
                Days: 1,
                PAdult: 2,
                ChildAges: "1,11"
            });

            console.log("api",info.data)

            dispatch ( {
                type: "GET_TOUR_DETAIL_SUCCESS",
                payload :{
                    productInDetail: info.data,                    
                }
            });

        }
        catch (error) {
            dispatch({type:"GET_TOUR_DETAIL_FAILURE"});
        }


    }

}


export const tourAction = {    
    getTourDetailInfo,    
}