import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllBooks from '../screens/AllBooks';
import Reading from '../screens/Reading';
import Completed from '../screens/Completed';
import Wishlist from '../screens/Wishlist';
import { Provider } from 'react-redux';
import store from '../redux/store';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='AllBooks' component={AllBooks} />
                    <Stack.Screen name='Reading' component={Reading} />
                    <Stack.Screen name='Completed' component={Completed} />
                    <Stack.Screen name='Wishlist' component={Wishlist} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
