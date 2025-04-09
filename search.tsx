import { View, Text, StyleSheet, TextInput, FlatList, Image, Dimensions } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';

const posts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1682687221038-648d35b49da5?w=300&h=300&fit=crop',
  },
  // Add more posts...
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const tileSize = screenWidth / numColumns;

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
        />
      </View>
      
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={styles.tile}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  tile: {
    width: tileSize,
    height: tileSize,
    margin: 0.5,
  },
});