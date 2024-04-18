import { CInput } from "custom-components/CInput";
import { TextArea } from "tamagui";
import { View, Text, StyleSheet } from "react-native";
import { CButton } from "custom-components/CButton";
import Circles from "./circles";
import NavBar from "custom-components/NavBar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation";
import { useNavigation } from "@react-navigation/native";
import { styles } from "utils/styles";
import { useState } from "react";
import { use } from "i18next";
import { useEffect } from "react";
import { BASE_URL } from "utils/constants";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { userData, setUserData } from "utils/global";
import CHeader from "custom-components/CHeader";
import { KeyboardAvoidingView } from "react-native";

type CheckInScreenNavigationProps = StackNavigationProp<RootStackParamList, 'checkin'>;

export default function CheckIn() {
  const navigation = useNavigation<CheckInScreenNavigationProps>();

  const [prompt, setPrompt] = useState('');
  const [promptResponse, setPromptResponse] = useState('');

  useEffect(() => {
    fetch(BASE_URL + 'prompt/current/')
    .then(response => response.json())
    .then(data => {
      setPrompt(data.text);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  async function checkInUser({ hasResponse } : { hasResponse: boolean }) {
    try {
      const response = await fetch(BASE_URL + 'user/' + userData.user.id + '/checkin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          "response": hasResponse ? promptResponse : null
        })
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.top}>
        <View style={styles.container}>
          <CHeader title="check in"/>
          <View style={styles.body}>
            <Text style={styles.bodyText}>prompt: {prompt}</Text>
            <Text style={styles.bodyText}>response:</Text>
            <CInput label="your response here" width={350} height={175} multi={true} onChangeText={setPromptResponse}/>
              <CButton 
                label="submit response and check in" 
                onPress={() => {
                  checkInUser({ hasResponse: true })
                  navigation.navigate('circles');
                }} 
                width={350} 
                height={45}
              />
            <CButton 
              label="check in without responding" 
              onPress={() => {
                checkInUser({ hasResponse : false })
                navigation.navigate('circles');
              }} 
              width={350} 
              height={45}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <NavBar nav={navigation}/>
      </View>
    </View>
  );  
}
