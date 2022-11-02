import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TasksProvider } from './src/context/TasksContext';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <TasksProvider>
      <>
        <StatusBar translucent={false} style="auto" />
        <Home />
      </>
    </TasksProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
