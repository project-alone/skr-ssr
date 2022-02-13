import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
import slice, { IState } from '@slices/index'
import { isDev } from '@lib/index'
import middlewares from '@store/middlewares'
import {
	createPersistedReducer,
	actionTypes,
	createPersistor,
} from '@store/persist'
import type {
	Action,
	EnhancedStore,
	Store,
	ThunkAction,
} from '@reduxjs/toolkit'

const store = configureStore({
	reducer: createPersistedReducer(slice),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [...actionTypes],
			},
		}).concat(...middlewares),
	devTools: isDev,
})
const makeStore = (): EnhancedStore => store
const wrapper = createWrapper<Store<IState>>(() => makeStore(), {
	debug: isDev,
})
let persistor = createPersistor(store)

/** @title RootState 전체 state의 타입 */
export type RootState = ReturnType<typeof store.getState>

/** @title useDispatch의 타입 */
export type AppDispatch = typeof store.dispatch

/** @title custom thunk 생성시 사용 가능한 return 타입 */
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export { persistor, wrapper as default }
