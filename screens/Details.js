import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "../redux/actions/CountActions";

export default function Details() {

    const dispatcher = useDispatch();

    const counter = useSelector((store)=> store.count.count);

    const incrementVal=()=> {
        dispatcher(increment());
    }

    const decrementVal=()=> {
        dispatcher(decrement());
    }

    return (
        <View>
            <Text style={styles.fontValue}>Redux Data Operation</Text>
            <Text style={styles.fontValue}>Counter Val: {counter}</Text>

            <View style={{alignItems:"center"}}>
                <View style={{flexDirection:"row",}}>
                    <TouchableOpacity onPress={()=> incrementVal()}>
                        <Text style={{margin:10, fontSize:30, textDecorationLine:'underline'}}>Increment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> decrementVal()}>
                        <Text style={{margin:10, fontSize:30, textDecorationLine:'underline'}}>Decrement</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );

}

const styles = StyleSheet.create({
    fontValue : {
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
    }
});