import { View, Text } from 'react-native'
import tw from 'twrnc'

const Loader = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Loading...</Text>
    </View>
  )
}

export default Loader
