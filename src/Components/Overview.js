import React from 'react';
import {ScrollView, Text, View} from 'react-native';

export default function Overview({user}) {
  const address = user.address;
  const company = user.company;
  return (
    <ScrollView>
      <View>
        <Text>Personal Info</Text>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.website}</Text>
      </View>
      {address && (
        <View>
          <Text>Address</Text>
          <Text>{address.city}</Text>
          <Text>{address.street}</Text>
          <Text>{address.suite}</Text>
          <Text>{address.zipcode}</Text>
          <Text>
            Long: {address.geo.lng}; Lat: {address.geo.lat}
          </Text>
        </View>
      )}
      {company && (
        <View>
          <Text>Company</Text>
          <Text>{company.name}</Text>
          <Text>{company.catchPhrase}</Text>
          <Text>{company.bs}</Text>
        </View>
      )}
    </ScrollView>
  );
}
