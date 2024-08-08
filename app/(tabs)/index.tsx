import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { AnimatePresence, Text, View } from 'tamagui';

export default function Index() {
  const [key, setKey] = useState(0);
  console.log('Re-rendered triggered ===>');

  useFocusEffect(
    useCallback(() => {
      setKey((prevKey) => prevKey + 1); // Trigger re-render

      return () => {
        // Cleanup function if needed when the screen loses focus
      };
    }, [])
  );

  return (
    <View key={key}>
      <AnimatePresence>
        <View
          animation={[
            'slow',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -200, opacity: 0, scale: 0.8 }}
          exitStyle={{ x: 0, y: 100, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          bg={'red'}
          height={600}
        >
          <Text>Index</Text>
        </View>
      </AnimatePresence>
    </View>
  );
}
