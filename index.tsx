import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react-native';

const posts = [
  {
    id: '1',
    user: {
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=800&fit=crop',
    likes: 1234,
    caption: 'Beautiful sunset at the beach! 🌅 #nature #photography',
    comments: 42,
  },
  {
    id: '2',
    user: {
      username: 'janedoe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1682687221038-648d35b49da5?w=600&h=800&fit=crop',
    likes: 856,
    caption: 'City lights and urban vibes 🌃 #cityscape #nightlife',
    comments: 28,
  },
];

function Post({ post }) {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
      </View>
      
      <Image source={{ uri: post.image }} style={styles.postImage} />
      
      <View style={styles.postActions}>
        <View style={styles.leftActions}>
          <TouchableOpacity>
            <Heart size={24} color="#fff" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MessageCircle size={24} color="#fff" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Share2 size={24} color="#fff" style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Bookmark size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.postFooter}>
        <Text style={styles.likes}>{post.likes.toLocaleString()} likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.username}>{post.user.username}</Text>
          <Text style={styles.caption}>{post.caption}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  post: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 5,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 16,
  },
  postFooter: {
    padding: 10,
  },
  likes: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  captionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  caption: {
    color: '#fff',
  },
  comments: {
    color: '#666',
    marginTop: 5,
  },
});