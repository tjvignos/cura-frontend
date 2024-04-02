import { Button, ButtonText } from "tamagui";

export function CButton({ label }: { label: string }) {
  return (
    <Button
      style={{ width: 200 }}
      backgroundColor="#C0A1DD"
    >
      <ButtonText>{label}</ButtonText>
    </Button>
  )
}