import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const activities = [
  {
    id: '1',
    user: {
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    action: 'liked your post',
    time: '2h',
    postImage: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    user: {
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    action: 'started following you',
    time: '4h',
  },
];

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <FlatList
        data={activities}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.activityItem}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            <View style={styles.activityContent}>
              <Text style={styles.username}>{item.user.username}</Text>
              <Text style={styles.action}>{item.action}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            {item.postImage && (
              <Image source={{ uri: item.postImage }} style={styles.postImage} />
            )}
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#262626',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
  action: {
    color: '#fff',
  },
  time: {
    color: '#666',
    fontSize: 12,
    marginTop: 2,
  },
  postImage: {
    width: 44,
    height: 44,
    borderRadius: 4,
  },
});