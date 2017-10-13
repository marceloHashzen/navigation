import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';

class Welcome extends Component {
    constructor(props){
        super(props);
    }

    // componentDidMount() {
    //     BackHandler.addEventListener('backPress', () => {
    //         console.log("back press");
    //         const { dispatch, nav } = this.props;
    //         // if (shouldCloseApp(nav)) 
    //         //     return false;
    //         // dispatch({ type: 'Back' });
    //         // return true;
    //         dispatch({ type: 'Back' });
    //         return true;
    //     });
    // }

    handleNavigation() {
        this.props.navigation.navigate('Main');
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