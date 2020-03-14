import React from 'react';
import {ScrollView, Text, View, Linking} from 'react-native';
import styles from '../Styles';
import userStyles from '../Styles/user';

export default function Overview({user}) {
  const address = user.address;
  const company = user.company;
  let url;
  if (address && address.geo) {
    url = `https://www.google.com/maps/search/?api=1&query=${address.geo.lat},${address.geo.lng}`;
  }
  return (
    <ScrollView style={userStyles.sectionContainer}>
      <Text style={userStyles.sectionTitle}>Personal Info</Text>
      <View>
        {user.name && (
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>Name: </Text>
            <Text style={styles.text}>{user.name}</Text>
          </View>
        )}
        {user.email && (
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>E-mail: </Text>
            <Text style={styles.text}>{user.email}</Text>
          </View>
        )}
        {user.phone && (
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>Phone #: </Text>
            <Text style={styles.text}>{user.phone}</Text>
          </View>
        )}
        {user.website && (
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>Website: </Text>
            <Text
              onPress={() => {
                Linking.openURL(`https://${user.website}`).catch(e =>
                  console.log(e),
                );
              }}
              style={styles.link}>
              {user.website}
            </Text>
          </View>
        )}
      </View>
      {address && (
        <View>
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>Address: </Text>
            <Text
              style={styles.link}
              onPress={() => {
                Linking.openURL(url).catch(e => console.log(e));
              }}>
              {address.suite} {address.street} {address.city}
            </Text>
          </View>
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>ZIP: </Text>
            <Text style={styles.text}>{address.zipcode}</Text>
          </View>
        </View>
      )}
      {company && (
        <View>
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>Company: </Text>
            <Text style={styles.text}>{company.name}</Text>
            <Text style={userStyles.infoCP}>"{company.catchPhrase}"</Text>
          </View>
          <View style={userStyles.userSection}>
            <Text style={userStyles.infoTitle}>Industry Goal: </Text>
            <Text style={styles.text}>{company.bs}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
