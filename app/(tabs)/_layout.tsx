import { Tabs } from 'expo-router';
import { useTheme } from 'tamagui';

// export const Tab = createBottomTabNavigator();

// const KlzTab = withLayoutContext<
//   BottomTabNavigationOptions,
//   typeof Tab.Navigator,
//   NavigationState<ParamListBase>,
//   BottomTabNavigationEventMap
// >(Tab.Navigator);

export default function TabLayout() {
  const theme = useTheme();

  return <Tabs />;
}
