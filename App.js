import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// importing task componet
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text styles={styles.sectionTitle}>Today's tasks</Text>
      </View>
     <View style={styles.items}>
       <Task />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop:80,
    paddingHorizontal:20,

  },
  tasksWrapper: {

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  items:{
    marginTop : 10
  }
});
