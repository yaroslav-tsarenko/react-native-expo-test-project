import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarIcon from '../../assets/icons/StarIcon';
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";

const StarButton = () => {
    return (
        <TouchableOpacity>
            <LinearGradient
                colors={['#F8B469', '#FF876D']}
                start={{ x: 0.0634, y: 0.0417 }}
                end={{ x: 1.3147, y: 1.3132 }}
                style={styles.starButton}
            >
                <StarIcon style={styles.starIcon} />
                <PoppinsFont style={styles.starText}>954</PoppinsFont>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default StarButton;
