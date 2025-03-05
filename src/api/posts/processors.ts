import { Post, PostsSlice } from 'store/posts/types'
import { CreatePostAPI, DeletePostAPI, EditPostAPI, FavoritePostAPI, GetPostAPI, GetPostsAPI } from './types'
import { CompleteProfileAPI } from '../../helpers/constants/profile'

export const processGetPostsResponse: GetPostsAPI['processor'] = (response) => {
  const normalizedPosts = response.value.reduce(
    (acc, post) => {
      const processedPost = processPostResponse(post)
      acc.byId[processedPost.id] = processedPost
      acc.allIds.push(processedPost.id)
      return acc
    },
    {
      allIds: [],
      byId: {},
    } as PostsSlice['list']
  )

  return normalizedPosts
}

export const processGetPostResponse: GetPostAPI['processor'] = (response) => {
  return processPostResponse(response.value)
}

export const processCreatePostResponse: CreatePostAPI['processor'] = (response) => {
  return response
}

export const processCompleteProfileResponse: CompleteProfileAPI['processor'] = (response) => {
  return response
}

export const processEditPostResponse: EditPostAPI['processor'] = (response) => {
  return response
}

export const processDeletePostResponse: DeletePostAPI['processor'] = () => {
  return
}

export const processFavoritePostResponse: FavoritePostAPI['processor'] = () => {
  return
}

export const processPostResponse = (postResponse: GetPostAPI['response']): Post => {
  const {
    id,
    description,
    createdDateUtc,
    isFavorite,
    modifiedDateUtc,
    mainImage,
    images,
    videoUrl,
    priceUnit,
    price,
    colorHex,
    ...restPostProps
  } = postResponse
  const { contactName, contactEmail, contactPhoneNumber, lookupAddress, ...restPropsWithoutContactInfo } = restPostProps
  return {
    id,
    description,
    createdDateUtc,
    modifiedDateUtc,
    isFavorite,
    images: {
      primary: mainImage.url,
      secondaries: images.map((image) => image.url),
    },
    videoUrl,
    carDetails: {
      ...restPropsWithoutContactInfo,
      color: colorHex,
      price: {
        unit: priceUnit,
        car: price,
        clearance: -1,
      },
    },
    contactInfo: {
      email: contactEmail,
      name: contactName,
      lookupAddress,
      phoneNumber: contactPhoneNumber,
    },
  }
}
