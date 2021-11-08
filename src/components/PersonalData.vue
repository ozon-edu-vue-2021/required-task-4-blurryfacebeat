<template>
  <div class="personal-data">
    <Heading class="title" heading-type="h2">Личные данные</Heading>
    <div class="full-name">
      <TextInput
        title="Фамилия"
        v-model.trim="formData.name"
        v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
        placeholder="Иванов"
      />
      <TextInput
        title="Имя"
        v-model.trim="formData.surname"
        v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
        placeholder="Иван"
      />
      <TextInput
        title="Отчество"
        v-model.trim="formData.patronymic"
        v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
        placeholder="Иванович"
      />
    </div>
    <p class="subtitle">
      Фамилия, имя и отчество могут быть заполнены только кириллицей
    </p>
    <div class="birthday">
      <TextInput
        subtitle="Дата должна иметь вид 22.12.1993 и быть не позже сегодняшнего дня"
        title="Дата рождения"
        v-model.trim="formData.birthday"
        placeholder="дд.мм.гггг"
        v-mask="'##.##.####'"
      />
    </div>
    <div class="email">
      <TextInput
        type="email"
        title="E-mail"
        v-model.trim="formData.email"
        placeholder="ivanov.ivan@example.io"
      />
    </div>
    <div class="sex">
      <Heading class="title">Пол</Heading>
      <div class="sex-container">
        <Radio value="Мужской" v-model="formData.sex" />
        <Radio value="Женский" v-model="formData.sex" />
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
      formData: {
        name: '',
        surname: '',
        patronymic: '',
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

.subtitle {
  margin-top: 5px;
  margin-bottom: 20px;

  font-size: 12px;
  color: #a4afb9;
}

.full-name {
  display: flex;
  grid-gap: 15px;
}

.birthday {
  margin-bottom: 20px;
}

.email {
  margin-bottom: 20px;
}

.sex .title {
  margin-bottom: 10px;
}

.sex-container {
  display: flex;
  grid-gap: 15px;
}
</style>
