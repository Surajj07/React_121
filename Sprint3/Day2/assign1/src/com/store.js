import { legacy_createStore } from "redux"
import { incrementCountAction } from "./action"
import reducer from "./reducer"


const intstate={
    count:0
}
const store = legacy_createStore(reducer,intstate)

store.dispatch(incrementCountAction(0))

export default store