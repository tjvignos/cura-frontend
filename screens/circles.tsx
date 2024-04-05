import { View, Text } from "react-native";
import { CButton } from "../custom-components/CButton";
import { CInput } from "../custom-components/CInput";
import NavBar from "../custom-components/NavBar";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation";
import { styles } from "styles";

type CirclesScreenNavigationProps = StackNavigationProp<RootStackParamList, 'circles'>;

export default function Circles() {
  const navigation = useNavigation<CirclesScreenNavigationProps>();

  return (
    <View style={styles.mainContainer} >
      <View style={styles.top}>
       
      </View>
      <View style={styles.bottom}>
        <NavBar nav={navigation}/>
      </View>
    </ View>
  );
}
