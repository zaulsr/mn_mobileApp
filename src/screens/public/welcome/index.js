import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { logo } from '../../../assets';
import Text from '../../../components/elements/text';
import MyStatusBar from '../../../components/statusbar';

function Index(props) {
  useEffect(() => {
    AsyncStorage.removeItem('root');
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, [props.navigation]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <MyStatusBar dark />
        <View style={styles.imageWrapper}>
          <Image source={logo} style={styles.image} />
          <ActivityIndicator size="large" color="white" />
        </View>
        <View style={styles.textWrapper}>
          <Text size={12} color="white">
            v1.0.0
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26C281',
  },
  imageWrapper: {
    flex: 6,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  versionText: {
    color: 'white',
  },
});

export default Index;
