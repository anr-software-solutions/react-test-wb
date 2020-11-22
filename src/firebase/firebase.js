import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyDWUdjUm8X0UCpH6WqrlaJVJhV1-rWPQq8",
  authDomain: "workbuddy-webapp.firebaseapp.com",
  databaseURL: "https://workbuddy-webapp.firebaseio.com",
  projectId: "workbuddy-webapp",
  storageBucket: "workbuddy-webapp.appspot.com"
};

/**
 *  Initialising firebase app
 *  Only used for deployment purposes and to integrate with Github CI/CD
 */
const Firebase = () => {
  app.initializeApp(config);
}

export default Firebase;