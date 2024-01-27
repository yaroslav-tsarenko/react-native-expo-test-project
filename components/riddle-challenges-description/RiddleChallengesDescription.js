import React from 'react';
import {View} from "react-native";
import PoppinsFontExtraBold from "../poppins-font/poppins-extra-bold/PoppinsFontExtraBold";
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import styles from "../../styles/styles";

const RiddleChallengesDescription = () => {
    return (
        <View style={styles.riddleChallengesDescription}>
            <PoppinsFontExtraBold style={styles.riddleChallengesDescriptionMainTitle}>Weekly Riddles</PoppinsFontExtraBold>
            <PoppinsFont style={styles.riddleChallengesDescriptionText}>I can add to several hundred. But can’t subtract multiply or divide. Whatever I add to, it’s always in front of you but never behind. And the number I add to You can’t really hide!</PoppinsFont>
            <PoppinsFontExtraBold style={styles.riddleChallengesDescriptionSubTitle}>Who am i?</PoppinsFontExtraBold>
        </View>
    );
};

export default RiddleChallengesDescription;
