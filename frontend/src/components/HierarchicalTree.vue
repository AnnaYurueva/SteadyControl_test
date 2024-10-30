<template>
    <ul>
        <li v-for="(item, key) in data" :key="key">
            {{ key }}
            <ul v-if="item.residents" class="residents-wrapper">
                <li v-for="resident in item.residents" :key="resident.id" class="resident">
                    {{ resident.name }}
                    {{ resident.cityId }}
                    <span class="resident-text">{{ tooltip(resident.cityId, cities) }}</span>
                </li>
            </ul>
            <HierarchicalTree v-else :data="item" :cities="cities" />
        </li>
    </ul>
</template>
  
<script setup lang="ts">
import {useHelpers} from '@/utils/useHelpers'

defineProps({
    data: { type: Object, required: true },
    cities: { type: Array, required: true },
});

const { tooltip } = useHelpers()
</script>
  