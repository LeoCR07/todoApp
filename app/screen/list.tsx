import { View, Text, Button, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebaseConfig';
import { NavigationProp } from '@react-navigation/native'
import styles from '../styles';
import TodoItem from '../componets/TodoItem';




interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const list = ({ navigation }: RouterProps) => {

    const [todos, setTodos] = useState<any[]>([]);
    const [todo, setTodo] = useState('');


    useEffect(() => {
        const todoRef = collection(FIREBASE_DB, 'todos');

        // to find all todos 
        const subcriber = onSnapshot(todoRef, {
            next: (snapshot) => {
                const todos: any[] = [];
                snapshot.docs.forEach(doc => {
                    todos.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                setTodos(todos)
            }
        });
        return () => subcriber();
    }, []);

    const addTodo = async () => {
        const doc = addDoc(collection(FIREBASE_DB, "todos"), { title: todo, done: false });
        console.log(doc);
    }



    return (
        <View style={styles.container}>

            <Button onPress={() => navigation.navigate("Details")} title="Open Details" ></Button>
            <View style={styles.form}>



                <TextInput style={styles.input} placeholder='Add new Todo' onChangeText={(text: string) => setTodo(text)} value={todo}></TextInput>
                <Button onPress={addTodo} title='Add Todo' disabled={todo === ''}></Button>

            </View>

            <View>
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => TodoItem(item)}
                />
            </View>


            <View style={{ marginVertical: 5 }} >
                <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout' color="green"></Button>
            </View>

        </View>

    )
}

export default list
