import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import CounterReducer from '@slices/counter'
import type { CounterState } from '@slices/counter'
import UserSlice from '@slices/users'
import type { UserState } from '@slices/users'

export interface IState {
	counter: CounterState
	users: UserState
}

/**
 *
 * @reference https://velog.io/@minai/redux-redux-toolkit%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4%EC%84%9C
 */
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
				users: UserSlice,
			})
			return combineReducer(state, action)
		}
	}
}

export default rootReducer
