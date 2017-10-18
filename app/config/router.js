import React from 'react';
import { Text, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { NavigationActions } from 'react-navigation';

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Config from '../screens/Config';
import Screen1 from '../screens/module1/Screen1';
import Screen2 from '../screens/module1/Screen2';
import Screen3 from '../screens/module2/Screen3';
import Screen4 from '../screens/module2/Screen4';

export const HomeScreen = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTitleStyle: {textAlign: 'center',alignSelf:'center'},
        },
    },
});

export const Module1Stack = StackNavigator({
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
});

export const Module2Stack = StackNavigator({
    Screen3: {
        screen: Screen3,
        navigationOptions: {
            title: 'Screen 3',
            headerTitleStyle: {textAlign: 'center', alignSelf:'center'},
        },
    },
    Screen4: {
        screen: Screen4,
        navigationOptions: {
            title: 'Screen 4',
            headerTitleStyle: {textAlign: 'center', alignSelf:'center'},
        },
    },
});

export const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Module1: {
        screen: Module1Stack,
    },
    Module2: {
        screen: Module2Stack,
    },
},
{
    headerMode: 'none',
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
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={22} color={tintColor} />,
            tabBarOnPress: (tab, jumpToIndex) => {
                navigation.navigate('Home');
            },
        }),
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