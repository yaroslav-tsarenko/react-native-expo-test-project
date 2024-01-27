import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "../../styles/styles";

const RiddleChallengesButton = ({ text, defaultActive }) => {
    const [isActive, setIsActive] = useState(defaultActive);

    const handlePress = () => {
        setIsActive(!isActive);
    };

    return (
        <TouchableOpacity
            style={isActive ? styles.riddleChallengesButtonActive : styles.riddleChallengesButton}
            onPress={handlePress}
        >
            <Text style={isActive ? styles.riddleChallengesButtonTextActive : styles.riddleChallengesButtonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default RiddleChallengesButton;
