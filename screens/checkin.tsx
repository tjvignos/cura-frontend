import { CInput } from "custom-components/CInput";
import { TextArea } from "tamagui";
import { View, Text, StyleSheet } from "react-native";
import { CButton } from "custom-components/CButton";
import Circles from "./circles";
import NavBar from "custom-components/NavBar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation";
import { useNavigation } from "@react-navigation/native";
import { styles } from "styles";

type CheckInScreenNavigationProps = StackNavigationProp<RootStackParamList, 'checkin'>;

export default function CheckIn() {
  const navigation = useNavigation<CheckInScreenNavigationProps>();

  const prompt = "this is an example prompt";

  return (
    <View style={styles.mainContainer} >
      <View style={styles.top}>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>check in</Text>
            <View style={styles.headingLine}/>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>prompt: {prompt}</Text>
            <Text style={styles.bodyText}>response:</Text>
            <CInput label="your response here" width={350} height={400} multi={true}/>
            <CButton label="submit response and check in" nav={() => {}} width={350} height={45}/>
            <CButton label="check in without responding" nav={() => {}} width={350} height={45}/>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <NavBar nav={navigation}/>
      </View>
    </ View>
  );  
}
