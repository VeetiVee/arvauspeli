import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';



export default function App() {
  const [text, setText] = useState('Guess a number between 1-100');
  const [guess, setGuess] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  let [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const makeGuess = () => {
    if(guess == number) {
      setNumberOfGuesses(numberOfGuesses = numberOfGuesses + 1)
      setNumber(Math.floor(Math.random() * 100) + 1)
      setText('Guess a number between 1-100')
      setGuess('')
      Alert.alert('You guessed the number in ' + numberOfGuesses + ' guesses');
    } else if (guess < number) {
      setNumberOfGuesses(numberOfGuesses = numberOfGuesses + 1)
      setText('Your guess ' + guess + ' is too low');
      setGuess('')
    } else if (guess > number) {
      setNumberOfGuesses(numberOfGuesses = numberOfGuesses + 1)
      setText('Your guess ' + guess + ' is too high');
      setGuess('')
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
      style={{width:200, borderColor: 'gray', borderWidth:1}}
      keyboardType={"number-pad"}
      onChangeText={guess => setGuess(guess)}
      value={guess}
      />
      <Button onPress={makeGuess} title= "Make a guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
