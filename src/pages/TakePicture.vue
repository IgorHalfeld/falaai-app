<template>
  <q-page class="fit column items-center justify-center bg-dark q-py-xl">
    <div class="full-width row justify-center q-mb-lg">
      <img src="~assets/logo.png" style="width: 187.5px; height: 70.81px" />
    </div>
    <q-img v-if="picture" :src="picture" />
    <WebCam
      v-else
      ref="camera"
      @stopped="logErrors"
      @error="logErrors"
      @cameras="loadCameraIds"
      :deviceId="deviceId"  />

    <div class="full-width row justify-around items-center q-mt-lg" v-if="picture">
      <q-btn
        push
        class="shadow-7"
        icon="close"
        color="red"
        size="xl"
        round
        @click="() => picture = null"
      />
      <q-btn
        push
        class="shadow-7"
        icon="done"
        color="green"
        size="xl"
        round
        @click="() => upload()"
      />
    </div>
    <div v-else class="column items-center q-mt-lg">
      <div class="row justify-center">
        <q-btn
          push
          class="shadow-7 q-ml-xl"
          icon="camera_alt"
          color="green"
          size="xl"
          round
          @click="() => take()"
        />
        <div class="flex items-center q-ml-sm">
          <q-btn
            push
            class="shadow-7"
            icon="flip_camera_ios"
            color="grey"
            size="md"
            round
            @click="() => flipCamera()"
          />
        </div>
      </div>
      <p class="text-body2 text-center text-uppercase text-grey-3 q-ma-none q-mt-md">
        Tirar foto
      </p>
    </div>
  </q-page>
</template>

<script>
import { WebCam } from 'vue-web-cam';

export default {
  name: 'TakePicture',
  components: { WebCam },
  data: () => ({
    overlay: false,
    bottomNav: 'takePicture',
    screen: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    },
    picture: null,
    deviceId: null,
    cameraIds: [],
    isActive: true,
    cameraAlreadyLoaded: false,
    hasCameraActive: true,
  }),
  methods: {
    loadCameraIds(devices) {
      if (this.deviceId && this.deviceId.length) {
        this.$refs.camera.start();
        return;
      }

      this.cameraIds = devices.map(d => d.deviceId);
      const [device] = this.cameraIds;
      this.deviceId = device;
    },
    flipCamera() {
      this.hasCameraActive = false;
      this.$q.loading.show({
        message: 'Trocando a camera...',
      });
      const index = this.cameraIds.indexOf(this.deviceId);
      if (index) {
        const [device] = this.cameraIds;
        this.deviceId = device;
      } else {
        const [, device] = this.cameraIds;
        this.deviceId = device;
      }

      setTimeout(() => {
        this.hasCameraActive = true;
        this.$q.loading.hide();
      }, 1000);
    },
    logErrors(error) {
      console.log('* Error', error); // eslint-disable-line
    },
    async upload() {
      this.$q.loading.show({
        message: 'Fazendo upload...',
      });
      const ref = this.$fb.storage().ref();
      const imagesRef = ref.child(`${Date.now()}.jpg`);
      const response = await fetch(this.picture);
      const blob = await response.blob();

      imagesRef.put(blob).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
        this.picture = null;
        this.$q.loading.hide();
      });
    },
    take() {
      this.isActive = false;
      this.$nextTick(() => {
        const photo = this.$refs.camera.capture();
        this.picture = photo;
        setTimeout(() => {
          this.isActive = true;
          this.overlay = false;
        }, 2000);
      });
    },
  },
};
</script>
