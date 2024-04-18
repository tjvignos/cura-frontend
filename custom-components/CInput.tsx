import { Input, TextArea } from "tamagui";

export function CInput({ label, width, height, multi, onChangeText }: { label: string, width: number, height: number, multi: boolean, onChangeText: any}) {
  return (
    <>{multi ? 
      <TextArea 
        placeholder={label}
        borderColor="#C0A1DD"
        borderWidth={2}
        backgroundColor="#FFFFFF"
        placeholderTextColor="#C0A1DD"
        width={width}
        height={height}
        color="#C0A1DD"
        onChangeText={onChangeText}
      /> : 
      <Input 
        placeholder={label}
        borderColor="#C0A1DD"
        borderWidth={2}
        backgroundColor="#FFFFFF"
        placeholderTextColor="#C0A1DD"
        width={width}
        height={height}
        color="#C0A1DD"
        onChangeText={onChangeText}
        secureTextEntry={label === 'password'}
      />
    }</>
    
  )
}