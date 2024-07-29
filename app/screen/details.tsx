import { View, Text } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';


const details = () => {

  const user = FIREBASE_AUTH.currentUser;

  //shows user information (name,email,firebase id)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>

    {user ? (
        <View style={{ marginVertical: 5, alignItems: 'center' }}>
            <Text>Wellcome, {user.displayName || 'User'}</Text>
            <Text>ID: {user.uid}</Text>
            <Text>Email: {user.email || "None"}</Text>
        </View>
    ) : (
        <Text>There is no authenticated user</Text>
    )}

</View>
  )
}

export default details