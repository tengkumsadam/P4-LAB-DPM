import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ResetButton = () => {
  return (
    <View style={styles.container}>
      <Button title="Reset Skor" color="red" onPress={() => alert('Skor telah direset!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default ResetButton;
