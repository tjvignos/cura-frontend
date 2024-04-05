import { Button, ButtonText } from "tamagui";
import { Image, View } from 'react-native';

export default function NavItem({ src, handlePress, name }: {src: any, handlePress: any, name: string}) {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "flex-start",
        padding: 15,
      }}
    >
      <Button 
        chromeless
        onPress={handlePress}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          
          }}
        >
          <Image source={src} style={{width: 25, height: 25}} tintColor="#FFFFFF"/>
          <ButtonText size="$1">{name}</ButtonText>
        </View>
        
      </Button>
    </View>
  )
}