import { usePostFavoriteMutation, useFavorites } from '../api/favorites'

export const useAddToFavorites = () => {
  const { mutate: toggleFavorite, isPending } = usePostFavoriteMutation()
  const { data: favorites = [] } = useFavorites()

  const isFavorite = (id: number) => favorites.includes(id)

  return { toggleFavorite, isFavorite, isPending, favorites }
}
