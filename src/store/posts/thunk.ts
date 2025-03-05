import {
  createPostAPI,
  deleteFavoritePostAPI,
  deletePostAPI,
  editPostAPI,
  getFilteredPostsAPI,
  getPostAPI,
  getPostsAPI,
  getUserPostsAPI,
  makeFavoritePostAPI,
} from 'api/posts/main'
import {
  CreatePostAPI,
  DeletePostAPI,
  EditPostAPI,
  FavoritePostAPI,
  GetFilteredPostsAPI,
  GetPostAPI,
  GetPostsAPI,
} from 'api/posts/types'
import { STATE_SLICE_NAMES } from 'helpers/constants/store'
import { createAppAsyncThunk } from 'helpers/functions/store'
import { getMiniEntitiesThunk } from 'store/miniEntities/thunk'
import { deletePost, initPosts } from './slice'
import { Post, PostsSlice } from './types'

export const getPostsThunk = createAppAsyncThunk<PostsSlice['list'], GetPostsAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/getPosts`,
  async (params, { rejectWithValue, dispatch }) => {
    // const { miniEntities } = getState()
    // const hasMiniEntitiesInitialized = Object.keys(miniEntities).some(
    //   (miniEntityName) => miniEntities[miniEntityName as keyof MiniEntitiesSlice].length > 0
    // )
    try {
      const [posts] = await Promise.all([getPostsAPI(params), dispatch(getMiniEntitiesThunk())])

      dispatch(initPosts(posts))
      return posts
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getUserPostsThunk = createAppAsyncThunk<PostsSlice['list'], GetPostsAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/getPosts`,
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const posts = await getUserPostsAPI(params)

      dispatch(initPosts(posts))
      return posts
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getPostThunk = createAppAsyncThunk<Post, GetPostAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/getPost`,
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const [post] = await Promise.all([getPostAPI(params), dispatch(getMiniEntitiesThunk())])
      dispatch(
        initPosts({
          allIds: [post.id],
          byId: {
            [post.id]: post,
          },
        })
      )
      return post
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const getFilteredPostsThunk = createAppAsyncThunk<void, GetFilteredPostsAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/getFilteredPosts`,
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const [filteredPosts] = await Promise.all([getFilteredPostsAPI(params), dispatch(getMiniEntitiesThunk())])
      dispatch(initPosts(filteredPosts))
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const createPostThunk = createAppAsyncThunk<void, CreatePostAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/createPost`,
  async (params, { rejectWithValue }) => {
    try {
      createPostAPI(params)
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const editPostThunk = createAppAsyncThunk<void, EditPostAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/editPost`,
  async (params, { rejectWithValue }) => {
    try {
      editPostAPI(params)
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const deletePostThunk = createAppAsyncThunk<void, DeletePostAPI['payload']>(
  `${STATE_SLICE_NAMES.posts}/deletePost`,
  async (params, { rejectWithValue, dispatch }) => {
    try {
      await deletePostAPI(params)
      dispatch(deletePost(params))
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const makeFavoritePostThunk = createAppAsyncThunk<void, FavoritePostAPI['payload']>(
  `${STATE_SLICE_NAMES.favorites}/favorites`,
  async (params, { rejectWithValue }) => {
    try {
      await makeFavoritePostAPI(params)
      // dispatch(deletePost(params))
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)

export const removeFavoritePostThunk = createAppAsyncThunk<void, FavoritePostAPI['payload']>(
  `${STATE_SLICE_NAMES.favorites}/favorites`,
  async (params, { rejectWithValue }) => {
    try {
      await deleteFavoritePostAPI(params)
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)
