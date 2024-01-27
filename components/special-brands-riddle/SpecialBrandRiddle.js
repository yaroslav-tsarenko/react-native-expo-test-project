import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";
import PoppinsFontExtraBold from "../poppins-font/poppins-extra-bold/PoppinsFontExtraBold";
import {LinearGradient} from "expo-linear-gradient";

export default function SpecialBrandRiddle({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('WeeklyRiddles')} testID="special-brand-riddle">
            <LinearGradient
                colors={['#F1F3FF', '#E7E9F8']}
                start={{x: 0.1838, y: 0}}
                end={{x: 1.0413, y: 0}}
                style={styles.specialBrandRiddleContainer}>
                <View style={styles.weeklyDescription}>
                    <PoppinsFontExtraBold style={styles.specialRiddlesMainTitle}>Special Brand
                        Riddles</PoppinsFontExtraBold>
                    <PoppinsFont style={styles.specialRiddleSubTitle}>Riddles related with popular brands such
                        as</PoppinsFont>
                    <View style={styles.iconsSpecialBrandContainer}>
                        <Image style={styles.iconsSpecialBrand}
                               source={require('../../assets/images/nike-icon.png')}
                               testID="nike-icon"/>

                        <Image style={styles.iconsSpecialBrand}
                               source={require('../../assets/images/mac-icon.png')}
                               testID="mac-icon"/>
                        <Image style={styles.iconsSpecialBrand}
                               source={require('../../assets/images/lego-icon.png')}
                               testID="lego-icon"/>
                    </View>
                </View>
                <Image style={styles.specialBrandGiftImage} source={require('../../assets/images/gift.png')}/>
                <Image style={styles.specialBrandBrandingImage}
                       source={require('../../assets/images/branding-hd.png')}/>
            </LinearGradient>
        </TouchableOpacity>
    );
};
