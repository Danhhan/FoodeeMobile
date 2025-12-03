import { HeaderWithBackButton } from '@/components/Header';
import Screen from '@/components/Screen';

export const ChangeAddressScreen = () => {
  return (
    <Screen safeAreaEdges={['top', 'bottom']} preset="scroll">
      <HeaderWithBackButton title="Addresses" icon="close" />
    </Screen>
  );
};
