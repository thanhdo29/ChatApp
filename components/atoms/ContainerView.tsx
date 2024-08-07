import React from 'react';
import { View, StyleSheet } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const ContainerView: React.FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ContainerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 35,
  },
});
