import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Home extends Component {
    handleLogin() {
        this.props.navigation.navigate('Screen1');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Home screen</Text>
    
                <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Text>Go to Screen 1</Text>
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

export default Home;