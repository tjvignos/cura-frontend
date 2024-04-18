import { View } from 'react-native';
import { Text } from 'react-native';
import { styles } from 'utils/styles';

export default function CHeader({ title } : { title: string }) {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.headingLine}/>
    </View>
  )
}