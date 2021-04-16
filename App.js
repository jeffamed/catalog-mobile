import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const App = () => {
    return (
    <View style = {styles.main} >
        <View style = {styles.header} >
            <Text>Botones de bsuqueda y agregacion</Text> 
        </View> 
        <View>
            <Text style={styles.title}>Marieth Cosmetic</Text> 
            <View style={styles.gallery}>
                <Image source={require('./android/assets/img/img1.jpg')} />
                <Text style={styles.nameProduct}>Producto Nuevo Numero #2</Text>
                <Text style={styles.price}>C$ 1,250.00</Text>
            </View>
        </View>  
    </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
    },
    header: {
        paddingVertical: 15,
        backgroundColor: 'red',
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,

    },
    nameProduct:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    price:{
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "green"
    },
    gallery:{
        borderColor: ReadableStream,
        borderWidth: 1,
        width: 100,
        height: 50
    }
});

export default App;