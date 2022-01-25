import { createWrapper } from 'next-redux-wrapper'
import { configureStore, EnhancedStore, Store } from '@reduxjs/toolkit'
import slice, { IState } from '@slices/index'
import { isDev } from '@lib/index'
import middlewares from '@store/middlewares'
import {
	createPersistedReducer,
	actionTypes,
	createPersistor,
} from '@store/persist'

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

export { persistor, wrapper as default }
