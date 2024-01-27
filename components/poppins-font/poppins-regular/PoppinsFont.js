import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-Regular',
    },
});

const PoppinsFont = (props) => {
    return (
        <Text style={[styles.text, props.style]}>
            {props.children}
        </Text>
    );
};

export default PoppinsFont;
