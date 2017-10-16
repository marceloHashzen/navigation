import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Home extends Component {
    handleLogin(module) {
        this.props.navigation.navigate(module);
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Home screen</Text>
    
                <TouchableOpacity onPress={() => this.handleLogin('Module1')}>
                    <Text>Go to Module 1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleLogin('Module2')}>
                    <Text>Go to Module 2</Text>
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