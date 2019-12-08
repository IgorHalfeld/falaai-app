<template>
  <q-page class="fit column items-center justify-center bg-dark">
    <div class="full-width row justify-center">
      <img src="~assets/logo.png" style="width: 50%" />
    </div>
    <div class="column q-mt-xl q-pa-md rounded-borders" style="background-color: #111">
      <div class="column q-my-sm" v-for="(card, index) in cards" :key="`card-${index}`">
        <div class="row items-center">
          <div class="q-mr-md">
            <q-icon :name="card.icon" size="50px" color="white" />
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
          icon="warning"
          color="red"
          size="lg"
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
        icon: 'account_circle',
        title: 'A denuncia é anônima',
        caption: 'Sua identidade é preservada!',
      },
      {
        icon: 'account_circle',
        title: 'Você salvando vidas',
        caption: 'E protejendo a natureza!',
      },
      {
        icon: 'account_circle',
        title: 'Ajude a comunidade',
        caption: 'E mantenha a saúde do porto!',
      },
      {
        icon: 'account_circle',
        title: 'Evite fake news',
        caption: 'É a sua vida que esta em jogo!',
      },
    ],
  }),
};
</script>
