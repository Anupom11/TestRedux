//App.js
import { Provider } from "react-redux";
import {store} from "./redux/Store";

import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./screens/Home";
import Details from "./screens/Details";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="Home">
          <stack.Screen name="Home" component={Home}  />
          <stack.Screen name="Details" component={Details}  />
        </stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

