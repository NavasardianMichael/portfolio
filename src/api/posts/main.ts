import axiosInstance from 'api/axiosInstance'
import { APIResponse } from 'helpers/types/api'
import { handleAPIError, paramsToQueryString } from 'helpers/functions/api'
import { ENDPOINTS } from './endpoints'
import {
  processCreatePostResponse,
  processDeletePostResponse,
  processEditPostResponse, processFavoritePostResponse,
  processGetPostResponse,
  processGetPostsResponse,
} from './processors'
import { CreatePostAPI, DeletePostAPI, EditPostAPI, FavoritePostAPI, GetFilteredPostsAPI, GetPostAPI, GetPostsAPI } from './types'

export const getPostsAPI: GetPostsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetPostsAPI['response']>>(
    `${ENDPOINTS.getPosts}?${paramsToQueryString(params)}`
  )
  handleAPIError(data)
  const processedResponse = processGetPostsResponse(data)
  return processedResponse
}

export const getFilteredPostsAPI: GetFilteredPostsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetFilteredPostsAPI['response']>>(
    `${ENDPOINTS.getFilteredPosts}?${paramsToQueryString(params)}`
  )
  handleAPIError(data)
  const processedResponse = processGetPostsResponse(data)
  return processedResponse
}

export const getUserPostsAPI: GetPostsAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetPostsAPI['response']>>(
    `${ENDPOINTS.userPosts}?${paramsToQueryString(params)}`
  )
  handleAPIError(data)
  const processedResponse = processGetPostsResponse(data)
  return processedResponse
}


export const getPostAPI: GetPostAPI['api'] = async (params) => {
  const { data } = await axiosInstance.get<APIResponse<GetPostAPI['response']>>(`${ENDPOINTS.getPost}/${params.id}`)
  handleAPIError(data)
  const processedResponse = processGetPostResponse(data)
  return processedResponse
}

export const createPostAPI: CreatePostAPI['api'] = async (params) => {
  const { data } = await axiosInstance.post<APIResponse<CreatePostAPI['response']>>(ENDPOINTS.createPost, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true
  })
  handleAPIError(data)
  const processedResponse = processCreatePostResponse(data)
  return processedResponse
}

export const editPostAPI: EditPostAPI['api'] = async (params) => {
  const { data } = await axiosInstance.post<APIResponse<EditPostAPI['response']>>(ENDPOINTS.editPost, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  handleAPIError(data)
  const processedResponse = processEditPostResponse(data)
  return processedResponse
}

export const deletePostAPI: DeletePostAPI['api'] = async (params) => {
  const { data } = await axiosInstance.delete<APIResponse<DeletePostAPI['response']>>(
    `${ENDPOINTS.deletePost}?${paramsToQueryString(params)}`
  )
  handleAPIError(data)
  const processedResponse = processDeletePostResponse(data)
  return processedResponse
}

export const makeFavoritePostAPI: FavoritePostAPI['api'] = async (params) => {
  const { data } = await axiosInstance.post<APIResponse<FavoritePostAPI['response']>>(ENDPOINTS.favoritePosts, params, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  })
  handleAPIError(data)
  const processedResponse = processFavoritePostResponse(data)
  return processedResponse
}

export const deleteFavoritePostAPI: FavoritePostAPI['api'] = async (params) => {
  const { data } = await axiosInstance.delete<APIResponse<FavoritePostAPI['response']>>(
    `${ENDPOINTS.favoritePosts}/${encodeURIComponent(String(params.postId))}`
  )
  handleAPIError(data)
  const processedResponse = processFavoritePostResponse(data)
  return processedResponse
}
