import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/home-screen/HomeScreen";
import WeeklyRiddlesScreen from "../screens/weekly-riddle-screen/WeeklyRiddlesScreen";

const Stack = createStackNavigator();
function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}/>
            <Stack.Screen
                name="WeeklyRiddles"
                component={WeeklyRiddlesScreen}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}
export default AppNavigator;
