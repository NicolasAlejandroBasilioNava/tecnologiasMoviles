import { View, StyleSheet, Image } from "react-native";

const Therapist = ({image, name, job, rate}) => (
    <View style={styles.container}>
        <Image source={{
            uri: {image}
            
        }}
        style={styles.image}
        />
        <View style={styles.therapistInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.grayText}>{job}</Text>
        </View>
        <View style={styles.therapistRate}>
            //Icono name={rate>4? 'star' : 'staro'}
            <Text style={styles.grayText}>{rate.toFixed(1)}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container:{
        borderContainer: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 10,
    },
    image:{
        height:40,
        width:40,
        borderRadius: 50,
    }, 
    therapistInfo:{

    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',

    },
    grayText:{
        color: '',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 8,
    },
    therapistRate:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
})

export default Therapist