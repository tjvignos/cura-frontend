import { Button as TButton, ButtonText } from '../tamagui.config';

export const Button = ({ onPress, title }: { onPress?: () => void; title: string }) => {
  return (
    <TButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TButton>
  );
};
