<template>
  <q-page class="fit column items-center justify-center bg-dark q-py-xl">
    <div class="full-width row justify-center q-mb-lg">
      <img src="~assets/logo.png" style="width: 187.5px; height: 70.81px" />
    </div>

    <div class="column items-center q-mt-xl q-pt-md full-width" style="background-color: #111">
      <div class="column q-my-sm">
        <div class="row items-center justify-between">
          <div class="column items-center">
            <div>
              <div
                class="row justify-center items-center"
                :style="{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: state.type.color,
                }">
                <img :src="`/statics/types/${state.type.image}.png`" width="35">
              </div>
            </div>
            <p
              class="text-body2 text-center text-uppercase text-grey-3 q-mt-md"
              v-html="state.type.title">
            </p>
          </div>
        </div>
      </div>

      <q-input
        placeholder="Descreva a ocorência"
        rounded
        standout
        bottom-slots
        bg-color="dark"
        class="full-width q-px-xl"
        color="grey-3"
        v-model="text">
        <template v-slot:prepend>
          <q-avatar>
            <q-icon name="textsms" color="white" size="30px" />
          </q-avatar>
        </template>
      </q-input>
    </div>

    <div class="full-width row justify-around items-center q-mt-lg">
      <q-btn
        push
        class="shadow-7"
        icon="close"
        color="red"
        size="xl"
        round
        @click="() => ({})"
      />
      <q-btn
        push
        class="shadow-7"
        icon="send"
        color="green"
        size="xl"
        round
        @click="() => send()"
      />
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Send',
  data: () => ({
    text: '',
  }),
  computed: {
    ...mapState({
      state: state => state,
    }),
  },
  methods: {
    ...mapActions(['setDescription']),
    async send() {
      this.$q.loading.show({
        message: 'Enviando...',
      });
      const response = await this.$s.alert.create({
        ...this.state,
        description: this.text.trim(),
        type: this.state.type.value,
      });
      if (response.status === 200) {
        this.$q.notify('Contribuição registrada com sucesso!');
        setTimeout(() => {
          this.$router.push({ name: 'Gretting' });
        }, 500);
      }
      this.$q.loading.hide();
    },
  },
};
</script>
