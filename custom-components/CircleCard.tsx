import { View, Text } from 'react-native';
import { styles } from 'utils/styles';
import { CButton } from './CButton';

export default function CircleCard({ name, handlePress } : { name: string, handlePress: any }) {
  return (
    <View style={styles.circleCard}>
      <CButton 
        label={name}
        onPress={() => {}}
        width={150}
        height={150}
      />
    </View>
  )
}