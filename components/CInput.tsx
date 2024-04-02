import { Input } from "tamagui";

export function CInput({ label }: { label: string }) {
  return (
    <Input
      placeholder={label}
      borderColor="#C0A1DD"
      borderWidth={2}
      backgroundColor="#FFFFFF"
      placeholderTextColor="#C0A1DD"
      width={200}
      
    />
  )
}