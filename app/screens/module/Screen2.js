import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Screen2 = () => {
    return (
        <View style={styles.main}>
            <Text>Module Screen 2</Text>
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

export default Screen2;