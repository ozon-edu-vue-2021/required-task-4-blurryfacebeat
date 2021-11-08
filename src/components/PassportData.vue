<template>
  <div class="passport-data">
    <Heading class="title" heading-type="h2">Паспортные данные</Heading>
    <Select
      label="Гражданство"
      :items="citizenship"
      selection-field="nationality"
      @sendActiveItem="setCitizenship"
    />
    <div class="passport-container" v-if="data.citizenship === 'Russia'">
      <TextInput
        title="Серия паспорта"
        v-model.trim="data.passportSerial"
        v-mask="'####'"
        placeholder="1234"
      />
      <TextInput
        title="Номер паспорта"
        v-model.trim="data.passportNumber"
        v-mask="'######'"
        placeholder="123456"
      />
      <TextInput
        title="Дата выдачи"
        placeholder="дд.мм.гггг"
        v-model.trim="data.passportDate"
        v-mask="'##.##.####'"
      />
    </div>
    <div
      class="passport-container__another"
      v-if="data.citizenship !== 'Russia' && data.citizenship"
    >
      <div class="passport-container__name">
        <TextInput
          title="Фамилия на латинице"
          v-model.trim="data.latinSurname"
          placeholder="Ivanov"
          v-mask="'EEEEEEEEEEEEEEEEEEEE'"
        />
        <TextInput
          title="Имя на латинице"
          v-model.trim="data.latinName"
          placeholder="Ivan"
          v-mask="'EEEEEEEEEEEEEEEEEEEE'"
        />
      </div>
      <div class="passport-container__passport">
        <TextInput
          title="Номер паспорта"
          v-model.trim="data.anotherPassportNumber"
          v-mask="'######'"
          placeholder="123456"
        />
        <Select
          label="Страна выдачи"
          :items="citizenship"
          selection-field="nationality"
          @sendActiveItem="setCountry"
        />
        <Select
          label="Тип паспорта"
          :items="passports"
          selection-field="type"
          @sendActiveItem="setPassportType"
        />
      </div>
    </div>
    <div class="change-name">
      <Heading class="title">Меняли ли фамилию или имя?</Heading>
      <div class="change-container">
        <Radio value="Нет" v-model="data.changeName" />
        <Radio value="Да" v-model="data.changeName" />
      </div>
      <div class="full-name" v-if="data.changeName === 'Да'">
        <TextInput
          title="Фамилия"
          v-model.trim="data.anotherSurname"
          v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
          placeholder="Иванов"
        />
        <TextInput
          title="Имя"
          v-model.trim="data.anotherName"
          v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
          placeholder="Иван"
        />
      </div>
    </div>
    {{ data }}
  </div>
</template>

<script>
import Heading from '@/common/components/Heading/Heading';
import Select from '@/common/components/Select/Select';

import citizenship from '@/assets/data/citizenships.json';
import passports from '@/assets/data/passport-types.json';
import TextInput from '@/common/components/TextInput/TextInput';
import Radio from '@/common/components/Radio/Radio';

export default {
  name: 'PassportData',
  components: { Radio, TextInput, Select, Heading },
  data() {
    return {
      citizenship,
      passports,
      data: {
        citizenship: '',
        passportSerial: '',
        passportNumber: '',
        passportDate: '',
        latinSurname: '',
        latinName: '',
        anotherPassportNumber: '',
        passportCountry: '',
        passportType: '',
        changeName: 'Нет',
        anotherSurname: '',
        anotherName: ''
      }
    };
  },
  methods: {
    setCitizenship(data) {
      this.data.citizenship = data['nationality'];
    },
    setCountry(data) {
      this.data.passportCountry = data['nationality'];
    },
    setPassportType(data) {
      this.data.passportType = data['type'];
    }
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

.passport-container {
  display: flex;
  grid-gap: 15px;
}

.passport-container__another {
  display: flex;
  flex-direction: column;
}

.passport-container__name {
  display: flex;
  grid-gap: 15px;
}

.passport-container__passport {
  display: flex;
  grid-gap: 15px;
}

.change-container {
  display: flex;
  grid-gap: 15px;
}

.full-name {
  display: flex;
  margin-top: 20px;
  grid-gap: 15px;
}
</style>
