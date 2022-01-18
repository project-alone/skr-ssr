import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@store/index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
