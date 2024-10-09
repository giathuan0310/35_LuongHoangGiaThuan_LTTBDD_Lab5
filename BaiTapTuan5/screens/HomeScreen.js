import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";

// Lấy kích thước màn hình để điều chỉnh bố cục linh hoạt
const { width, height } = Dimensions.get('window');

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.style1}>
                <Text style={styles.titleText}>Well Come!</Text>
            </View>

            <View style={styles.style2}>
                {/* Giữ nguyên hình ảnh nhưng không bị cắt ngang */}
                <Image 
                    source={require('../assets/DATA/Container17.png')}
                    style={styles.imageStyle}
                    resizeMode="contain" // Đảm bảo hình ảnh không bị cắt, giữ nguyên tỉ lệ
                />
            </View>

            <View style={styles.style3}>
                {/* Nút cho Sign In */}
                <TouchableOpacity 
                    style={[styles.buttonStyle, { backgroundColor: 'green' }]}
                    onPress={() => navigation.navigate('WelcomeScreen')} // Điều hướng đến màn hình Sign In
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                {/* Nút cho Sign Up */}
                <TouchableOpacity 
                    style={[styles.buttonStyle, { backgroundColor: 'blue', marginTop: 20 }]}
                    onPress={() => navigation.navigate('SignupScreen')} // Điều hướng đến màn hình Sign Up
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    style1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    titleText: {
        color: 'green',
        fontSize: 28, // Điều chỉnh nhẹ kích thước chữ cho hợp lý trên màn hình điện thoại
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    style2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageStyle: {
        width: 400, // Đảm bảo hình ảnh chiếm 90% chiều rộng màn hình
        height:400, // Chiều cao điều chỉnh linh hoạt theo màn hình
    },

    style3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonStyle: {
        borderRadius: 40,
        width: 240,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});
