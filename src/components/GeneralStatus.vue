<template>
  <div>
    <p class="text-h6 text-grey-7 text-family-bold q-mb-md">
      Informações gerais
    </p>

    <q-spinner
      color="black"
      size="28"
      v-if="isLoading"/>

    <div class="row q-mt-lg" v-else>
      <div class="col justify-center">
        <p class="text-h5 q-ma-none text-center text-primary text-family-bold">
          {{ info.shipsPublicPort }}
        </p>
        <p class="text-grey-7 text-body2 text-center">Navios no porto público</p>
      </div>
      <div class="col justify-center">
        <p class="text-h5 q-ma-none text-center text-primary text-family-bold">
          {{ info.shipsTerminals }}
        </p>
        <p class="text-grey-7 text-body2 text-center">Navios no terminal</p>
      </div>
      <div class="col justify-center">
        <p class="text-h5 q-ma-none text-center text-primary text-family-bold">
          {{ info.shipsExpected }}
        </p>
        <p class="text-grey-7 text-body2 text-center">Navios experados</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralStatus',
  data: () => ({
    isLoading: false,
    info: {},
  }),
  async mounted() {
    this.isLoading = true;
    const { data: response } = await this.$s.general.getTotalizers();
    this.info = response;
    this.isLoading = false;
  },
};
</script>
