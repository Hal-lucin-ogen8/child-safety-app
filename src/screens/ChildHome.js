import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { startLocationTracking, stopLocationTracking } from "../services/locationService";

const ChildHome = ({ navigation, userId }) => {
  useEffect(() => {
    startLocationTracking(userId);
    return () => stopLocationTracking();
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Child's App</Text>
      <Text style={styles.text}>Location tracking is active.</Text>
      <Button title="Emergency Alert" onPress={() => alert("Emergency Alert Sent!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 24,
  },
});

export default ChildHome;
