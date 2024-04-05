import { Button, ButtonText } from "tamagui";

export function CButton({ label, nav, width, height }: { label: string, nav: any, width: number, height: number}) {
  return (
    <Button
      style={{ width: width, height: height}}
      backgroundColor="#C0A1DD"
      onPress={nav}
    >
      <ButtonText>{label}</ButtonText>
    </Button>
  )
}