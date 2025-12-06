import { useState } from 'react';

import Screen from '@/components/Screen';
import { AppStackScreenProps } from '@/navigators/navigationTypes';
import { useAppTheme } from '@/theme/context';
import { $styles } from '@/theme/styles';
import { EAuthMethod } from '@/types/auth';

import { AuthEmail } from './components/AuthEmail';
import { AuthMethodSection } from './components/AuthMethodSection';

interface AuthScreenProps extends AppStackScreenProps<'Auth'> {}

const AuthScreen = ({}: AuthScreenProps) => {
  const {
    theme: { colors },
  } = useAppTheme();

  const [method, setMethod] = useState<EAuthMethod | null>(EAuthMethod.email);

  const renderContent = () => {
    switch (method) {
      case EAuthMethod.email:
        return <AuthEmail onBack={() => setMethod(null)} />;
      default:
        return <AuthMethodSection onMethodSelect={setMethod} />;
    }
  };

  return (
    <Screen
      safeAreaEdges={['top', 'bottom']}
      backgroundColor={colors.palette.white100}
      preset="scroll"
      contentContainerStyle={$styles.fill}
    >
      {renderContent()}
    </Screen>
  );
};

export default AuthScreen;
