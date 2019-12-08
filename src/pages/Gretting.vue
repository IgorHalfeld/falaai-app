<template>
  <q-page class="fit column items-center justify-center bg-dark q-py-xl">
    <div class="full-width row justify-center">
      <img src="~assets/logo.png" style="width: 187.5px; height: 70.81px" />
    </div>
    <div class="column q-mt-xl q-pa-md rounded-borders" style="background-color: #111">
      <div class="column q-my-sm" v-for="(card, index) in cards" :key="`card-${index}`">
        <div class="row items-center">
          <div class="q-mr-md">
            <img :src="`/statics/${card.image}.png`" width="50">
          </div>
          <div>
            <p class="text-body1 text-uppercase text-family-bold text-grey-3 q-ma-none">
              {{ card.title }}
            </p>
            <p class="text-caption text-grey-3 q-ma-none">{{ card.caption }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="column items-center q-mt-xl">
      <div class="row justify-center">
        <q-btn
          push
          class="shadow-7"
          icon="warning"
          color="red"
          size="xl"
          round
          @click="() => $router.push({ name: 'Take' })"
        />
      </div>
      <p class="text-body2 text-center text-uppercase text-grey-3 q-ma-none q-mt-md">
        Clique para reportar acidente, <br> incidente ou situação de risco
      </p>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Gretting',
  data: () => ({
    cards: [
      {
        image: '1',
        title: 'A denuncia é anônima',
        caption: 'Sua identidade é preservada!',
      },
      {
        image: '2',
        title: 'Você salvando vidas',
        caption: 'E protejendo a natureza!',
      },
      {
        image: '3',
        title: 'Ajude a comunidade',
        caption: 'E mantenha a saúde do porto!',
      },
      {
        image: '4',
        title: 'Evite fake news',
        caption: 'É a sua vida que esta em jogo!',
      },
    ],
  }),
};
</script>
