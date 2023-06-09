import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" italic>
          Coffstack
        </Text>
        <Text preset="headingMedium">Coffstack</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
