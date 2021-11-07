<template>
  <div class="passport-data">
    <Heading class="title" heading-type="h2">Паспортные данные</Heading>
    <Select label="Граджанство" :items="citizenship" />
  </div>
</template>

<script>
import Heading from '@/common/components/Heading/Heading';
import Select from '@/common/components/Select/Select';

import citizenship from '@/assets/data/citizenships.json';

export default {
  name: 'PassportData',
  components: { Select, Heading },
  data() {
    return {
      citizenship
    };
  }
};
</script>

<style scoped>
.passport-data {
}

.title {
  margin-bottom: 15px;
}
</style>
