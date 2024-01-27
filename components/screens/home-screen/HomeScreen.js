import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import styles from "../../../styles/styles";
import StarButton from "../../star-button/StarButton";
import BellButton from "../../bell-button/BellButton";
import LampButton from "../../lamp-button/LampButton";
import WeeklyRiddle from "../../weekly-riddle-container/WeeklyRiddle";
import ThreeDaysRiddle from "../../three-days-riddle/ThreeDaysRiddle";
import OneDayRiddle from "../../one-day-riddle/OneDayRiddle";
import SpecialBrandRiddle from "../../special-brands-riddle/SpecialBrandRiddle";
import BottomNavButtons from "../../bottom-navigation/BottomNavButtons";

const loadFonts = () => {
    return Font.loadAsync({
        'Poppins-Regular': require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-ExtraBold': require('../../../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    });
};

export default function HomeScreen({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts()
            .then(() => setFontsLoaded(true))
            .catch(console.warn);
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <LinearGradient
            colors={['#F0F2FF', '#E7EBFF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.container}
            testID="linear-gradient"
        >
            <View style={styles.headerButtons}>
                <StarButton/>
                <View style={styles.notificationContainer}>
                    <BellButton/>
                    <LampButton/>
                </View>
            </View>
            <WeeklyRiddle navigation={navigation} />
            <View style={styles.daysRiddlesProposalContainer}>
                <ThreeDaysRiddle navigation={navigation}/>
                <OneDayRiddle navigation={navigation}/>
            </View>
            <SpecialBrandRiddle navigation={navigation}/>
            <BottomNavButtons navigation={navigation} />
            <StatusBar style="auto"/>
        </LinearGradient>
    );
}
