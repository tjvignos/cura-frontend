import { XStack } from "tamagui";
import NavItem from "./NavItem";
import CheckIn from "screens/checkin";
import Circles from "screens/circles";
import Profile from "screens/profile";


export default function NavBar({nav}: {nav: any}) {
  return (
    <XStack 
      space={20}
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <NavItem 
        src={require("../assets/check-mark.png")} 
        handlePress={() => nav.navigate('checkin')}
        name="check in"
      />
      <NavItem 
        src={require("../assets/circles.png")} 
        handlePress={() => nav.navigate('circles')}
        name="circles"
      />
      <NavItem 
        src={require("../assets/profile.png")} 
        handlePress={() => nav.navigate('profile')}
        name="profile"
      />
    </XStack>
  )
}