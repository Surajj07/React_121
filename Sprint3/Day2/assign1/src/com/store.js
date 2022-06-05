

// class store{
//     #reducer
//     #state
//     #listners
//     constructor(reducer,initstate){
//         this.#reducer=reducer;
//         this.#state=initstate;
//         this.#listners=[]
//     }
//     getstate(){
//         return this.#state;
//     }
//     dispatch(action){
//         const oldState=this.#state;
//         this.#state=this.#reducer(this.#state,action)
//         console.log(this.#state===oldState)
//         if(oldState!==this.#state){
//             this.#listners.push(listner => listner())
//         }

import { legacy_createStore } from "redux"
import { incrementCountAction } from "./action"
import reducer from "./reducer"

//     }
//     subscribe(listner){
//         this.#listners.push(listner)
//     }
// }
const intstate={
    count:0
}
const store = legacy_createStore(reducer,intstate)
// store.subscribe(()=>{
//     console.log('store has got updated!',store.getstate())
// })

// console.log(store.getstate())
store.dispatch(incrementCountAction(0))
// store.dispatch(incrementCountAction(2))
export default store