import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = ({ navigation, route}) => {
    const { users } = route.params || {users: []};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);

    const handleLogin = () => {
        const userFound = users.find(user => user.email === email && user.password === password);
        if(userFound){
            alert(`Welcome, ${userFound.userName}!`);
            navigation.navigate('ProductScreen');
        } else {
            alert('Email hoặc password không hợp lệ');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/DATA/Image 20.png')} style={styles.logo} />
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeText}>Welcome!</Text>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View style={[styles.inputContainer, isFocusedEmail && styles.inputContainerFocused]}>
                        <Image source={require('../assets/DATA/Vector.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter email"
                            placeholderTextColor="#aaa"
                            keyboardType="email-address"
                            onFocus={() => setIsFocusedEmail(true)}
                            onBlur={() => setIsFocusedEmail(false)}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View style={[styles.inputContainer, isFocusedPassword && styles.inputContainerFocused]}>
                        <Image source={require('../assets/DATA/lock.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter password"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                            onFocus={() => setIsFocusedPassword(true)}
                            onBlur={() => setIsFocusedPassword(false)}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <FontAwesome name="arrow-left" size={20} color="#00bdd6" />
                    <Text style={styles.backButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 0,
        paddingTop: 50,
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
    },
    contentContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 135,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        alignSelf: 'flex-start',
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bababa',
        borderRadius: 12,
        paddingHorizontal: 10,
    },
    inputContainerFocused: {
        borderColor: 'black', // Đổi màu viền khi ô input được nhấn
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        outlineWidth: 0,
    },
    button: {
        width: '100%',
        backgroundColor: '#00bdd6',
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    backButtonText: {
        color: '#00bdd6',
        marginLeft: 10,
        fontSize: 16,
    },
});

export default WelcomeScreen;