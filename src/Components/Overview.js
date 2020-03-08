import React from 'react';
import {ScrollView, Text, View, Linking} from 'react-native';
import styles from '../Styles';

export default function Overview({user}) {
  const address = user.address;
  const company = user.company;
  let url;
  if (address && address.geo) {
    url = `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}`;
  }
  return (
    <ScrollView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Personal Info</Text>
      <View>
        {user.name && <Text>Name: {user.name}</Text>}
        {user.email && <Text>E-mail: {user.email}</Text>}
        {user.phone && <Text>Phone #: {user.phone}</Text>}
        {user.website && <Text>Website: {user.website}</Text>}
      </View>
      {address && (
        <View>
          <Text
            onPress={() => {
              Linking.openURL(url).catch(e => console.log(e));
            }}>
            Address: {address.suite} {address.street} {address.city}
          </Text>
          <Text>ZIP: {address.zipcode}</Text>
        </View>
      )}
      {company && (
        <View>
          <Text>Company: {company.name}</Text>
          <Text>"{company.catchPhrase}"</Text>
          <Text>Industry: {company.bs}</Text>
        </View>
      )}
    </ScrollView>
  );
}
