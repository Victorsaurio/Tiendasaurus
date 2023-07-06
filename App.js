import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/Screens/MainScreen';

const taskList = [
  {
    id: 1,
    task: "Regar plantitas",
    completed: false
  },
  {
    id: 2,
    task: "Lavar platos",
    completed: false
  },
  {
    id: 3,
    task: "Limpiar el baño",
    completed: false
  },
  {
    id: 4,
    task: "Comprar carne ",
    completed: false
  },
  {
    id: 5,
    task: "Comprar verduras",
    completed: false
  },
]

export default function App() {
  return (
      <MainScreen taskList = {taskList}/>
  );
}


