import { computed } from 'vue';
import type { IResident, IConfig } from '@/types';

export function useHierarchicalTree(residents: IResident[], config: IConfig) {
  const treeData = computed(() => {
    const hierarchy = config.hierarchy;
    const groupedData = {};

    residents.forEach((resident: IResident) => {
      let currentLevel:any = groupedData;

      for (let i = 0; i < hierarchy.length; i++) {
        const groupType = hierarchy[i];
        const group = resident.groups.find(g => g.type === groupType);

        if (!group) break;

        if (!currentLevel[group.name]) currentLevel[group.name] = {};

        currentLevel = currentLevel[group.name];
      }
      if (!currentLevel.residents) currentLevel.residents = [];

      currentLevel.residents.push({ name: resident.name, cityId: resident.id });
    });

    return groupedData;
  });

  return treeData.value;
}