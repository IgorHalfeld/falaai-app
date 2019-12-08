<template>
  <q-page class="fit">
    <gmap-map
      :center="{ lat: -23.9760793, lng: -46.3221415 }"
      :zoom="13"
      map-type-id="terrain"
       :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
      :style="{
        width: '100%',
        height: height
      }"
    >
      <!-- main alert -->
      <gmap-circle
        :center="alerts[0].coords"
        :radius="1000"
        :options="{
          strokeColor: 'transparent',
          strokeOpacity: 0.8,
          opacity: 0.5,
          fillColor: '#e57373'
        }"
      />
      <gmap-circle
        v-for="(alert, index) in alerts"
        :key="`alert-${index}`"
        :center="alert.coords"
        :radius="100"
        :options="{
          strokeColor: 'transparent',
          strokeWeight: 2,
          opacity: 0.5,
          fillColor: 'black'
        }"
      />
      <gmap-marker
        v-for="(marker, index) in markers"
        :key="`marker-${index}`"
        :icon="{
          url: marker.pin,
          scaledSize: { width: 40, height: 40 }
        }"
        :position="marker.coords"
        :clickable="true"
      />

      <gmap-polygon
        v-for="(terminal, index) in terminals"
        :key="`polygon-${index}`"
        :options="{
          fillColor: 'black',
          fillOpacity: 0.6,
          strokeColor: 'black'
        }"
        :path="terminal" />
    </gmap-map>
  </q-page>
</template>

<script>
// import { parseFirebaseResponse } from '../boot/fb';
import terminals from '../utils/terminals';
import PIN from '../utils/pin';

export default {
  name: 'PageIndex',
  data() {
    return {
      terminals: terminals.map(terminal => terminal.pos),
      markers: [
        {
          pin: PIN.RED,
          coords: { lat: -23.978550, lng: -46.325403 },
        },
        {
          pin: PIN.GREEN,
          coords: { lat: -23.971804, lng: -46.336818 },
        },
      ],
      alerts: [
        { coords: { lat: -23.978550, lng: -46.325403 } },
        { coords: { lat: -23.975256, lng: -46.327506 } },
      ],
      height: `${window.innerHeight - 50}px`,
    };
  },
  async mounted() {
    /*
    const ref = await this.$fb.database().ref('ships');
    ref.on('value', (result) => {
      const response = parseFirebaseResponse(result);
      console.log('result', response);
    });
    */
  },
};
</script>
