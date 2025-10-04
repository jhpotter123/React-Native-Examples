import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView,
  Animated 
} from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animatedValue] = useState(new Animated.Value(0));

  const iconCategories = [
    {
      name: 'Social',
      icons: [
        { component: FontAwesome, name: 'facebook', color: '#1877F2' },
        { component: FontAwesome, name: 'twitter', color: '#1DA1F2' },
        { component: FontAwesome, name: 'instagram', color: '#E4405F' },
        { component: FontAwesome, name: 'linkedin', color: '#0077B5' },
        { component: FontAwesome, name: 'github', color: '#333' },
        { component: FontAwesome, name: 'youtube', color: '#FF0000' },
      ]
    },
    {
      name: 'UI/UX',
      icons: [
        { component: Ionicons, name: 'home', color: '#4CAF50' },
        { component: Ionicons, name: 'settings', color: '#FF9800' },
        { component: Feather, name: 'search', color: '#2196F3' },
        { component: MaterialIcons, name: 'favorite', color: '#E91E63' },
        { component: AntDesign, name: 'shoppingcart', color: '#9C27B0' },
        { component: SimpleLineIcons, name: 'bell', color: '#F44336' },
      ]
    },
    {
      name: 'Tech',
      icons: [
        { component: FontAwesome5, name: 'react', color: '#61DAFB' },
        { component: MaterialCommunityIcons, name: 'nodejs', color: '#339933' },
        { component: FontAwesome, name: 'apple', color: '#000' },
        { component: FontAwesome, name: 'android', color: '#3DDC84' },
        { component: MaterialCommunityIcons, name: 'firebase', color: '#FFCA28' },
        { component: FontAwesome5, name: 'aws', color: '#FF9900' },
      ]
    },
    {
      name: 'Business',
      icons: [
        { component: MaterialIcons, name: 'business-center', color: '#795548' },
        { component: FontAwesome, name: 'money', color: '#4CAF50' },
        { component: Entypo, name: 'bar-graph', color: '#2196F3' },
        { component: MaterialCommunityIcons, name: 'chart-line', color: '#FF5722' },
        { component: FontAwesome5, name: 'handshake', color: '#607D8B' },
        { component: MaterialIcons, name: 'trending-up', color: '#8BC34A' },
      ]
    },
  ];

  const allIcons = iconCategories.flatMap(category => 
    category.icons.map(icon => ({ ...icon, category: category.name }))
  );

  const filteredIcons = selectedCategory === 'all' 
    ? allIcons 
    : allIcons.filter(icon => icon.category === selectedCategory);

  const animatePress = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const IconCard = ({ icon, index }) => (
    <TouchableOpacity 
      style={styles.iconCard}
      onPress={animatePress}
      activeOpacity={0.8}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${icon.color}15` }]}>
        <icon.component name={icon.name} size={32} color={icon.color} />
      </View>
      <Text style={styles.iconName}>{icon.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="vector-triangle" size={32} color="#6366F1" />
        <Text style={styles.title}>React Native Vector Icons</Text>
        <Text style={styles.subtitle}>Professional Icon Library Demo</Text>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryContent}
      >
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'all' && styles.selectedCategory]}
          onPress={() => setSelectedCategory('all')}
        >
          <Text style={[styles.categoryText, selectedCategory === 'all' && styles.selectedCategoryText]}>
            All
          </Text>
        </TouchableOpacity>
        {iconCategories.map((category) => (
          <TouchableOpacity
            key={category.name}
            style={[styles.categoryButton, selectedCategory === category.name && styles.selectedCategory]}
            onPress={() => setSelectedCategory(category.name)}
          >
            <Text style={[styles.categoryText, selectedCategory === category.name && styles.selectedCategoryText]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.iconGrid} showsVerticalScrollIndicator={false}>
        <View style={styles.gridContainer}>
          {filteredIcons.map((icon, index) => (
            <IconCard key={`${icon.name}-${index}`} icon={icon} index={index} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tap any icon to see the animation effect
        </Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{filteredIcons.length}</Text>
            <Text style={styles.statLabel}>Icons</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{iconCategories.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  categoryContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
	maxHeight: 60,
  },
  categoryContent: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  categoryButton: {
	alignItems: 'center',
	justifyContent: 'center',
    paddingHorizontal: 16,
    marginRight: 8,
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
	height: 40,
  },
  selectedCategory: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
  iconGrid: {
    flex: 1,
    paddingHorizontal: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  iconCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconName: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#64748B',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
});

export default App;
