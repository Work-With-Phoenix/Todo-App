import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {  KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


// importing task componet
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () =>{
    // Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
      <Text styles={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
           return  (
             <TouchableOpacity  key={index} onPress={() => completeTask(index)}>

                <Task text={item} />
             </TouchableOpacity>
           )
           
            })
          }
       
        </View>
      </View>
   
    <KeyboardAvoidingView 
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.writeTaskWrapper}
     >
  <TextInput style={styles.input} placeholder={'Write tasks here...'} value={task} onChangeText={text => setTask(text)}/>
  <TouchableOpacity onPress = {() => handleAddTask()}>
    <View style={styles.addWrapper}>
      <Text style={styles.addText}>+</Text>
    </View>
  </TouchableOpacity>
     </KeyboardAvoidingView>

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
  },
 
  writeTaskWrapper :{
    position : 'absolute',
    bottom: 60,
    width : '100%',
    flexDirection: 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    paddingTop : 20
    
  },
  input : {
    paddingVertical : 15,
    paddingHorizontal : 15,
    width: 250,
    backgroundColor : '#fff',
    borderWidth : 1,
    borderColor: '#C0C0C0',
    borderRadius: 60
  },
 
  addWrapper :{
    width : 60,
    height : 60,
    backgroundColor : '#fff',
    borderRadius : 60,
    justifyContent: 'center',
    alignItems : 'center',
    borderWidth : 1,
    borderColor : '#C0C0C0',
  },
  addText :{

  },
});
