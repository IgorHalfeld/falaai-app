<template>
  <div class="fit q-pa-md">
    <general-status class="q-mb-lg"/>
    <p class="text-h6 text-grey-7 text-family-bold q-mb-md">
      Legenda
    </p>
    <ul style="list-style: none" class="q-pa-none">
      <li
        class="flex items-center text-grey-7 q-my-sm text-body1"
        v-for="item in colors" :key="item.label">
        <img
          v-if="item.image"
          :src="item.image"
          class="q-mr-md"
          :style="{
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            transform: 'scale(1.2, 1.2)'
          }"
        />
        <span
          v-else
          class="q-mr-md"
          :class="item.color"
          :style="{
            borderRadius: '50%',
            width: '20px',
            height: '20px',
          }">
        </span>
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
import PIN from '../utils/pin';
import GeneralStatus from './GeneralStatus';

export default {
  name: 'Toolbar',
  components: { GeneralStatus },
  data: () => ({
    colors: [
      { label: 'Cículo - Occorências', color: 'bg-black' },
      { label: 'Cículo - Região das ocorrências', color: 'bg-red-4' },
      { label: 'Navio - Não afetado', image: PIN.GREEN },
      { label: 'Navio - Requer atenção', image: PIN.YELLOW },
      { label: 'Navio - Perigo!', image: PIN.RED },
    ],
  }),
};
</script>
