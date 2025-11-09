import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import DeviceOrientation from '@kartikbhalla/react-native-orientation';

const Dashboard = () => {
  useEffect(() => {
    DeviceOrientation.lockToLandscape();

    return () => {
      DeviceOrientation.lockToPortrait();
    };
  }, []);

  return (
    <View style={styles.homeMainContainer}>
      <Text>
        Welcome Kidz. This is your play zone{' '}
        <Text style={{ color: 'red', fontSize: 20 }}>Enjoy!!</Text>
      </Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
