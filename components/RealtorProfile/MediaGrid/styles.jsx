import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemSpacing = 3; // Adjust as needed for padding between items
const itemWidth = (windowWidth - (numColumns + 1) * itemSpacing) / numColumns; 

const styles = StyleSheet.create({
  gridContainer: {
    paddingHorizontal: itemSpacing / 2,
    paddingBottom: itemSpacing,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Add space between columns
  },
  gridItem: {
    width: itemWidth,
    aspectRatio: 3 / 4,
    marginBottom: itemSpacing, // Space between rows
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default styles;