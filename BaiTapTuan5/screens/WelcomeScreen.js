import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Component màn hình chào mừng và đăng nhập
const WelcomeScreen = ({ navigation, route}) => {
    const { users } = route.params || {users: []}; // Lấy danh sách người dùng từ tham số route hoặc thiết lập mảng rỗng nếu không có người dùng
    const [email, setEmail] = useState(''); // Trạng thái cho email
    const [password, setPassword] = useState(''); // Trạng thái cho mật khẩu
    const [isFocusedEmail, setIsFocusedEmail] = useState(false); // Trạng thái kiểm soát khi ô nhập email được nhấn
    const [isFocusedPassword, setIsFocusedPassword] = useState(false); // Trạng thái kiểm soát khi ô nhập mật khẩu được nhấn

    // Hàm xử lý đăng nhập
    const handleLogin = () => {
        // Tìm người dùng có email và mật khẩu khớp
        const userFound = users.find(user => user.email === email && user.password === password);
        if(userFound){
            alert(`Welcome, ${userFound.userName}!`); // Hiển thị thông báo chào mừng nếu tìm thấy người dùng
            navigation.navigate('ProductScreen'); // Điều hướng đến màn hình sản phẩm
        } else {
            alert('Email hoặc password không hợp lệ'); // Hiển thị thông báo lỗi nếu không tìm thấy người dùng
        }
    };

    return (
        <View style={styles.container}>
            {/* Hình logo */}
            <Image source={require('../assets/DATA/Image20.png')} style={styles.logo} />

            {/* Container chứa nội dung */}
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeText}>Welcome!</Text>

                {/* Nhập Email */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View style={[styles.inputContainer, isFocusedEmail && styles.inputContainerFocused]}>
                        <Image source={require('../assets/DATA/Vector.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter email"
                            placeholderTextColor="#aaa"
                            keyboardType="email-address" // Thiết lập bàn phím email
                            onFocus={() => setIsFocusedEmail(true)} // Khi nhấn vào ô email
                            onBlur={() => setIsFocusedEmail(false)} // Khi bỏ nhấn vào ô email
                            onChangeText={setEmail} // Cập nhật giá trị email khi nhập
                        />
                    </View>
                </View>

                {/* Nhập mật khẩu */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View style={[styles.inputContainer, isFocusedPassword && styles.inputContainerFocused]}>
                        <Image source={require('../assets/DATA/lock.png')} style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter password"
                            placeholderTextColor="#aaa"
                            secureTextEntry // Ẩn mật khẩu khi nhập
                            onFocus={() => setIsFocusedPassword(true)} // Khi nhấn vào ô mật khẩu
                            onBlur={() => setIsFocusedPassword(false)} // Khi bỏ nhấn vào ô mật khẩu
                            onChangeText={setPassword} // Cập nhật giá trị mật khẩu khi nhập
                        />
                    </View>
                </View>

                {/* Nút Đăng Nhập */}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Nút quay lại màn hình chính */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('HomeScreen')} // Điều hướng quay lại màn hình Home
                >
                    <FontAwesome name="arrow-left" size={20} color="#00bdd6" />
                    <Text style={styles.backButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Phần định nghĩa style cho màn hình đăng nhập
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
