import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

// TypeScript doesn't require special types for functional components with no props,
// but you can explicitly declare it if you want.
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      <Text>Testing123</Text>
    </View>
  );
};

// Define your styles with TypeScript types
interface Styles {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
