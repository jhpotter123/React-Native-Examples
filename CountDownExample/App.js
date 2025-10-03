import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import Countdown from './components/Countdown';

const PRESETS = [20000, 60000, 120000];

const formatPreset = ms => {
  if (ms >= 60000) {
    return `${ms / 60000}m`;
  }
  return `${ms / 1000}s`;
};

const App = () => {
  const [complete, setComplete] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [running, setRunning] = useState(false);
  const [durationMs, setDurationMs] = useState(PRESETS[0]);

  const onExpire = () => {
    setComplete(true);
    setRunning(false);
  };

  const start = () => {
    setComplete(false);
    setResetKey(k => k + 1);
    setRunning(true);
  };

  const reset = () => {
    setComplete(false);
    setResetKey(k => k + 1);
    setRunning(true);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Countdown Example</Text>
        <Text style={styles.subtitle}>React Native timer with progress</Text>
      </View>

      <View style={styles.card}>
        {complete ? (
          <View style={styles.preview}>
            <Text style={styles.previewText}>Completed</Text>
          </View>
        ) : running ? (
          <Countdown
            key={String(resetKey)}
            initialMilliseconds={durationMs}
            onExpire={onExpire}
          />
        ) : (
          <View style={styles.preview}>
            <Text style={styles.previewText}>
              Ready: {formatPreset(durationMs)}
            </Text>
          </View>
        )}

        <View style={styles.controlsRow}>
          <TouchableOpacity style={styles.primary} onPress={start}>
            <Text style={styles.primaryText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondary} onPress={reset}>
            <Text style={styles.secondaryText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.presetsRow}>
          {PRESETS.map(p => (
            <TouchableOpacity
              key={String(p)}
              style={[
                styles.preset,
                p === durationMs ? styles.presetActive : null,
              ]}
              onPress={() => setDurationMs(p)}>
              <Text
                style={
                  p === durationMs ? styles.presetTextActive : styles.presetText
                }>
                {formatPreset(p)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Showcases: hooks, effects, refs, simple animations
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F3F6FB',
  },
  header: {
    paddingTop: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  preview: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  previewText: {
    fontSize: 18,
    color: '#333',
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  primary: {
    backgroundColor: '#0A84FF',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 8,
  },
  primaryText: {
    color: 'white',
    fontWeight: '600',
  },
  secondary: {
    borderColor: '#0A84FF',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  secondaryText: {
    color: '#0A84FF',
    fontWeight: '600',
  },
  presetsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  preset: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6EEF8',
    marginHorizontal: 6,
  },
  presetActive: {
    backgroundColor: '#0A84FF',
    borderColor: '#0A84FF',
  },
  presetText: {
    color: '#0A84FF',
    fontWeight: '600',
  },
  presetTextActive: {
    color: 'white',
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 12,
  },
  footerText: {
    color: '#888',
    fontSize: 12,
  },
});

export default App;
