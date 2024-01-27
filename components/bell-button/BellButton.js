import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";
import BellIcon from "../../assets/icons/BellIcon";

const BellButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.bellButton}>
                <LinearGradient
                    colors={['#E75AC8', '#FF708A']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.4774, y: 1.4774 }}
                    style={styles.bellButtonNotifications}
                >
                    <PoppinsFont style={styles.bellButtonText}>2</PoppinsFont>
                </LinearGradient>
                <BellIcon/>
            </View>
        </TouchableOpacity>
    );
};

export default BellButton;
