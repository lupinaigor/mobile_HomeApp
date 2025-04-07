import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView,
} from 'react-native';
import api from '../utils/api.ts';

const HomeScreen = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        api.getAll('products').then(prod => {
            setProducts(prod);
        });
    }, []);

    const handleBuy = (product: any) => {
        Alert.alert(
            'Інформація про товар',
            `Назва: ${product.title}\nЦіна: $${product.price}\nОпис: ${product.description}`
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Каталог товаров</Text>
            {products.map((product) => (
                <View key={product.id} style={styles.card}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleBuy(product)}
                    >
                        <Text style={styles.buttonText}>Купити</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'brown',
    },
    card: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HomeScreen;

