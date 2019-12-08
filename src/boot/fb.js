import Vue from 'vue';
import * as firebase from 'firebase';
import configs from '../utils/firebase.json';

const app = firebase.initializeApp({
  databaseURL: 'https://fala-ai-portohacksantos.firebaseio.com',
  ...configs,
});

export const parseFirebaseResponse = (snapshot) => {
  const items = [];
  snapshot.forEach((item) => {
    items.push(item.val());
  });
  return items;
};

Vue.prototype.$fb = app;
