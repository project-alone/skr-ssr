import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers, AnyAction } from '@reduxjs/toolkit'

import CounterReducer, { CounterState } from '@slices/counter'

export interface IState {
	counter: CounterState
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: IState | undefined, action: AnyAction) => {
	switch (action.type) {
		case HYDRATE: {
			const nextState = {
				...state,
				...action.payload,
			}
			return nextState
		}

		default: {
			const combineReducer = combineReducers({
				counter: CounterReducer,
			})
			return combineReducer(state, action)
		}
	}
}

export default rootReducer
