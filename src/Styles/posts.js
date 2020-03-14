import {StyleSheet} from 'react-native';

const postStyles = StyleSheet.create({
  postButton: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  postViewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  commentUser: {
    color: 'blue',
    marginBottom: 5,
  },
  commentTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentContainer: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  commentListContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default postStyles;
