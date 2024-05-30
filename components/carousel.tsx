import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Animated } from 'react-native';
import CarouselItem from './carouselItem';
import Paginator from './paginator';
import slides from './slides';
import NextButton from './nextButton';

interface prop {
  // prop halaman
}

const Carousel: React.FC<prop> = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [ currentIdx, setCurrentIdx ] = useState(0);

  const pgRef = useRef(null);

  const onChangeView = useRef(({ viewableItems }) => {
    setCurrentIdx(viewableItems[0].index);
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const scrollTo = () => {
    if (currentIdx < slides.length - 1){
      pgRef.current.scrollToIndex({ index: currentIdx + 1 });
    } else {
      // end of slides
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 3}}>
        <FlatList 
          data={slides} 
          renderItem={({ item }) => <CarouselItem item={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ 
            nativeEvent: { contentOffset: { x: scrollX } } 
          }], { useNativeDriver: false })}
          onViewableItemsChanged={onChangeView}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={pgRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton scrollTo={scrollTo} />
    </View>
  );
};

export default Carousel;