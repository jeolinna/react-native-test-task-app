import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { Activity } from '../api/apiTypes'
import { useAddToFavorites } from '../api/useAddToFavorites'

type AddToFavoritesButtonProps = {
  activity: Activity
}

export const AddToFavoritesButton = ({
  activity,
}: AddToFavoritesButtonProps) => {
  const { toggleFavorite, isFavorite, isPending } = useAddToFavorites()

  const handleToggleFavorite = () => {
    toggleFavorite({ id: activity.id })
  }

  return (
    <View style={tw`absolute bottom-0 left-0 right-0 p-4 bg-white`}>
      <TouchableOpacity
        onPress={handleToggleFavorite}
        disabled={isPending}
        style={tw.style(
          'py-5 px-[22px] rounded-[800px]',
          isFavorite(activity.id) ? 'bg-gray-400' : 'bg-black',
          isPending && 'opacity-50',
        )}
      >
        <Text
          style={[tw`text-base text-white text-center`, { fontFamily: 'Abel' }]}
        >
          {isPending
            ? 'Loading...'
            : isFavorite(activity.id)
              ? 'Added to Favorites'
              : 'Add to Favorites'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
