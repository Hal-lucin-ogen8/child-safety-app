import Geolocation from "@react-native-community/geolocation";
import { database } from "./firebaseConfig";

export const startLocationTracking = (userId) => {
  Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      database.ref(`locations/${userId}`).set({ latitude, longitude });
    },
    (error) => console.error(error),
    { enableHighAccuracy: true, distanceFilter: 10 }
  );
};

export const stopLocationTracking = () => {
  Geolocation.clearWatch();
};
