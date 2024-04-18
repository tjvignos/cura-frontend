import { View, Text } from "react-native";
import { CButton } from "../custom-components/CButton";
import { CInput } from "../custom-components/CInput";
import NavBar from "../custom-components/NavBar";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation";
import { styles } from "utils/styles";
import { useEffect, useState } from "react";
import { userData } from "utils/global";
import { BASE_URL } from "utils/constants";
import CircleCard from "../custom-components/CircleCard";
import CHeader from "custom-components/CHeader";

type CirclesScreenNavigationProps = StackNavigationProp<RootStackParamList, 'circles'>;

export default function Circles() {
  const navigation = useNavigation<CirclesScreenNavigationProps>();

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + 'user/' + userData.user.id + '/circles/')
    .then(response => response.json())
    .then(data => {
      setCircles(data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.mainContainer} >
      <View style={styles.top}>
        <View style={styles.container}>
          <CHeader title="circles"/>
          <View style={styles.circles}>
            {circles.length != 0 && circles.map((circle: any) => {
              return <CircleCard 
                name={circle.name} 
                handlePress={() => {
                  navigation.navigate('circle', { circleInput: circle });
                  console.log('test');
                }}
              />
            })}
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <NavBar nav={navigation}/>
      </View>
    </ View>
  );
}
