importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDUIQ5s-MI2V3rsi_uWBbRb5YGcFmjjKK4",
    authDomain: "nexus-earn-1.firebaseapp.com",
    projectId: "nexus-earn-1",
    storageBucket: "nexus-earn-1.firebasestorage.app",
    messagingSenderId: "779765076952",
    appId: "1:779765076952:web:fa5fac51bef82e74b598ad"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || 'NEXUS EARN Alert';
    const notificationOptions = {
        body: payload.notification?.body || 'New update available',
        icon: '/logo.png',
        badge: '/logo.png',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
