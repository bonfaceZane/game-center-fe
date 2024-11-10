import { Tabs } from 'expo-router'
import React from 'react'

import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { SymbolView } from 'expo-symbols'
import type { title } from 'process'

export default function TabLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}
            initialRouteName="play"
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'play',
                    tabBarIcon: ({ color, focused }) => (
                        <SymbolView name="livephoto.play" tintColor={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="players"
                options={{
                    title: 'players',
                    tabBarIcon: ({ color, focused }) => (
                        <SymbolView
                            name="person.2.crop.square.stack"
                            tintColor={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="results"
                options={{
                    title: 'results',
                    tabBarIcon: ({ color, focused }) => (
                        <SymbolView name="sum" tintColor={color} />
                    ),
                }}
            />
        </Tabs>
    )
}
