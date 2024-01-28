import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import styles from "../../../styles/styles";
import StarButton from "../../star-button/StarButton";
import BellButton from "../../bell-button/BellButton";
import LampButton from "../../lamp-button/LampButton";
import BottomNavButtons from "../../bottom-navigation/BottomNavButtons";
import RiddleChallengesButton from "../../riddles-challenges-button/RiddleChallengesButton";
import RiddleChallengesDescription from "../../riddle-challenges-description/RiddleChallengesDescription";
import QuizAnswer from "../../quiz-answer/QuizAnswer";

const loadFonts = () => {
    return Font.loadAsync({
        'Poppins-Regular': require('@assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-ExtraBold': require('@assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    });
};

export default function WeeklyRiddlesScreen({ navigation }) {
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
        >
            <View style={styles.headerButtons}>
                <StarButton/>
                <View style={styles.notificationContainer}>
                    <BellButton/>
                    <LampButton/>
                </View>
            </View>
            <View style={styles.weeklyRiddlesChallengesButtonsContainer}>
                <RiddleChallengesButton text={"Weekly"} defaultActive={true}/>
                <RiddleChallengesButton text={"3 days"}/>
                <RiddleChallengesButton text={"1 day"}/>
                <RiddleChallengesButton text={"Special"}/>
            </View>
            <RiddleChallengesDescription/>
            <QuizAnswer/>
            <BottomNavButtons navigation={navigation} />
            <StatusBar style="auto"/>
        </LinearGradient>
    );
}
