import { createWrapper } from 'next-redux-wrapper'
import {
	configureStore,
	EnhancedStore,
	Store,
	Action,
	ThunkAction,
} from '@reduxjs/toolkit'

import slice, { IState } from '@slices/index'

const devMode = process.env.NODE_ENV === 'development'

// custom middleware
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loggerMiddleware = () => (next: any) => (action: any) => {
	return next(action)
}

const store = configureStore({
	reducer: slice,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loggerMiddleware),
	devTools: devMode,
})
const setupStore = (): EnhancedStore => store
const makeStore = () => setupStore()

export const wrapper = createWrapper<Store<IState>>(makeStore, {
	debug: devMode,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export default wrapper
