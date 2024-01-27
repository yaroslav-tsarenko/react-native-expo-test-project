import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Image, Keyboard} from 'react-native';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";
import HomeIcon from "../../assets/icons/HomeIcon";
import CrownIcon from "../../assets/icons/CrownIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

const BottomNavButtons = ({ navigation }) => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardStatus(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardStatus(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    if (keyboardStatus) {
        return null;
    }

    return (
        <View style={styles.bottomNavContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.navButton}>
                    <HomeIcon/>
                    <PoppinsFont style={styles.bottomNavContainerButtonText} data-testid="home-button">Home</PoppinsFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navButton}>
                    <CrownIcon/>
                    <PoppinsFont style={styles.bottomNavContainerButtonTextDisabled} data-testid="leaderboard-button">Leaderboard</PoppinsFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.navButton}>
                    <SettingsIcon/>
                    <PoppinsFont style={styles.bottomNavContainerButtonTextDisabled} data-testid="settings-button">Settings</PoppinsFont>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default BottomNavButtons;
