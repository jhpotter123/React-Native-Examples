import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * FlexboxDemo Component
 * Demonstrates various flexbox properties and their effects
 */
const FlexboxDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexbox Property Demonstrations</Text>
      
      {/* Flex Direction Demo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>flexDirection: 'row'</Text>
        <View style={[styles.demoContainer, styles.row]}>
          <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>
      </View>

      {/* Justify Content Demo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>justifyContent: 'space-between'</Text>
        <View style={[styles.demoContainer, styles.spaceBetween]}>
          <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>
      </View>

      {/* Align Items Demo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>alignItems: 'center'</Text>
        <View style={[styles.demoContainer, styles.alignCenter]}>
          <View style={[styles.box, styles.box1, { height: 30 }]} />
          <View style={[styles.box, styles.box2, { height: 50 }]} />
          <View style={[styles.box, styles.box3, { height: 40 }]} />
        </View>
      </View>

      {/* Flex Grow Demo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>flex: 1, 2, 1</Text>
        <View style={[styles.demoContainer, styles.row]}>
          <View style={[styles.box, styles.box1, { flex: 1 }]}>
            <Text style={styles.flexText}>1</Text>
          </View>
          <View style={[styles.box, styles.box2, { flex: 2 }]}>
            <Text style={styles.flexText}>2</Text>
          </View>
          <View style={[styles.box, styles.box3, { flex: 1 }]}>
            <Text style={styles.flexText}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2c3e50',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#34495e',
  },
  demoContainer: {
    height: 60,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: '#e74c3c',
  },
  box2: {
    backgroundColor: '#3498db',
  },
  box3: {
    backgroundColor: '#2ecc71',
  },
  flexText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FlexboxDemo;