import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from "../../styles/styles";
import PoppinsFont from "../poppins-font/poppins-regular/PoppinsFont";
import PoppinsFontExtraBold from "../poppins-font/poppins-extra-bold/PoppinsFontExtraBold";
import { LinearGradient } from 'expo-linear-gradient';

const QuizAnswer = () => {
    const [inputValue, setInputValue] = useState('');
    const [attempts, setAttempts] = useState(5);

    const handleSubmit = () => {
        console.log(inputValue);
        setAttempts(attempts - 1);
    };

    return (
        <View>
            <TextInput
                style={styles.inputQuizContainer}
                placeholder={"Your answer"}
                placeholderTextColor={"#5f6f89"}
                onChangeText={text => setInputValue(text)}
                value={inputValue}
            />
            <TouchableOpacity
                onPress={handleSubmit}
                disabled={attempts === 0}
            >
                <LinearGradient
                    colors={['#8FD45B', '#78C83D']}
                    style={styles.submitQuizButton}
                    start={{x: 0.1667, y: 0.0417}}
                    end={{x: 1.0146, y: 1.0146}}
                >
                    <PoppinsFontExtraBold style={styles.submitQuizButtonText}>Submit</PoppinsFontExtraBold>
                </LinearGradient>
            </TouchableOpacity>
            <PoppinsFont style={styles.quizAnswer}>
                <Text>{attempts} attempts remaining</Text>
            </PoppinsFont>
        </View>
    );
};

export default QuizAnswer;
