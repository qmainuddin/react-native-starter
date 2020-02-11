import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
} from 'react-native';

function LoginScreen ({ navigation, route }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { Auth_Context } = route.params;

    const { signIn } = React.useContext(Auth_Context);

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => signIn({ username, password })} />
        </View>
    )
}

export default LoginScreen