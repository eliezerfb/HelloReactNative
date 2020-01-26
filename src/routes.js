import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import Main from './pages/main';
import Product from './pages/product';


export default createAppContainer(
    createStackNavigator({
        Main,
        Product
    },{
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: "#FF0000",
            },
            headerTintColor: "#FFF",
            headerTitleAlign: 'center'
        },
    })
);