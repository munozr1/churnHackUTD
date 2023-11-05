import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const timeline = [
  {
    id: 1,
    content: 'Transaction at Quicktrip',
    target: '$12.34',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Purchase at 7-Eleven',
    target: '$45.67',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Shopping at Walmart',
    target: '$18.99',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Order from Amazon',
    target: '$30.50',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Transaction at Target',
    target: '$7.99',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 6,
    content: 'Gas refill at Chevron',
    target: '$22.50',
    href: '#',
    date: 'Oct 10',
    datetime: '2020-10-10',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 7,
    content: 'Coffee at Starbucks',
    target: '$5.99',
    href: '#',
    date: 'Oct 15',
    datetime: '2020-10-15',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 8,
    content: 'Electronics at Best Buy',
    target: '$89.99',
    href: '#',
    date: 'Oct 20',
    datetime: '2020-10-20',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 9,
    content: 'Lunch at Subway',
    target: '$10.50',
    href: '#',
    date: 'Oct 25',
    datetime: '2020-10-25',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 10,
    content: 'Books at Barnes & Noble',
    target: '$34.99',
    href: '#',
    date: 'Oct 30',
    datetime: '2020-10-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 11,
    content: 'Clothing at H&M',
    target: '$56.75',
    href: '#',
    date: 'Nov 5',
    datetime: '2020-11-05',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 12,
    content: 'Groceries at Whole Foods',
    target: '$43.25',
    href: '#',
    date: 'Nov 10',
    datetime: '2020-11-10',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 13,
    content: 'Dinner at Olive Garden',
    target: '$29.99',
    href: '#',
    date: 'Nov 15',
    datetime: '2020-11-15',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 14,
    content: 'Home Depot Purchase',
    target: '$67.88',
    href: '#',
    date: 'Nov 20',
    datetime: '2020-11-20',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 15,
    content: 'Online Shopping at eBay',
    target: '$54.76',
    href: '#',
    date: 'Nov 25',
    datetime: '2020-11-25',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 16,
    content: 'Pharmacy at CVS',
    target: '$15.25',
    href: '#',
    date: 'Nov 30',
    datetime: '2020-11-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 17,
    content: 'Gym Membership at LA Fitness',
    target: '$49.99',
    href: '#',
    date: 'Dec 5',
    datetime: '2020-12-05',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 18,
    content: 'Flight Booking at Delta Airlines',
    target: '$325.00',
    href: '#',
    date: 'Dec 10',
    datetime: '2020-12-10',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 19,
    content: 'Car Rental at Enterprise',
    target: '$75.99',
    href: '#',
    date: 'Dec 15',
    datetime: '2020-12-15',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 20,
    content: 'Tech Gadgets at Apple Store',
    target: '$899.99',
    href: '#',
    date: 'Dec 20',
    datetime: '2020-12-20',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
];

export default function Feed() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {timeline.map((event, eventIdx) => (
        <View key={event.id}>
          <View style={styles.timelineItem}>
            {eventIdx !== timeline.length - 1 && (
              <View style={styles.timelineSeparator} />
            )}
            <View style={styles.timelineContent}>
              <View style={styles.detailsContainer}>
                <Text style={styles.descriptionText}>
                  {event.content}
                </Text>
                <Text style={styles.dateText}>{event.date}</Text>
              </View>
              <View style={styles.targetContainer}>
                <Text style={styles.targetText}>{event.target}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = {
  container: {
    paddingBottom: 8,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  timelineSeparator: {
    width: 2,
    height: '100%',
    backgroundColor: '#E5E7EB',
  },
  timelineContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  targetContainer: {
    justifyContent: 'flex-end',
    margin: 20
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
  targetText: {
    color: 'red',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
};
