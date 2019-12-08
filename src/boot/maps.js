import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDl3bq5szUWlQMEsdpnuBT5Omu0JDJrmS8',
    libraries: 'places,drawing,visualization',
  },
});
