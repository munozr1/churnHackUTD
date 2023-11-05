import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const timeline= [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 6,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 7,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 8,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 9,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 10,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 11,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 12,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 13,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 14,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 15,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 16,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: AntDesign,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 17,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 18,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
  },
  {
    id: 19,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: Feather,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 20,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: AntDesign,
    iconBackground: 'bg-green-500',
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
              <View style={styles.iconContainer}>
                <View style={[styles.icon, { backgroundColor: event.iconBackground }]}>
                  {<event.icon style={styles.iconImage} />}
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.descriptionText}>
                  {event.content}{' '}
                  <Text style={styles.targetText}>{event.target}</Text>
                </Text>
                <Text style={styles.dateText}>{event.date}</Text>
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
  iconContainer: {
    marginRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 25,
    height: 25,
    color: 'white',
  },
  detailsContainer: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
  },
  targetText: {
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
};

