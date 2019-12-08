<template>
  <q-page class="fit column items-center justify-center bg-dark">
    <div class="full-width row justify-center">
      <img src="~assets/logo.png" style="width: 50%" />
    </div>
    <WebCam
      ref="camera"
      @stopped="logErrors"
      @error="logErrors"
      @cameras="loadCameraIds"
      :deviceId="deviceId"  />
    <div class="column items-center q-mt-xl">
      <div class="row justify-center">
        <q-btn
          icon="camera_alt"
          color="green"
          size="lg"
          round
          @click="() => take()"
        />
      </div>
      <p class="text-body2 text-center text-uppercase text-grey-3 q-ma-none q-mt-md">
        Firar foto
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
    deviceId: null,
    wsConnection: null,
    hasError: {
      status: false,
      message: '',
    },
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
      const index = this.cameraIds.indexOf(this.deviceId);
      if (index) {
        const [device] = this.cameraIds;
        this.deviceId = device;
      } else {
        const [, device] = this.cameraIds;
        this.deviceId = device;
      }
      this.hasError = {
        status: true,
        message: 'Loading...',
      };

      setTimeout(() => {
        this.hasCameraActive = true;
        this.hasError.status = false;
      }, 1000);
    },
    logErrors(error) {
      console.log('* Error', error); // eslint-disable-line
      this.hasError = {
        status: true,
        message: 'Your browser doesn\'t supports GetUserMedia 😱',
      };
    },
    take() {
      this.isActive = false;
      this.$nextTick(() => {
        const photo = this.$refs.camera.capture();
        console.log('photo', photo);
        setTimeout(() => {
          this.isActive = true;
          this.overlay = false;
        }, 2000);
      });
    },
  },
};
</script>
