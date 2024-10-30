<template>
  <div v-if="Object.keys(residents).length !== 0">
    <HierarchicalTree :data="residents" :cities="cities" />
  </div>
  <div v-else>Ничего не найдено</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import type { ICity, IConfig } from '@/types';
import HierarchicalTree from "./components/HierarchicalTree.vue";
import { useHierarchicalTree } from '@/plugins/useHierarchicalTree'
import { getResidentsList, getCitiesList } from './api/cities';

const residents = ref({})
const cities: Ref<ICity[]> = ref([])
const config: Ref<IConfig> = ref({ hierarchy: ["city", "district", "street"] });

onMounted(async () => {
  const resp = await getResidentsList();
  residents.value = await useHierarchicalTree(resp, config.value)
  cities.value = await getCitiesList()
})
</script>
