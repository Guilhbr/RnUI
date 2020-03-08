import {StyleSheet, Dimensions} from 'react-native';

const pWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  postsContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postContainer: {
    paddingHorizontal: 10,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  tabContainer: {
    maxHeight: 40,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabs: {
    flex: 1,
    minWidth: pWidth / 4,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  activeTab: {
    borderBottomColor: 'blue',
    borderBottomWidth: 3,
  },
  tabTitle: {
    textAlign: 'center',
    fontSize: 16,
  },
  activeTitle: {
    color: 'blue',
    fontWeight: 'bold',
  },
  pageTitle: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 15,
  },
  sectionContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  albumContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  albums: {
    borderWidth: 0.5,
    width: pWidth / 3,
    height: pWidth / 3,
  },
  photo: {
    borderWidth: 0.5,
    minWidth: pWidth / 3,
    minHeight: pWidth / 3,
  },
});

export default styles;
