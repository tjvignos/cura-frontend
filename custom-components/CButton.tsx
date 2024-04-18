import { Button, ButtonText } from "tamagui";

export function CButton({ label, onPress, width, height }: { label: string, onPress: any, width: number, height: number}) {
  return (
    <Button
      style={{ width: width, height: height}}
      backgroundColor="#C0A1DD"
      onPress={onPress}
    >
      <ButtonText>{label}</ButtonText>
    </Button>
  )
}