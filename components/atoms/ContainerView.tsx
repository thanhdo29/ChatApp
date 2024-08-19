import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const ContainerView: React.FC<ContainerProps> = ({ children }) => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ContainerView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },
});
