import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Image, ScrollView } from 'react-native';

const SignupScreen = ({ navigation }) => {
    // State quản lý các trường dữ liệu người dùng nhập
    const [userName, setUserName] = useState(''); // Quản lý tên người dùng
    const [email, setEmail] = useState(''); // Quản lý email người dùng
    const [password, setPassword] = useState(''); // Quản lý mật khẩu người dùng

    // State quản lý trạng thái khi input được focus (làm nổi bật viền)
    const [userNameFocused, setUserNameFocused] = useState(false); 
    const [emailFocused, setEmailFocused] = useState(false); 
    const [passwordFocused, setPasswordFocused] = useState(false); 

    // State quản lý checkbox đồng ý điều khoản
    const [agreeTerms, setAgreeTerms] = useState(false);

    // Mảng chứa danh sách người dùng (được cập nhật khi đăng ký thành công)
    const [users, setUsers] = useState([]);

    // Hàm xử lý khi nhấn nút Đăng ký
    const handleSignup = () => {
        // Kiểm tra nếu các trường dữ liệu và checkbox điều khoản đã được điền
        if (userName && email && password && agreeTerms) {
            // Tạo đối tượng người dùng mới và cập nhật vào danh sách
            const newUser = { userName, email, password };
            setUsers([...users, newUser]); // Thêm người dùng mới vào mảng users
            
            alert('Đăng ký thành công!'); // Thông báo thành công
            
            // Điều hướng đến màn hình WelcomeScreen và truyền mảng người dùng
            navigation.navigate('WelcomeScreen', { users: [...users, newUser] });
        } else {
            alert('Vui lòng tích vào ô'); // Thông báo lỗi nếu checkbox chưa tích
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                {/* Hình ảnh logo */}
                <Image source={require('../assets/DATA/Image19.png')} style={styles.image} />
                
                {/* Tiêu đề chính */}
                <Text style={styles.title}>Nice to see you!</Text>
                
                {/* Tiêu đề phụ */}
                <Text style={styles.subtitle}>Create your account</Text>

                {/* Input tên người dùng */}
                <View style={[styles.inputContainer, userNameFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/codicon_account.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your user name" // Placeholder cho tên người dùng
                        placeholderTextColor="#aaa" // Màu chữ cho placeholder
                        keyboardType="default" // Loại bàn phím hiển thị
                        onFocus={() => setUserNameFocused(true)} // Khi input được focus
                        onBlur={() => setUserNameFocused(false)} // Khi input mất focus
                        onChangeText={(text) => setUserName(text)} // Lưu giá trị tên người dùng
                    />
                </View>

                {/* Input email */}
                <View style={[styles.inputContainer, emailFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/Vector.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email address" // Placeholder cho email
                        placeholderTextColor="#aaa" // Màu chữ cho placeholder
                        keyboardType="email-address" // Bàn phím cho email
                        onFocus={() => setEmailFocused(true)} // Khi input được focus
                        onBlur={() => setEmailFocused(false)} // Khi input mất focus
                        onChangeText={(text) => setEmail(text)} // Lưu giá trị email
                    />
                </View>

                {/* Input mật khẩu */}
                <View style={[styles.inputContainer, passwordFocused && styles.inputFocused]}>
                    <Image source={require('../assets/DATA/lock.png')} style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password" // Placeholder cho mật khẩu
                        placeholderTextColor="#aaa" // Màu chữ cho placeholder
                        secureTextEntry // Ẩn ký tự khi nhập mật khẩu
                        onFocus={() => setPasswordFocused(true)} // Khi input được focus
                        onBlur={() => setPasswordFocused(false)} // Khi input mất focus
                        onChangeText={(text) => setPassword(text)} // Lưu giá trị mật khẩu
                    />
                </View>

                {/* Checkbox điều khoản */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={agreeTerms} // Giá trị checkbox (đã tích hay chưa)
                        onValueChange={setAgreeTerms} // Thay đổi giá trị checkbox
                    />
                    <Text style={styles.checkboxLabel}>
                        I agree with <Text style={styles.link}>Terms & Conditions</Text> {/* Điều khoản */}
                    </Text>
                </View>

                {/* Nút Đăng ký */}
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                {/* Nút quay lại trang chủ */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.buttonText}>Back to home</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff', // Màu nền của ScrollView
    },
    container: {
        flex: 1,
        alignItems: 'center', // Căn giữa các thành phần theo chiều ngang
        justifyContent: 'center', // Căn giữa các thành phần theo chiều dọc
        backgroundColor: '#fff', // Màu nền trắng
        padding: 20,
        marginTop: 37, // Khoảng cách trên cùng của màn hình
    },
    image: {
        width: 84,
        height: 82,
        marginBottom: 20, // Khoảng cách giữa hình và tiêu đề
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold', // Chữ in đậm cho tiêu đề chính
        marginBottom: 10, // Khoảng cách giữa tiêu đề và tiêu đề phụ
    },
    subtitle: {
        fontSize: 16,
        color: '#777', // Màu chữ cho tiêu đề phụ
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row', // Sắp xếp icon và input theo chiều ngang
        alignItems: 'center',
        width: '100%',
        maxWidth: 350, // Giới hạn chiều rộng của input
        marginBottom: 12, // Khoảng cách dưới giữa các input
        borderWidth: 1, // Viền của input
        borderColor: '#bababa', // Màu viền mặc định
        borderRadius: 12, // Bo góc input
        paddingHorizontal: 10,
    },
    inputFocused: {
        borderColor: '#000', // Màu viền khi input được focus
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10, // Khoảng cách giữa icon và input text
    },
    input: {
        flex: 1,
        padding: 10, // Khoảng cách bên trong của input
        outlineWidth: 0, // Ẩn viền outline mặc định trên web
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
        color: '#777', // Màu chữ cho nhãn checkbox
    },
    link: {
        color: '#007BFF', // Màu xanh cho phần điều khoản có thể nhấn vào
    },
    button: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: '#00bdd6', // Màu nền cho nút
        borderRadius: 12, // Bo góc nút
        paddingVertical: 12, // Chiều cao của nút
        alignItems: 'center',
        marginTop: 10, // Khoảng cách trên của nút
    },
    buttonText: {
        color: '#fff', // Màu chữ trắng cho nút
        fontSize: 16,
        fontWeight: 'bold', // Chữ in đậm trên nút
    },
});

export default SignupScreen;
