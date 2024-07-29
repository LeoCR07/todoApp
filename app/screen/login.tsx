import { View, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles';



const login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    //Log in
    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);

        } catch (error: any) {
            console.log(error);
            alert('Sign failed ' + error.message)

        } finally {
            setLoading(false)
        }
    }

    //Create an account
    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Your account has been created successfully. You can now log in')
            
        } catch (error: any) {
            console.log(error);
            alert('SignUp failed ' + error.message)

        } finally {
            setLoading(false)
        }

    }


    //start without account
    const signInAnony = async () => {
        setLoading(true)
        try {
            const response = await signInAnonymously(auth);
            console.log(response);

        } catch (error: any) {
            console.log(error);
            alert('SignUp failed ' + error.message)

        } finally {
            setLoading(false)
        }

    }


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>

                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>

                {loading ? <ActivityIndicator size="large" color="#0000ff">
                </ActivityIndicator> : (<>
                    <View style={styles.buttonContainer}>
                        <Button title="Login" onPress={signIn} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Create account" onPress={signUp} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Skip" onPress={signInAnony} />
                    </View>
                </>
                )}

            </KeyboardAvoidingView>
        </View>

    );
};


export default login;


