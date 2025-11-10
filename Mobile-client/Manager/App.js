import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SportsScreen from './screens/SportsScreen';
import TeamsScreen from './screens/TeamsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sports'>
        <Stack.Screen name="Sports" component={SportsScreen} />
        <Stack.Screen name="Teams" component={TeamsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
