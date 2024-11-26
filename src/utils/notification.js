import PushNotification from "react-native-push-notification";

export const sendNotification = (title, message) => {
  PushNotification.localNotification({
    title,
    message,
    playSound: true,
    soundName: "default",
  });
};
