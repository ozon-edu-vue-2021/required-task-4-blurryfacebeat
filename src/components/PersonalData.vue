<template>
  <div class="personal-data">
    <Heading class="title" heading-type="h2">Личные данные</Heading>
    <div class="full-name">
      <TextInput title="Фамилия" v-model.trim="data.fullName.name" />
      <TextInput title="Имя" v-model.trim="data.fullName.surname" />
      <TextInput title="Отчество" v-model.trim="data.fullName.patronymic" />
    </div>
    <div class="birthday">
      <TextInput
        title="Дата рождения"
        v-model.trim="data.birthday"
        placeholder="дд.мм.гггг"
      />
    </div>
    <div class="email">
      <TextInput type="email" title="E-mail" v-model.trim="data.email" />
    </div>
    <div class="sex">
      <Heading class="title">Пол</Heading>
      <div class="sex-container">
        <Radio value="Мужской" v-model="data.sex" />
        <Radio value="Женский" v-model="data.sex" />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/common/components/Heading/Heading';
import TextInput from '@/common/components/TextInput/TextInput';
import Radio from '@/common/components/Radio/Radio';

export default {
  name: 'PersonalData',
  components: { Radio, TextInput, Heading },
  data() {
    return {
      data: {
        fullName: {
          name: '',
          surname: '',
          patronymic: ''
        },
        birthday: '',
        email: '',
        sex: 'Мужской'
      }
    };
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 15px;
}

.input-container {
  margin-bottom: 20px;
}

.full-name {
  display: flex;
  grid-gap: 15px;
}

.sex .title {
  margin-bottom: 10px;
}

.sex-container {
  display: flex;
  grid-gap: 15px;
}
</style>
