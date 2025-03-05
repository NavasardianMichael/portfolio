import { isRejectedAction } from 'helpers/functions/store'
import { useCallback } from 'react'
import { getMiniEntitiesThunk } from 'store/miniEntities/thunk'
import { useAppDispatch } from '../useAppDispatch'

export const useCreatePostRouteLoader = () => {
  const dispatch = useAppDispatch()

  return useCallback(async () => {
    const getPostsAction = await dispatch(getMiniEntitiesThunk())

    if (isRejectedAction(getPostsAction)) return false
    return getPostsAction.payload

  }, [dispatch])
}
