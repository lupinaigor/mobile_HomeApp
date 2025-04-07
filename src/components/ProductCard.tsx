import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image }) => {
    const handleBuy = () => {
        Alert.alert("Информация о товаре", `${title}\nЦена: $${price}`);
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={2} style={styles.description}>{description}</Text>
            <Text style={styles.price}>${price}</Text>
            <Button title="Купить" onPress={handleBuy} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 10,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        marginVertical: 5
    }
});

export default ProductCard;
