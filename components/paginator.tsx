import React from 'react';
import { View, StyleSheet, ImageSourcePropType, Animated, useWindowDimensions } from 'react-native';

interface prop {
    data: Array<{
        id: string;
        text1: string;
        text2: string;
        text3: string;
        imGroup: ImageSourcePropType;
        imScreenshot: ImageSourcePropType;
        imElements: ImageSourcePropType;
        imBg: ImageSourcePropType;
    }>;
    scrollX: Animated.Value;
}

const { width } = useWindowDimensions();

const Paginator: React.FC<prop> = ({ data, scrollX }) => {
  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp'
        });
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
        });

        return <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()} />;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
    dot: {
      height: 10,
      borderRadius: 5,
      backgroundColor: "#493d8a",
      marginHorizontal: 8
    },
  });
  