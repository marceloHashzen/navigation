import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Config from '../screens/Config';

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTitleStyle: {textAlign: 'center',alignSelf:'center'},
        },
    },
});

export const NotificationsStack = StackNavigator({
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            title: 'Notifications',
            headerTitleStyle: {textAlign: 'center',alignSelf:'center'},
        },
    },
});

export const ConfigStack = StackNavigator({
    Config: {
        screen: Config,
        navigationOptions: {
            title: 'Config',
            headerTitleStyle: {textAlign: 'center',alignSelf:'center'},
        },
    },
});

export const MainTabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={22} color={tintColor} />
        },
    },
    Notifications: {
        screen: NotificationsStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="bell" size={22} color={tintColor} />
        },
    },
    Config: {
        screen: ConfigStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="settings" size={22} color={tintColor} />
        },
    },
}, {
    lazyLoad: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        style: {
            backgroundColor: '#ffffff',
        },
        indicatorStyle: {
            backgroundColor: 'transparent',
        },
        labelStyle: {
            color: '#000000',
        },
        activeTintColor: '#548ECB',
        inactiveTintColor: '#666666',
        showLabel: false,
        showIcon: true,
    },                                                       
});

export const AppNavigator = (signedIn = false) => {
    return StackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login',
            },
        },
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                title: 'Welcome',
            },
        },
        Main: {
            screen: MainTabs,
            navigationOptions: {
                gesturesEnabled: false
            },
        },
    },
    {
        headerMode: 'none',
        initialRouteName: signedIn ? "Main" : "Login"
    });
}