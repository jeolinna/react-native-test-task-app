import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import BackIcon from '/assets/svg/BackIcon.svg'
import { RootStackParamList } from '@screens/types/root'
import { StackNavigationProp } from '@react-navigation/stack'

type BackButtonProps = {
  navigation: StackNavigationProp<RootStackParamList>
}

export const BackButton = ({ navigation }: BackButtonProps) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={tw`bg-white rounded-full p-4`}
  >
    <BackIcon width={24} height={24} />
  </TouchableOpacity>
)
