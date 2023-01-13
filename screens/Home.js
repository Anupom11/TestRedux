// screens/Home.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/CountActions';

export default function Home({navigation}) {

    //const [counter, setCounter] = useState(0);
    const [modalFlag, setModalFlag] = useState(false);

    const dispatch = useDispatch();

    const counter = useSelector((store)=> store.count.count);
 
    const handleIncreament = () => {
        //setCounter(counter + 1);
        dispatch(increment());
    };
    
    const handleDecreament=()=> {
        //setCounter(counter - 1);
        dispatch(decrement());
    };
 
    const aboutModal=()=> {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalFlag}
                onRequestClose={()=> {setModalFlag(false);}}>

                <View style={styles.container}>
                    <View style={{flex:1}}>
                        <Text style={[styles.title_text, {textDecorationLine:'underline'}]}>Test Redux</Text>
                        <Text>An application to test redux operations and there implementations.</Text>
                        <Text>Here we havce implemented three concepts of redux-</Text>
                            <Text>1. Actions</Text>
                            <Text>2. Reducers</Text>
                            <Text>3. Stores</Text>
                    </View>
                    <Pressable
                        onPress={() => setModalFlag(false)}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
                
            </Modal>
        );
    }

    return (
        <View style={styles.container}>
            {
                aboutModal()
            }

            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{counter}</Text>
    
            <TouchableOpacity onPress={handleIncreament} style={styles.btn}>
                <Text style={styles.btn_text}> Increment </Text>
            </TouchableOpacity>
    
            <TouchableOpacity
                onPress={handleDecreament}
                style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
                <Text style={styles.btn_text}> Decrement </Text>
            </TouchableOpacity>

            <View style={{margin:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
                    <Text style={{fontSize:15}}>Go to Details</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{flex:1, justifyContent:'flex-end',}}>
                <TouchableOpacity onPress={()=> setModalFlag(true)}>
                    <Text>About</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 40,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});