import { createWrapper } from 'next-redux-wrapper'
import { configureStore, EnhancedStore, Store } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import slice, { IState } from '@slices/index'
import { isDev } from '@lib/index'
import middlewares from '@store/middlewares'

const persistConfig = {
	key: 'root', // key명은 변경해서 사용하세요
	version: 1,
	storage,
}
const persistedReducer = persistReducer(persistConfig, slice)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(...middlewares),
	devTools: isDev,
})
const setupStore = (): EnhancedStore => store
const wrapper = createWrapper<Store<IState>>(() => setupStore(), {
	debug: isDev,
})

export default wrapper
