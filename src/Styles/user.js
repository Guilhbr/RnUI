import {StyleSheet, Dimensions} from 'react-native';

const pWidth = Dimensions.get('window').width;

const userStyles = StyleSheet.create({
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
  photosContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  albumContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  albums: {
    borderWidth: 0.5,
    backgroundColor: 'rgba(40, 40, 150, 0.5)',
    padding: 10,
    width: (pWidth * 3) / 4,
    marginBottom: 25,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  photo: {
    borderWidth: 0.5,
    minWidth: pWidth / 3,
    minHeight: pWidth / 3,
  },
  todoToggle: {
    backgroundColor: 'green',
    borderWidth: 3,
    borderRadius: 11,
    width: 100,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  todoToggleOff: {
    backgroundColor: 'red',
  },
  todoToggleText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  todo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
    marginBottom: 8,
  },
  todoCompleted: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    color: 'green',
  },
  userSection: {
    flexDirection: 'row',
    marginBottom: 7,
    flexWrap: 'wrap',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoCP: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  tabViewContainer: {
    flex: 1,
    marginTop: 10,
  },
  userButton: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 11,
    backgroundColor: 'rgba(0,10,240, 0.1)',
    alignSelf: 'flex-end',
  },
  userButtonText: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default userStyles;
