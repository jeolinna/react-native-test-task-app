import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from './axios'
import { FavoritePayload, FavoriteResponse } from './apiTypes'

const postFavorite = async (
  payload: FavoritePayload,
): Promise<FavoriteResponse> => {
  try {
    const response = await api.post<FavoriteResponse>('/favorites', payload)
    return response.data
  } catch {
    throw new Error('Failed to add favorite')
  }
}

export const usePostFavoriteMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },
  })
}
