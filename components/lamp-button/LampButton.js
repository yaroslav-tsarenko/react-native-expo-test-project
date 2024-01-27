import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";
import LampIcon from "../../assets/icons/LampIcon";

const LampButton = () => {
    return (
        <TouchableOpacity data-testid="lamp-button">
            <View style={styles.lampButton}>
                <LinearGradient
                    colors={['#7DCB44', '#6DBC33']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.4774, y: 1.4774 }}
                    style={styles.lampButtonNotifications}
                >
                    <PoppinsFont style={styles.lampButtonText}>5</PoppinsFont>
                </LinearGradient>
                <LampIcon data-testid="lamp-icon"/>
            </View>
        </TouchableOpacity>
    );
};
export default LampButton;
