import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// Uses the Node MOdule Resolution for ES 6+ Exports
// Load and Cache the exported object from the js file (aka Module) 
import FirstComponent from './components/firtscomponent';
import UseEffectComponent from './components/useEffectcomponent';
import FlatlistComponent from './components/flatlistcomponent';
 
export default function App() {
 // Define a local state
 const [x, setX] = useState(0);
 const [message,setMessage] = useState('');
 
 const receiveMessageFromFirstComponent=(msg)=>{
   setMessage(msg);
 };


  // The DOM Mounting on The UI aka WebView
  return (
    <View style={styles.container}>

    <FlatlistComponent/>


      {/* <Text>I Am the Parent App Component</Text>
      <Button title='Change X'
        onPress={()=>setX(x + 10)}
      ></Button>
      <Text>The Default State is = {x}</Text>  */}
      {/* Binding receiveMessageFromFirstComponent method to communicator */}
      {/* <FirstComponent valueObject={x} communicator={receiveMessageFromFirstComponent}/>

      <Text>The Message Received from Child is: = {message}</Text>

      <StatusBar style="auto" /> */}

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
