import cellsReducer from './cellsReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    cells: cellsReducer
})

export default reducers;

export type rootState = ReturnType<typeof reducers>;