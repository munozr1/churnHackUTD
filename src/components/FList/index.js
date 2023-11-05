import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

const cards = [
  {
    id: '1',
    name: 'SavorOne',
    email: 'leslie.alexander@example.com',
    role: 'Apply',
    imageUrl:
      'data:image/png;base64,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',
    href: '#',
    lastSeen: null,
  },
  {
    id: '2',
    name: 'Unlimited Cash Rewards',
    email: 'michael.foster@example.com',
    role: 'Apply',
    imageUrl:
      'https://icons.veryicon.com/png/o/business/bank-logo-collection/bank-of-america-logo.png',
    href: '#',
    lastSeenDateTime: '2023-01-23T13:23Z',
    lastSeen: null,
  },
  {
    id: '3',
    name: 'Freedom Flex',
    email: 'dries.vincent@example.com',
    role: 'Apply',
    imageUrl:
      'https://diversitymbamagazine.com/wp-content/uploads/2020/08/JP-Morgan-Chase-Logo.png',
    href: '#',
    lastSeen: null,
  },
  {
    id: '4',
    name: 'Blue Business Cash Card',
    email: 'lindsay.walton@example.com',
    role: 'Apply',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1026px-American_Express_logo_%282018%29.svg.png',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '5',
    name: 'United Explorers Card',
    email: 'courtney.henry@example.com',
    role: 'Apply',
    imageUrl:
      'https://diversitymbamagazine.com/wp-content/uploads/2020/08/JP-Morgan-Chase-Logo.png',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    id: '6',
    name: 'Savor Rewards',
    email: 'tom.cook@example.com',
    role: 'Apply',
    imageUrl:
      'data:image/png;base64,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',
    href: '#',
    lastSeenDateTime: '2023-01-23T13:23Z',
    lastSeen: '3h ago',
  },
];

export default function FList() {
  return (
    <FlatList
      style={{marginTop: 20}}
      data={cards}
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
            <TouchableOpacity style={{}}>
              <Text style={styles.role}>{item.role}</Text>
            </TouchableOpacity>
            {item.lastSeen ? (
              null
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
