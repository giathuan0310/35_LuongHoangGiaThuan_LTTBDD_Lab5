import React, { useState } from 'react'; 
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Icon từ thư viện FontAwesome

const ProductScreen = () => {
    const [selectedItem, setSelectedItem] = useState(null); // Quản lý mục hình ảnh nhỏ được chọn
    const [quantity, setQuantity] = useState(1); // Quản lý số lượng sản phẩm
    const price = 2.99; // Giá sản phẩm cố định

    // Danh sách các mục sản phẩm, mỗi mục chứa hình ảnh
    const gridItems = [
        { id: 1, image: require('../assets/DATA/Container7(3).png') }, 
        { id: 2, image: require('../assets/DATA/Image7(2).png')},
        { id: 3, image: require('../assets/DATA/Image7(1).png')},
        { id: 4, image: require('../assets/DATA/Image7(4).png')},
        { id: 5, image: require('../assets/DATA/Image7.png')},
    ];

    // Xử lý khi chọn vào một hình ảnh nhỏ
    const handleItemPress = (id) => {
        setSelectedItem(id); // Cập nhật mục đã chọn
    };

    // Tăng số lượng sản phẩm
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);    
    };

    // Giảm số lượng sản phẩm, không giảm dưới 1
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    // Hiển thị từng mục trong lưới hình ảnh nhỏ
    const renderGridItem = (item) => {
        const isSelected = selectedItem === item.id; // Kiểm tra nếu mục được chọn
        return (
            <TouchableOpacity
                key={item.id}
                style={[styles.gridItem, isSelected && styles.selectedGridItem]} // Thêm style cho mục được chọn
                onPress={() => handleItemPress(item.id)} // Gọi khi người dùng nhấn
            >
                <Image source={item.image} style={styles.gridItemImage}/> {/* Hình ảnh nhỏ của mục */}
            </TouchableOpacity>
        );
    };

    const total = (price * quantity).toFixed(2); // Tính tổng tiền dựa trên số lượng

    return (
        <View style={styles.container}>
            <View style = {styles.productContainer}>
                {/* Lưới chứa hình ảnh lớn và các hình ảnh nhỏ */}
                <View style = {styles.gridContainer}>
                    <TouchableOpacity key = {gridItems[0].id} style = {styles.gridItemLarge}>
                       <Image source={gridItems[0].image} style={styles.gridItemImageLarge}/> {/* Hình ảnh sản phẩm lớn */}
                    </TouchableOpacity>

                    {/* Lưới chứa các hình ảnh nhỏ */}
                    <View style={styles.smallGridContainer}>
                        {gridItems.slice(1).map(renderGridItem)} {/* Hiển thị các hình ảnh nhỏ */}
                    </View>
                </View>

                {/* Hiển thị giá và khuyến mãi */}
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>${price.toFixed(2)}</Text> {/* Giá sản phẩm */}
                    <Text style={styles.offerText}>Buy 1 get 1</Text> {/* Khuyến mãi */}
                </View>

                {/* Hiển thị thông tin sản phẩm */}
                <View style={styles.productDetailsContainer}>
                    <Text style={styles.productTitle}>Product Name</Text> {/* Tên sản phẩm */}
                    <Text style={styles.productSubtitle}>Occaecat est deserunt tempor offici</Text> {/* Mô tả ngắn */}
                    <View style={styles.ratingContainer}>
                        <Image
                            source={require('../assets/DATA/Rating3.png')}
                            style ={styles.starIcon}
                        />
                        <Text style={styles.ratingText}>4.5</Text> {/* Đánh giá sản phẩm */}
                    </View>
                </View>

                {/* Phần lựa chọn kích thước sản phẩm */}
                <Text style={[styles.sectionTitle, {fontSize:20}]}>Size</Text>
                <View style={styles.sizeContainer}>
                    {['XS','S','M','L','XL'].map((size,index) => (
                        <TouchableOpacity
                           key={index}
                           style={[
                              styles.sizeButton,
                              size === 'XS' && styles.xsSizeButton,
                              size === 'XL' && styles.xlSizeButton,
                              selectedItem === size && styles.selectedSizeButton
                           ]} // Cập nhật giao diện cho nút kích thước được chọn
                           onPress={() => setSelectedItem(size)} // Cập nhật kích thước được chọn
                        >
                           <Text style={styles.sizeButtonText}>{size}</Text> {/* Hiển thị tên kích thước */}
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Phần chọn số lượng sản phẩm */}
                <Text style={[styles.sectionTitle, {fontSize:20}]}>Quantity</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                        <FontAwesome name="minus-square" size={30} color="#333"/> {/* Nút giảm số lượng */}
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text> {/* Hiển thị số lượng */}
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                        <FontAwesome name="plus-circle" size={30} color="#333"/> {/* Nút tăng số lượng */}
                    </TouchableOpacity>
                    <Text style={styles.totalText}>Total: </Text> {/* Tổng tiền */}
                    <Text style={[styles.totalAmount, {fontSize:22}]}>${total}</Text> {/* Hiển thị tổng tiền */}
                </View>

                {/* Link đến hướng dẫn chọn kích thước */}
                <View style={styles.sizeguidecontainer}>
                    <TouchableOpacity style={styles.sizeguidelink}>
                        <Text style={[styles.sizeguideText, {fontSize:20,fontWeight:'bold'}]}>Size guide</Text>
                    </TouchableOpacity>
                    <FontAwesome name='chevron-right' size={16} color="#aaa" style={styles.arrowIconsizeguide} /> {/* Mũi tên hướng dẫn kích thước */}
                </View>

                
            </View>
        </View>
    );
};

// Các kiểu dáng (styles) cho giao diện
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#bababa',
    },
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'flex-start',
        width: '100%',
    },
    gridContainer: {
        width: '100%',
        marginTop: -19,
    },
    gridItemLarge: {
        display: 'flex',
        width: '100%',
        height: 210,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    gridItemImageLarge: {
        width: '100%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    smallGridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '23%',
        height: 80,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedGridItem: {
        borderColor: '#00bfff',
        borderWidth: 2,
    },
    gridItemImage: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    priceText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00bdd6',
        marginRight: 10,
    },
    offerText: {
        fontSize: 14,
        color: '#ff6347',
        fontWeight: 'bold',
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productSubtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    ratingContainer: {
        position: 'absolute',
        left: '133%',
        top: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },
    starIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    sizeButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: '18%',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selectedSizeButton: {
        borderColor: '#00bfff',
        borderWidth: 2,
    },
    sizeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityButton: {
        padding: 10,
    },
    quantityText: {
        fontSize: 24,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 18,
        marginLeft: 50,
        color: '#777',
    },
    totalAmount: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00bdd6',
    },
    sizeguidecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sizeguideText: {
        color: '#00bfff',
    },
    arrowIconsizeguide: {
        marginLeft: 5,
    },
});

export default ProductScreen;
