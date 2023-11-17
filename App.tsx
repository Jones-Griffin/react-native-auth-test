import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { openLink2 } from './utils';

const url = 'https://google.com'

export default function App() {

  const onOpenLink = useCallback(async () => {
    await openLink2(url);
  }, [url]);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.openButton}>
            <Button title="Open link" onPress={onOpenLink} />
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  openButton: {
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
});
