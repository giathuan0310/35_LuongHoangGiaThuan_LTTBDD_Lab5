import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Image, ScrollView } from 'react-native';

const ProductScreen = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userNameFocused, setUserNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [users, setUsers] = useState([]);

    const handleSignup = () => {
        if(userName && email && password && agreeTerms){
            const newUser = {userName, email, password};
            setUsers([...users,newUser]);
            alert('Đăng ký thành công!');
            navigation.navigate('WelcomeScreen',{users:[...users,newUser]});
        } else{
            alert('Vui lòng tích vào ô');
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image source={require('../assets/DATA/Image 19.png')} style={styles.image} />
                <Text style={styles.title}>Nice to see you!</Text>
                <Text style={styles.subtitle}>Create your account</Text>

                {/* User Name Input */}
                <View style={[styles.inputContainer, userNameFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/codicon_account.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your user name"
                        placeholderTextColor="#aaa"
                        keyboardType="default"
                        onFocus={() => setUserNameFocused(true)}
                        onBlur={() => setUserNameFocused(false)}
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>

                {/* Email Input */}
                <View style={[styles.inputContainer, emailFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/Vector.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email address"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                {/* Password Input */}
                <View style={[styles.inputContainer, passwordFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/lock.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={agreeTerms}
                        onValueChange={setAgreeTerms}
                    />
                    <Text style={styles.checkboxLabel}>
                        I agree with <Text style={styles.link}>Terms & Conditions</Text>
                    </Text>
                </View>

                {/* Continue Button */}
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 37,
    },
    image: {
        width: 84,
        height: 82,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        maxWidth: 350,
        marginBottom: 12, 
        borderWidth: 1,
        borderColor: '#bababa',
        borderRadius: 12,
        paddingHorizontal: 10,
    },
    inputFocused: {
        borderColor: '#000',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        outlineWidth: 0,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        maxWidth: 350,
        marginBottom: 15,
        marginLeft: 5,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 14,
        color: '#777',
    },
    link: {
        color: '#007BFF', 
    },
    button: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: '#00bdd6', 
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 10, 
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductScreen;