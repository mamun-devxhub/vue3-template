<script setup lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const REGISTER = '/server/en/auth/register'
const toast = useToast()

const isProcessing = ref(false)
const termsAccepted = ref(false)
const register = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  phone: '',
  is_agree_with_our_policy: 1
})

const handleRegister = async (values: any, { resetForm, setErrors }: any) => {
  isProcessing.value = true
  toast.clear()

  if (!termsAccepted.value) {
    toast.error('Terms Not Accepted')
    isProcessing.value = false
    return
  }

  try {
    const { data } = await axios.post(REGISTER, {
      first_name: register.value.first_name,
      last_name: register.value.last_name,
      email: register.value.email,
      phone: register.value.phone,
      password: register.value.password,
      password_confirmation: register.value.password_confirmation,
      is_agree_with_our_policy: register.value.is_agree_with_our_policy
    })

    if (data) {
      toast.success(data.message)
      resetForm()
    }
  } catch (e: any) {
    if (e.response.status === 422) {
      setErrors(e.response.data.message)
    } else {
      toast.error(e.response.data.message)
    }
  } finally {
    isProcessing.value = false
  }
}
</script>

<template>
  <div>
    <h1 class="title text-center">Check AXIOS</h1>
    <Form @submit="handleRegister" v-slot="{ meta }" class="form-container">
      <div class="input-wrapper">
        <label for="first_name" class="title">First name</label>
        <Field
          v-model="register.first_name"
          id="first_name"
          name="first_name"
          type="text"
          placeholder="First Name"
          rules="required|min:3"
          class="input-field"
        />
        <ErrorMessage class="error-message" name="first_name" />
      </div>
      <div class="input-wrapper">
        <label for="last_name" class="title">Last name</label>
        <Field
          v-model="register.last_name"
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Last Name"
          rules="required|min:3"
          class="input-field"
        />
        <ErrorMessage class="error-message" name="last_name" />
      </div>
      <div class="input-wrapper">
        <label for="email" class="title">Email</label>
        <Field
          v-model="register.email"
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          rules="required|email"
          class="input-field"
        />
        <ErrorMessage class="error-message" name="email" />
      </div>
      <div class="input-wrapper">
        <label for="phone" class="title">Phone Number</label>
        <Field
          v-model="register.phone"
          id="phone"
          name="phone"
          type="text"
          placeholder="Phone Number"
          rules="required|bdPhone"
          class="input-field"
        />
        <ErrorMessage class="error-message" name="phone" />
      </div>
      <div class="input-wrapper">
        <label for="password" class="title">Password</label>
        <Field
          v-model="register.password"
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          rules="required|password:8"
          class="input-field"
        />
        <ErrorMessage class="error-message" name="password" />
      </div>
      <div class="input-wrapper">
        <label for="password_confirmation" class="title">Confirm Password</label>
        <Field
          v-model="register.password_confirmation"
          id="password_confirmation"
          name="password_confirmation"
          type="text"
          placeholder="Confirm Password"
          rules="required|confirmed:@password"
          class="input-field"
        />
        <ErrorMessage class="error-message" name="password_confirmation" />
      </div>
      <div class="input-wrapper">
        <div class="checkbox-wrapper">
          <input
            v-model="termsAccepted"
            id="is_agree_with_our_policy"
            name="is_agree_with_our_policy"
            type="checkbox"
            class="checkbox"
            rules="is:on"
          />
          <label for="is_agree_with_our_policy" class="title"> I agree with our policy</label>
        </div>
      </div>
      <button
        type="submit"
        :disabled="!meta.valid || isProcessing"
        class="auth-btn cursor-pointer"
        :class="{
          'opacity-50 cursor-not-allowed': !meta.valid || isProcessing
        }"
      >
        <span>Create Account</span>
      </button>
    </Form>
  </div>
</template>

<style scoped>
.form-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px 30px;
  border-radius: 0.375rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 0.375rem;
  font-size: 18px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
.title {
  font-size: 18px;
}
.input-field {
  width: 100%;
  outline: none;
  border-radius: 0.375rem;
  height: 2rem;
  margin-top: 5px;
  padding: 20px 8px;
  border: 1px solid gray;
}
.error-message {
  font-size: 0.875rem;
  color: red;
  margin-top: 6px;
}
.checkbox-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}
.checkbox {
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  margin-right: 8px;
}

.auth-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 0.25rem;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  background-color: #f97316;
  height: 2.5rem;
  border: 1px solid #f97316;
}
.text-center {
  text-align: center;
  margin-top: 20px;
}
</style>
