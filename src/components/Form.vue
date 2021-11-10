<template>
  <form class="root-form">
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
      <div class="birthday">
        <TextInput
          title="Дата рождения"
          v-model.trim="formData.birthday"
          placeholder="дд.мм.гггг"
          v-mask="'##.##.####'"
          @input="$v.formData.birthday.$touch()"
          :subtitle="
            $v.formData.birthday.$error
              ? 'Поле должно быть заполнено в формате дд.мм.гггг, а дата должна быть не позже сегодняшней'
              : ''
          "
          :error-validate="$v.formData.birthday.$error"
        />
      </div>
      <div class="email">
        <TextInput
          type="email"
          title="E-mail"
          v-model.trim="formData.email"
          placeholder="ivanov.ivan@example.io"
          @input="$v.formData.email.$touch()"
          :subtitle="
            $v.formData.email.$error
              ? 'Поле email должны быть заполнено в формате ivanov.ivam@example.io'
              : ''
          "
          :error-validate="$v.formData.email.$error"
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
    <div class="passport-data">
      <Heading class="title" heading-type="h2">Паспортные данные</Heading>
      <Select
        label="Гражданство"
        :items="citizenship"
        selection-field="nationality"
        @sendActiveItem="setCitizenship"
      />
      <div class="passport-container" v-if="formData.citizenship === 'Russia'">
        <TextInput
          title="Серия паспорта"
          v-model.trim="formData.passportSerial"
          v-mask="'####'"
          placeholder="1234"
          :subtitle="
            $v.formData.passportSerial.$invalid
              ? `Серия паспорта должна иметь ${$v.formData.passportSerial.$params.minLength.min} символов`
              : ''
          "
          :error-validate="$v.formData.passportSerial.$invalid"
        />
        <TextInput
          title="Номер паспорта"
          v-model.trim="formData.passportNumber"
          v-mask="'######'"
          placeholder="123456"
          :subtitle="
            $v.formData.passportNumber.$invalid
              ? `Номер паспорта должен иметь ${$v.formData.passportNumber.$params.minLength.min} символов`
              : ''
          "
          :error-validate="$v.formData.passportNumber.$invalid"
        />
        <TextInput
          title="Дата выдачи"
          placeholder="дд.мм.гггг"
          v-model.trim="formData.passportDate"
          v-mask="'##.##.####'"
        />
      </div>
      <div
        class="passport-container__another"
        v-if="formData.citizenship !== 'Russia' && formData.citizenship"
      >
        <div class="passport-container__name">
          <TextInput
            title="Фамилия на латинице"
            v-model.trim="formData.latinSurname"
            placeholder="Ivanov"
            v-mask="'EEEEEEEEEEEEEEEEEEEE'"
          />
          <TextInput
            title="Имя на латинице"
            v-model.trim="formData.latinName"
            placeholder="Ivan"
            v-mask="'EEEEEEEEEEEEEEEEEEEE'"
          />
        </div>
        <div class="passport-container__passport">
          <TextInput
            title="Номер паспорта"
            v-model.trim="formData.anotherPassportNumber"
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
          <Radio value="Нет" v-model="formData.changeName" />
          <Radio value="Да" v-model="formData.changeName" />
        </div>
        <div class="full-name" v-if="formData.changeName === 'Да'">
          <TextInput
            title="Фамилия"
            v-model.trim="formData.anotherSurname"
            v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
            placeholder="Иванов"
          />
          <TextInput
            title="Имя"
            v-model.trim="formData.anotherName"
            v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
            placeholder="Иван"
          />
        </div>
      </div>
    </div>
    <ButtonComponent class="button" @click="sendData"
      >Отправить</ButtonComponent
    >
  </form>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators';
import moment from 'moment';

import ButtonComponent from '@/common/components/Button/ButtonComponent';
import TextInput from '@/common/components/TextInput/TextInput';
import Heading from '@/common/components/Heading/Heading';
import Radio from '@/common/components/Radio/Radio';
import Select from '@/common/components/Select/Select';

import citizenship from '@/assets/data/citizenships.json';
import passports from '@/assets/data/passport-types.json';

export default {
  components: {
    ButtonComponent,
    TextInput,
    Heading,
    Radio,
    Select
  },
  data() {
    return {
      citizenship,
      passports,
      formData: {
        name: '',
        surname: '',
        patronymic: '',
        birthday: '',
        email: '',
        sex: 'Мужской',
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
      this.formData.citizenship = data['nationality'];
    },
    setCountry(data) {
      this.formData.passportCountry = data['nationality'];
    },
    setPassportType(data) {
      this.formData.passportType = data['type'];
    },

    sendData() {
      if (this.$v.$invalid) {
        window.alert('Сначала заполните все поля по правилам!');
      } else {
        console.log('Data: ', this.formData);
      }
    }
  },
  validations: {
    formData: {
      birthday: {
        validFormat: (val) => {
          if (val) {
            return /^(0[1-9]|1[0-2]).(0[1-9]|1\d|2\d|3[01]).(19|20)\d{2}$/.test(
              val
            );
          } else {
            return true;
          }
        },
        validDate: (val) => {
          if (val) {
            return !moment(val).isAfter(moment(new Date()));
          } else {
            return true;
          }
        }
      },
      email: {
        validFormat: (val) => {
          if (val) {
            return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(val);
          } else {
            return true;
          }
        }
      },
      passportSerial: {
        minLength: minLength(4)
      },
      passportNumber: {
        minLength: minLength(6)
      }
    }
  }
};
</script>

<style scoped>
.root-form {
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 700px;
}

.personal-data {
  margin-bottom: 30px;
}

.title {
  margin-bottom: 15px;
}

.select-container {
  margin-bottom: 20px;
}

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

.button {
  margin-left: auto;
}
</style>
