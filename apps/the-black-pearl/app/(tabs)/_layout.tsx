import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SymbolView } from 'expo-symbols';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="play"
        options={{
          title: 'play',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView name="livephoto.play" />
          ),
        }}
      />
      <Tabs.Screen
        name="players"
        options={{
          title: 'players',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView name="person.2.crop.square.stack" />
          ),
        }}
      />
    </Tabs>
  );
}
