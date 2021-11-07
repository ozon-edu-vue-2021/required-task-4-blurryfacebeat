<template>
  <form class="root-form">
    <PersonalData />
    <PassportData />
  </form>
</template>

<script>
import PersonalData from '@/components/PersonalData';
import PassportData from '@/components/PassportData';

export default {
  components: { PassportData, PersonalData },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.root-form {
  padding: 25px;
  width: 700px;
}

.personal-data {
  margin-bottom: 30px;
}
</style>
