import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

/**
 * Definition of props coming in:
 * initialMilliseconds -- Specifies the initial time to count down from in ms.
 * onExpire -- callback that gets called when the timer finishes.
 */
const Countdown = ({initialMilliseconds, onExpire}) => {
  const [millisecondsRemaining, setMillisecondsRemaining] =
    useState(initialMilliseconds);
  const intervalRef = useRef(null);
  const progress = useRef(new Animated.Value(0)).current;

  const getFormattedTime = milliseconds => {
    const remainingSec = Math.round(milliseconds / 1000);
    const seconds = parseInt((remainingSec % 60).toString(), 10);
    const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
    const hours = parseInt((remainingSec / 3600).toString(), 10);
    const s = seconds < 10 ? '0' + seconds : seconds;
    const m = minutes < 10 ? '0' + minutes : minutes;
    let h = hours < 10 ? '0' + hours : hours;
    h = h === '00' ? '' : h + ':';
    return h + m + ':' + s;
  };

  // Start timer when component mounts or when initialMilliseconds changes.
  useEffect(() => {
    // reset displayed time and progress
    setMillisecondsRemaining(initialMilliseconds);
    progress.setValue(0);

    // ensure previous interval is cleared
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // animate progress smoothly over the duration
    Animated.timing(progress, {
      toValue: 1,
      duration: initialMilliseconds,
      useNativeDriver: false,
    }).start();

    intervalRef.current = setInterval(() => {
      setMillisecondsRemaining(prev => {
        const next = prev - 1000;
        if (next <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          if (onExpire) {
            onExpire();
          }
          return 0;
        }
        return next;
      });
    }, 1000);

    // cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      progress.stopAnimation();
    };
  }, [initialMilliseconds, onExpire, progress]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{getFormattedTime(millisecondsRemaining)}</Text>
      <View style={styles.progressTrack}>
        <Animated.View style={[styles.progressFill, {width: progressWidth}]} />
      </View>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  time: {
    fontSize: 36,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    borderRadius: 6,
    backgroundColor: '#E6EEF8',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0A84FF',
  },
});
