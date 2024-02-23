import React from 'react';
import { View, Text, ActivityIndicator,StyleSheet, FlatList} from 'react-native';
import { useQuery, gql } from '@apollo/client';


const GET_COUNTRIES = gql`
query Query {
  country(code: "BR") {
    name
    native
    capital
    
}
}
`;
const Launches = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;
 console.log('Data',data)

 const renderCountry = ({item}) => (
    <View style={styles.countryContainer}>
      <Text style={styles.countryName} >{item?.name}</Text>
      <Text>Capital:{item?.capital}</Text>
      <Text>Native:{item?.native}</Text>
      
    </View>
  ); 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries Information</Text>
      {data && data.countries && data.countries.length > 0 ? (
        <FlatList
          data={data.country}
        renderItem={renderCountry}
          keyExtractor={item => item.name} // Ensure key is unique
        />
      ) : (
        <Text>No countries found.</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
export default Launches;
