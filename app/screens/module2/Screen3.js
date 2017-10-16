import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Screen3 extends Component {
    handleLogin() {
        this.props.navigation.navigate('Screen4');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Module Screen 3</Text>

                <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Text>Go to Screen 4</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Screen3;