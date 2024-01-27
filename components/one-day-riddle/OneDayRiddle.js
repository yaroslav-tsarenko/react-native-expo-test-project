import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";
import PoppinsFontExtraBold from "../poppins-font/poppins-extra-bold/PoppinsFontExtraBold";
import {LinearGradient} from "expo-linear-gradient";

export default function OneDayRiddle({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('WeeklyRiddles')} data-testid="one-day-riddle">
            <LinearGradient
                colors={['#F1F3FF', '#E7E9F8']}
                start={{ x: 0.1838, y: 0 }}
                end={{ x: 1.0413, y: 0 }}
                style={styles.expRiddleContainer}>
                <View style={styles.weeklyDescription}>
                    <PoppinsFontExtraBold style={styles.expDaysRiddleMainTitle}>1 Day Exp.Riddles</PoppinsFontExtraBold>
                    <PoppinsFont style={styles.expDaysRiddleSubTitle}>1 day for solving</PoppinsFont>
                </View>
                <Image style={styles.expRiddleImageMask} source={require('../../assets/images/purple-mask.png')} />
                <Image style={styles.expRiddleOneImageContainer} source={require('../../assets/images/one-image.png')} />
            </LinearGradient>
        </TouchableOpacity>
    );
};

