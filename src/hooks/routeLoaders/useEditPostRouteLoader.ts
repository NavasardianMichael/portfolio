import { isRejectedAction } from 'helpers/functions/store'
import { useCallback } from 'react'
import { LoaderFunction } from 'react-router-dom'
import { getPostThunk } from 'store/posts/thunk'
import { useAppDispatch } from '../useAppDispatch'

export const useEditPostRouteLoader = () => {
  const dispatch = useAppDispatch()

  const callback: LoaderFunction = useCallback(async ({ params }) => {
    const getPostsAction = await dispatch(getPostThunk({ id: params.postId! }))

    if (isRejectedAction(getPostsAction)) return false
    return getPostsAction.payload

  }, [dispatch])

  return callback
}
