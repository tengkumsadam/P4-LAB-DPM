import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScoreBoard = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') setScoreTeamA(scoreTeamA + 1);
    if (team === 'B') setScoreTeamB(scoreTeamB + 1);
  };

  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) setScoreTeamA(scoreTeamA - 1);
    if (team === 'B' && scoreTeamB > 0) setScoreTeamB(scoreTeamB - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim A</Text>
        <Text style={styles.score}>{scoreTeamA}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('A')} />
          <Button title="-" onPress={() => decrementScore('A')} />
        </View>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Tim B</Text>
        <Text style={styles.score}>{scoreTeamB}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => incrementScore('B')} />
          <Button title="-" onPress={() => decrementScore('B')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default ScoreBoard;
