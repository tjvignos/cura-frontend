import { RootStackParamList } from "navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { styles } from "utils/styles";
import NavBar from "custom-components/NavBar";
import CircleCard from "custom-components/CircleCard";
import CHeader from "custom-components/CHeader";

type CircleScreenNavigationProps = StackNavigationProp<RootStackParamList, 'circle'>;

export default function Circle({ circleInput } : { circleInput : any }) {
  const navigation = useNavigation<CircleScreenNavigationProps>();


  return (
    <View style={styles.mainContainer} >
      <View style={styles.top}>
        <View style={styles.container}>
          <CHeader title={circleInput.name}/>
          <View>
            {
              circleInput.users.map((user: any) => {
                return <Text>{user.username}</Text>
              })
            }
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <NavBar nav={navigation}/>
      </View>
    </ View>
  );
}