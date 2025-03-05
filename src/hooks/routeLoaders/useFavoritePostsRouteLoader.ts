import { isRejectedAction } from 'helpers/functions/store'
import { useCallback } from 'react'
import { getUserPostsThunk } from 'store/posts/thunk'
import { useAppDispatch } from '../useAppDispatch'

export const useFavoritePostsRouteLoader = () => {
  const dispatch = useAppDispatch()

  return useCallback(async () => {
    // implement user poststhunk call with status of favorites

    const getPostsAction = await dispatch(getUserPostsThunk({ page: 1, pageCount: 20, status: 'Favorites' }))

    if (isRejectedAction(getPostsAction)) return false

    return getPostsAction.payload

  }, [dispatch])
}
