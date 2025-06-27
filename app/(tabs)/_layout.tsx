import { Tabs } from 'expo-router';
import { CalendarDays, ListTodo, Pill, AlertCircle, PlusCircle } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
        },
        headerShown: false,
      }}
    >
      {/**Navigation -------------------------------------------------------------------------- */}
      
      <Tabs.Screen
        name="schema"
        options={{
          title: 'Schema',
          tabBarIcon: ({ color, size }) => <CalendarDays color={color} size={size} />,
        }}
      />
      {/* Vänster om + */}
      <Tabs.Screen
        name="dagligaRutiner"
        options={{
          title: 'Dagens rutin',
          tabBarIcon: ({ color, size }) => <ListTodo color={color} size={size} />,
        }}
      />


      {/* + Lägg till i mitten */}
      <Tabs.Screen
        name="läggTill"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <PlusCircle color="#007AFF" size={36} />
          ),
          tabBarLabelStyle: { display: 'none' },
        }}
      />

      {/* Höger om + */}
      <Tabs.Screen
        name="medicin"
        options={{
          title: 'Mediciner',
          tabBarIcon: ({ color, size }) => <Pill color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="viktigt"
        options={{
          title: 'Viktiga tider',
          tabBarIcon: ({ color, size }) => <AlertCircle color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
