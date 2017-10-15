import React from 'react';
import { Text, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Config from '../screens/Config';
import Screen1 from '../screens/module/Screen1';
import Screen2 from '../screens/module/Screen2';

export const ModuleStack = StackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: {
            title: 'Screen 1',
            headerTitleStyle: {textAlign: 'center', alignSelf:'center'},
        },
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            title: 'Screen 2',
            headerTitleStyle: {textAlign: 'center', alignSelf:'center'},
        },
    },
},
{
    headerMode: 'none',
});

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTitleStyle: {textAlign: 'center',alignSelf:'center'},
        },
    },
    Module: {
        screen: ModuleStack,
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