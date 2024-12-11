// Import library yang diperlukan
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  // State untuk menyimpan skor kedua tim
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  // Fungsi untuk menambah skor
  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore % 10 === 0) {
        Alert.alert('Pertandingan Selesai', `Tim A Menang dengan skor ${newScore}!`);
        resetScores();
      }
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore % 10 === 0) {
        Alert.alert('Pertandingan Selesai', `Tim B Menang dengan skor ${newScore}!`);
        resetScores();
      }
    }
  };

  // Fungsi untuk mengurangi skor
  const decrementScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Pertandingan Futsal</Text>

      <View style={styles.scoreContainer}>
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

      <Button title="Reset Skor" onPress={resetScores} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default App;