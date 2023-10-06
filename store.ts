/* Core */
import {
  configureStore,
  type ConfigureStoreOptions,
} from '@reduxjs/toolkit'

/* Instruments */
import { reducer } from './rootReducer'
import { middleware } from './middleware'

const configureStoreDefaultOptions: ConfigureStoreOptions = { reducer }

export const makeReduxStore = (
  options: ConfigureStoreOptions = configureStoreDefaultOptions
) => {
  const store = configureStore(options)

  return store
}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
}) 
