import React, { useState } from 'react'; 
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductScreen = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const price = 2.99;

    const gridItems = [
        { id: 1, image: require('../assets/DATA/Container 7 (3).png') },
        { id: 2, image: require('../assets/DATA/Image 7 (2).png')},
        { id: 3, image: require('../assets/DATA/Image 7 (1).png')},
        { id: 4, image: require('../assets/DATA/Image 7 (4).png')},
        { id: 5, image: require('../assets/DATA/Image 7.png')},
    ];

    const handleItemPress = (id) => {
        setSelectedItem(id);
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);    
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const renderGridItem = (item) => {
        const isSelected = selectedItem === item.id;
        return (
            <TouchableOpacity
                key={item.id}
                style={[styles.gridItem, isSelected && styles.selectedGridItem]}
                onPress={() => handleItemPress(item.id)}
            >
                <Image source={item.image} style={styles.gridItemImage}/>
            </TouchableOpacity>
        );
    };

    const total = (price * quantity).toFixed(2);
    
    return (
        <View style={styles.container}>
            <View style = {styles.productContainer}>
                <View style = {styles.gridContainer}>
                    <TouchableOpacity key = {gridItems[0].id} style = {styles.gridItemLarge}>
                       <Image source={gridItems[0].image} style={styles.gridItemImageLarge}/>
                    </TouchableOpacity>

                    <View style={styles.smallGridContainer}>
                        {gridItems.slice(1).map(renderGridItem)}
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>${price.toFixed(2)}</Text>
                    <Text style={styles.offerText}>Buy 1 get 1</Text>
                </View>

                <View style = {styles.productDetailsContainer}>
                    <Text style = {styles.productTitle}>Product Name</Text>
                    <Text style = {styles.productSubtitle}>Occaecat est deserunt tempor offici</Text>
                    <View style = {styles.ratingContainer}>
                        <Image
                            source={require('../assets/DATA/Rating 3.png')}
                            style ={styles.starIcon}
                        />
                        <Text style={styles.ratingText}>4.5</Text>
                    </View>
                </View>

                <Text style={[styles.sectionTitle, {fontSize:20}]}>Size</Text>
                <View style={styles.sizeContainer}>
                    {['XS','S','M','L','XL'].map((size,index) => (
                        <TouchableOpacity
                           key={index}
                           style={[styles.sizeButton, size === 'XS' && styles.xsSizeButton, size === 'XL' && styles.xlSizeButton, selectedItem === size && styles.selectedSizeButton]}
                           onPress={() => setSelectedItem(size)}
                        >
                           <Text style={styles.sizeButtonText}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={[styles.sectionTitle, {fontSize:20}]}>Quantity</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                        <FontAwesome name="minus-square" size={30} color="#333"/>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                        <FontAwesome name="plus-circle" size={30} color="#333"/>
                    </TouchableOpacity>
                    <Text style={styles.totalText}>Total: </Text>
                    <Text style={[styles.totalAmount, {fontSize:22}]}>${total}</Text>
                </View>

                <View style={styles.sizeguidecontainer}>
                    <TouchableOpacity style={styles.sizeguidelink}>
                        <Text style={[styles.sizeguideText, {fontSize:20,fontWeight:'bold'}]}>Size guide</Text>
                    </TouchableOpacity>
                    <FontAwesome name='chevron-right' size={16} color="#aaa" style={styles.arrowIconsizeguide} />
                </View>

                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.reviewsLink}>
                        <Text style={[styles.reviewsText, {fontSize:20,fontWeight:'bold'}]}>Reviews (99)</Text>
                    </TouchableOpacity>
                    <FontAwesome name='chevron-right' size={16} color="#aaa" style={styles.arrowIcon}/>
                </View>

                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: '#bababa',
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        width: '100%',
    },
    reviewsLink:{
        padding: 10,
        width: '97%',
    },
    reviewsText:{
        fontSize: 16,
        color: '#5c5d5e',
        marginLeft: '-5%',
    },
    arrowIcon:{
        marginRight: 10,
    },
    sizeguidecontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: '-5%',
    },
    sizeguidelink:{
        padding: 10,
        width: '97%',
    },
    sizeguideText:{
        fontSize: 16,
        color: '#5c5d5e',
        marginLeft: '-5%',
    },
    arrowIconsizeguide:{
        marginRight: 10,
    },
    productContainer:{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'flex-start',
        width: '100%',
    },
    productTitle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    productSubtitle:{
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    ratingContainer:{
        position: 'absolute',
        left: '133%',
        top: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },
    starIcon:{
        width: 20,
        height: 20,
        marginRight: 5,
    },
    ratingText:{
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    priceContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    priceText:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00bdd6',
        marginRight: 10,
    },
    offerText:{
        fontSize: 14,
        color: '#ff6347',
        fontWeight: 'bold',
    },
    sizeContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        width: '70%',
    },
    sizeButton:{
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
    },
    xsSizeButton:{
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    xlSizeButton:{
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
    },
    selectedSizeButton: {
        borderColor: '#00bfff',
        borderWidth: 2,
    },
    sizeButtonText:{
        fontSize: 14,
    },
    quantityContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    quantityButton:{
        padding: 10,
    },
    quantityText:{
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    totalText:{
        position: 'absolute',
        left: '72%',
        fontSize: 16,
        color: '#333',
    },
    totalAmount:{
        position: 'absolute',
        left: '83%',
        fontWeight: 'bold',
        color: '#333',
    },
    addToCartButton:{
        backgroundColor: '#00bdd6',
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 6,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToCartButtonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    gridContainer:{
        width: '100%',
        marginTop: -19,
    },
    gridItemLarge:{
        display: 'flex',
        width: '100%',
        height: 210,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    gridItemImageLarge:{
        width: '100%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    smallGridContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
    },
    gridItem:{
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
    selectedGridItem:{
        borderColor: '#00bfff',
        borderWidth: 2,
    },
    gridItemImage:{
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },
});
export default ProductScreen;