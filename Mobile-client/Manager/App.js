import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SportsScreen from './screens/SportsScreen';
import TeamsScreen from './screens/TeamsScreen';
import ManagerScreen from './screens/ManagerScreen'
import CoacesScreen from './screens/CoachesScreen'
import PlayersPerCoachScreen from './screens/PlayerPerCoachScreen'
import PlayerInfoScreen from './screens/PlayerInfoScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sports'>
        <Stack.Screen name="Sports" component={SportsScreen} />
        <Stack.Screen name="Choices" component={ManagerScreen}/>
        <Stack.Screen name="Coaches" component={CoacesScreen}/>
        <Stack.Screen name="Teams" component={TeamsScreen} />
        <Stack.Screen name="PlayersPerCoach" component={PlayersPerCoachScreen} />
        <Stack.Screen name="PlayerInfo" component={PlayerInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
