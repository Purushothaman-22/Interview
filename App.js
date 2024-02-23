import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Launches from './Component/Launches';


export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Launches />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

