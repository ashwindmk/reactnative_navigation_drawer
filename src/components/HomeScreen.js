import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginBottom: 24
    }
});

export default HomeScreen;
