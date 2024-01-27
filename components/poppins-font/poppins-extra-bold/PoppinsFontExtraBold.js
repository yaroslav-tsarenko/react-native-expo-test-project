import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-ExtraBold',
    },
});

const PoppinsFontExtraBold = (props) => {
    return (
        <Text style={[styles.text, props.style]} data-testid="poppins-font-extra-bold">
            {props.children}
        </Text>
    );
};

export default PoppinsFontExtraBold;
