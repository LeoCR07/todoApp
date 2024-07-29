import { View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import styles from '../styles';


const TodoItem = ({ item }: any) => {

  const ref = doc(FIREBASE_DB, `todos/${item.id}`);

  const deleteItem = async () => {
      deleteDoc(ref)
  };

  // done is boolen
  const toggleItem = async () => {
      updateDoc(ref, { done: !item.done });
  }


  //shows if the task is complete
  return (
      <View style={styles.todoContainer} >

          <TouchableOpacity onPress={() => toggleItem()} style={styles.todo}>
              {item.done && <Ionicons name="thumbs-up" size={32} color="green"></Ionicons>}
              {!item.done && <Entypo name="circle" size={32} color="black"></Entypo>}
              <text style={styles.todoText}>{item.title}</text>

          </TouchableOpacity>
          <Ionicons name="trash-bin-outline" size={24} color="red" onPress={deleteItem}></Ionicons>
      </View>
  )
};


export default TodoItem;
