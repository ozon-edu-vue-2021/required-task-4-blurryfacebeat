<template>
  <div class="passport-data">
    <Heading class="title" heading-type="h2">Паспортные данные</Heading>
    <Select
      label="Гражданство"
      :items="citizenship"
      selection-field="nationality"
    />
    <div class="passport-container">
      <TextInput title="Серия паспорта" v-model.trim="data.passport.serial" />
      <TextInput title="Номер паспорта" v-model.trim="data.passport.number" />
      <TextInput
        title="Дата выдрачи"
        placeholder="дд.мм.гггг"
        v-model.trim="data.passport.date"
      />
    </div>
  </div>
</template>

<script>
import Heading from '@/common/components/Heading/Heading';
import Select from '@/common/components/Select/Select';

import citizenship from '@/assets/data/citizenships.json';
import TextInput from '@/common/components/TextInput/TextInput';

export default {
  name: 'PassportData',
  components: { TextInput, Select, Heading },
  data() {
    return {
      citizenship,
      data: {
        passport: {
          serial: '',
          number: '',
          date: ''
        }
      }
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

.select-container {
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}
</style>
