import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#5614B0", "#5614B0", "#DBD65C"],
        title: "Thunderstorm",
        subtitle: "It's a good day, you will have a good day"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Drizzle",
        subtitle: "It's a good day, you will have a good day"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Rain",
        subtitle: "It's a good day, you will have a good day"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#000046", "#1CB5E0"],
        title: "Snow",
        subtitle: "It's a good day, you will have a good day"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#000C40", "#F0F2F0"],
        title: "Atmosphere",
        subtitle: "It's a good day, you will have a good day"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fc4a1a", "#f7b733"],
        title: "Clear",
        subtitle: "It's a good day, you will have a good day"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#0083B0", "#00B4DB"],
        title: "Clouds",
        subtitle: "It's a good day, you will have a good day"
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        color: "white",
        fontSize: 42
    },
    title: {
        fontSize: 44,
        fontWeight: "300",
        color: "white",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})