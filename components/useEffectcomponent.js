import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native';

import HttpService from '../services/htytpservice';


const UseEffectComponent=()=> {
  const [products, updateProduct]=useState([]);  
  const [message, setMessage] = useState('');
  const serv = new HttpService();

  useEffect(() => {
    (async () => {
      const data = await serv.getProducs();
      console.log(`Call Success ${JSON.stringify(data.data)}`);
      updateProduct(data.data);
    })();
  },[]);

  const ListRecords=()=>{
    if(products.length === 0 || products === undefined){
        return (
            <View>
                <Text>No Records</Text>
                <Text>{message}</Text>
            </View>
        );
    } else {
        return(
            <View>
                <Text>Success</Text>
                <Text>
                    {products[0].ProductId}
                </Text>
                <Text>{message}</Text>
            </View>
        );
    }
  }


  return (
    <View style={styles.view}>
        <Text style={styles.text}>Receiving the Data from External Service</Text>
        <ListRecords/>
    </View>
    
  );
}

const styles = StyleSheet.create({
    view:{
        height:400,
        width:200,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignContent:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    }
});


export default UseEffectComponent
