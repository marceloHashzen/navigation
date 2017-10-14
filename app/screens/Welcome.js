import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Welcome extends Component {
    constructor(props){
        super(props);
    }

    handleNavigation() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Main' }),
            ],
        });

        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Welcome screen</Text>

                <TouchableOpacity onPress={() => this.handleNavigation()}>
                    <Text>Click to continue</Text>
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

export default Welcome;