import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyDWUdjUm8X0UCpH6WqrlaJVJhV1-rWPQq8",
  authDomain: "nimble-test-react.firebaseapp.com",
  databaseURL: "https://nimble-test-react.firebaseio.com",
  projectId: "nimble-test-react",
  storageBucket: "nimble-test-react.appspot.com",
  messagingSenderId: "560700080479",
  appId: "1:560700080479:web:7954a6a03726a4f04f36ea",
  measurementId: "G-FWZ83LD138"
};

/**
 *  Initialising firebase app
 *  Only used for deployment purposes and to integrate with Github CI/CD
 */
const Firebase = () => {
  app.initializeApp(config);
}

export default Firebase;