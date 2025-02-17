import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();

  return (
    <ScrollView 
      contentContainerStyle={{ 
        flexGrow: 1,
        backgroundColor: '#F0FFF0'
      }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Create New Account</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder='Enter Full Name' />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder='Enter Email' />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            secureTextEntry={true}
            style={styles.input}
            placeholder='Enter Password'
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          {/* View Plan Button */}
          <TouchableOpacity 
            style={styles.blackButton}
            onPress={() => router.push('/plan')}
          >
            <Text style={styles.whiteText}>View Plan</Text>
          </TouchableOpacity>

          {/* View Profile Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.buttonText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  inputContainer: {
    marginBottom: 25
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray'
  },
  buttonGroup: {
    marginTop: 30
  },
  primaryButton: {
    backgroundColor: '#031f2a',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center'
  },
  blackButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  whiteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  }
});
