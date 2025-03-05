import { isRejectedAction } from 'helpers/functions/store'
import { useCallback } from 'react'
import { getPostsThunk } from 'store/posts/thunk'
import { useAppDispatch } from '../useAppDispatch'

export const usePostsRouteLoader = () => {
  const dispatch = useAppDispatch()

  return useCallback(async () => {
    const getPostsAction = await dispatch(getPostsThunk({ page: 1, pageCount: 20 }))

    if (isRejectedAction(getPostsAction)) return false

    return getPostsAction.payload

  }, [dispatch])
}
