import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



import Main from './pages/Main';

const Routes = createAppContainer(
    createStackNavigator({
        Main
    },{
        headerTitleAlign:'center',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: '#f5f5f5'
            }
        }
    })
);

export default Routes;