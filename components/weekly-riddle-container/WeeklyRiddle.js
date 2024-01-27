import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";
import PoppinsFontExtraBold from "../poppins-font/poppins-extra-bold/PoppinsFontExtraBold";
import {LinearGradient} from "expo-linear-gradient";

export default function WeeklyRiddle({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('WeeklyRiddles')}>
            <LinearGradient
                colors={['#F1F3FF', '#E7E9F8']}
                start={{ x: 0.1838, y: 0 }}
                end={{ x: 1.0413, y: 0 }}
                style={styles.weeklyRiddleContainer}>
                <View style={styles.weeklyDescription}>
                    <PoppinsFontExtraBold style={styles.weeklyRiddleMainTitle}>Weekly Riddle</PoppinsFontExtraBold>
                    <PoppinsFont style={styles.weeklyRiddleSubTitle}>Riddles you need to solve weekly</PoppinsFont>
                </View>
                <Image style={styles.weeklyRiddleImageMask} source={require('../../assets/images/scattering-ellipse.png')} />
                <Image style={styles.weeklyRiddleImageContainer} source={require('../../assets/images/questions-image.png')} />
            </LinearGradient>
        </TouchableOpacity>
    );
};
