<template>
  <q-page class="fit column items-center justify-center bg-dark q-py-xl">
    <div class="full-width row justify-center q-mb-lg">
      <img src="~assets/logo.png" style="width: 187.5px; height: 70.81px" />
    </div>

    <div class="row justify-around q-mt-xl q-pt-md full-width" style="background-color: #111">
      <div class="column q-my-sm" v-for="(card, index) in cards" :key="`card-${index}`">
        <div class="row items-center justify-between">
          <div class="column items-center" @click="() => select(card)">
            <div>
              <div
                class="row justify-center items-center"
                :style="{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: card.color,
                }">
                <img :src="`/statics/types/${card.image}.png`" width="35">
              </div>
            </div>
            <p
              class="text-body2 text-center text-uppercase text-grey-3 q-mt-md"
              v-html="card.title">
            </p>
          </div>
        </div>
      </div>
    </div>

    <p class="text-body2 text-center text-uppercase text-grey-3 q-ma-none q-mt-md">
      Selecione o problema
    </p>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';
// import { slugify } from '../utils/slug';

export default {
  name: 'IssueSelect',
  data: () => ({
    cards: [
      {
        image: '1',
        color: '#dc6811',
        value: 'Incêndio ou explosão',
        title: 'Incêndio <br /> ou explosão',
      },
      {
        image: '2',
        color: '#a12db4',
        value: 'Vazamento químico',
        title: 'Vazamento <br /> químico',
      },
      {
        image: '3',
        color: '#5f1fe8',
        value: 'Pessoa acidentada',
        title: 'Pessoa <br /> acidentada',
      },
      {
        image: '4',
        color: '#9d5434',
        value: 'Poluição ambiental',
        title: 'Poluição <br /> ambiental',
      },
      {
        image: '5',
        color: '#3e8bb5',
        value: 'Desabamento estrutura',
        title: 'Desabamento <br /> estrutura',
      },
      {
        image: '6',
        color: '#259877',
        value: 'Embarcação c/ problema',
        title: 'Embarcação <br /> c/ problema',
      },
    ],
  }),
  methods: {
    ...mapActions(['setType']),
    select(card) {
      this.setType(card);
      this.$router.push({ name: 'Send' });
    },
  },
};
</script>
