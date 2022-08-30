

export const intialState = {
    basket: [],
}


export const getBasketTotal = ( basket) => {  
    return (basket?.reducer((amount,item) => item.price + amount, 0 ));
}

    const reducer = (state, action) => {
        switch(action.type){
            case  "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket,action.item],
            }
        }

}

export default reducer;
