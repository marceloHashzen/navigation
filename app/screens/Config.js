import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Config = () => {
    return (
        <View style={styles.main}>
            <Text>Config screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Config;