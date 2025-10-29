import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from './axios'
import { FavoritePayload, FavoriteResponse } from './apiTypes'

export const FAVORITES_KEY = ['favorites']

const getFavorites = async (): Promise<number[]> => {
  const response = await api.get<number[]>('/favorites')
  return response.data
}

const postFavorite = async (
  payload: FavoritePayload,
): Promise<FavoriteResponse> => {
  const response = await api.post<FavoriteResponse>('/favorites', payload)
  return response.data
}

export const useFavorites = () => {
  return useQuery({
    queryKey: FAVORITES_KEY,
    queryFn: getFavorites,
  })
}

export const usePostFavoriteMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postFavorite,
    onMutate: async newFav => {
      await queryClient.cancelQueries({ queryKey: FAVORITES_KEY })

      const previousFavorites =
        queryClient.getQueryData<number[]>(FAVORITES_KEY) || []
      const isAlreadyFavorite = previousFavorites.includes(newFav.id)

      const updatedFavorites = isAlreadyFavorite
        ? previousFavorites.filter(id => id !== newFav.id)
        : [...previousFavorites, newFav.id]

      queryClient.setQueryData(FAVORITES_KEY, updatedFavorites)

      return { previousFavorites }
    },
    onError: (_err, _newFav, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(FAVORITES_KEY, context.previousFavorites)
      }
    },
    onSettled: async () => {
      queryClient.invalidateQueries({ queryKey: FAVORITES_KEY })
    },
  })
}
