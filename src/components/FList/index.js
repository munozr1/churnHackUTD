import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

const people = [
  {
    id: '1',
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    id: '2',
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeenDateTime: '2023-01-23T13:23Z',
    lastSeen: null,
  },
  {
    id: '3',
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    id: '4',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '5',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '6',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeenDateTime: '2023-01-23T13:23Z',
    lastSeen: '3h ago',
  },
];

export default function FList() {
  return (
    <FlatList
      style={{marginTop: 20}}
      data={people}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <View style={styles.leftContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.role}>{item.role}</Text>
            {item.lastSeen ? (
              <Text style={styles.lastSeen}>
                Last seen {item.lastSeen}
              </Text>
            ) : (
              <View style={styles.limitedBadge}>
                <View style={styles.limitedDot} />
                <Text style={styles.limitedText}>limited time</Text>
              </View>
            )}
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  role: {
    fontSize: 14,
    color: 'black',
  },
  lastSeen: {
    fontSize: 14,
    color: 'gray',
  },
  limitedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limitedDot: {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    marginRight: 5,
  },
  limitedText: {
    fontSize: 14,
    color: 'green',
  },
});
