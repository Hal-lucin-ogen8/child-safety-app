import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { database } from "../services/firebaseConfig";

const ParentDashboard = ({ userId }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const locationRef = database.ref(`locations/${userId}`);
    locationRef.on("value", (snapshot) => {
      setLocation(snapshot.val());
    });

    return () => locationRef.off();
  }, [userId]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location?.latitude || 37.7749,
          longitude: location?.longitude || -122.4194,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Child's Location"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default ParentDashboard;
