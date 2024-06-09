import './assets/css/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Toast, { POSITION, type PluginOptions } from 'vue-toastification'
import { defineRule, configure } from 'vee-validate'
import { all } from '@vee-validate/rules'

import App from './App.vue'
import router from './router'

// Font Awesome
library.add(fas, fab, far)

// Vue Toastification
const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 2000,
  hideProgressBar: false,
  icon: true,
  pauseOnHover: true,
  draggablePercent: 1,
  draggable: true,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  showCloseButtonOnHover: false,
  newestOnTop: true,
  closeButton: 'button'
}

// Vee-Validate
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule)
})
defineRule('password', (value: any, [minLength]: [any]) => {
  if (!value || !value.length) {
    return true
  }

  // Check for uppercase letters
  const uppercaseLetters = /[A-Z]+/
  if (!uppercaseLetters.test(value)) {
    return 'Password must contain at least one uppercase letter'
  }

  // Check for lowercase letters
  const lowercaseLetters = /[a-z]+/
  if (!lowercaseLetters.test(value)) {
    return 'Password must contain at least one lowercase letter'
  }

  // Check for numbers
  const numbers = /\d+/
  if (!numbers.test(value)) {
    return 'Password must contain at least one number'
  }

  // Check for special characters
  const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/
  if (!specialCharacters.test(value)) {
    return 'Password must contain at least one special character'
  }

  // Check for minimum length
  if (value.length < minLength) {
    return `Password must be at least ${minLength} characters long`
  }

  // If all conditions are met, the password is valid
  return true
})

defineRule('phone', (value: any) => {
  if (!value || !value.length) {
    return true
  }
  const phoneNumberRegex =
    /^(?:\+8801|8801|01)[3-9]\d{8}$|^(?:\+1|1)?[-.\s]?\(?[2-9][0-8][0-9]\)?[-.\s]?[2-9][0-9]{2}[-.\s]?[0-9]{4}$|^[789]\d{9}$/
  if (!phoneNumberRegex.test(value)) {
    return 'Invalid phone number'
  }
  return true
})

defineRule('bdPhone', (value: any) => {
  if (!value || !value.length) {
    return true
  }
  const bdPhoneNumberRegex = /^(?:\+8801|01)[3-9]\d{8}$/
  if (!bdPhoneNumberRegex.test(value)) {
    return 'Invalid Bangladeshi phone number'
  }
  return true
})

configure({
  bails: true,
  validateOnInput: true,
  validateOnBlur: true,
  validateOnChange: true,
  generateMessage: (context) => {
    const field = context.field
    const ruleName = context.rule?.name
    const params = (context.rule?.params as unknown[]) || []

    let message = `The field ${field} is invalid!`
    switch (ruleName) {
      case 'required':
        message = `The field ${field} is required`
        break
      case 'email':
        message = `The field ${field} must be a valid email`
        break
      case 'alpha':
        message = `The field ${field} may only contain alphabetic characters`
        break
      case 'alpha_dash':
        message = `The field ${field} may contain alpha-numeric characters as well as dashes and underscores`
        break
      case 'alpha_num':
        message = `The field ${field} may only contain alpha-numeric characters`
        break
      case 'alpha_spaces':
        message = `The field ${field} may only contain alphabetic characters and spaces`
        break
      case 'between':
        message = `The field ${field} must be between ${params[0]} and ${params[1]}`
        break
      case 'confirmed':
        message = `The field ${field} does not match`
        break
      case 'digits':
        message = `The field ${field} must be numeric and exactly contain ${params[0]} digits`
        break
      case 'dimensions':
        message = `The field ${field} must be between ${params[0]} and ${params[1]} pixels`
        break
      case 'not_one_of':
        message = `The field ${field} contains an invalid value`
        break
      case 'ext':
        message = `The field ${field} must have a valid file extension`
        break
      case 'image':
        message = `The field ${field} must be an image`
        break
      case 'one_of':
        message = `The field ${field} must be one of the allowed values`
        break
      case 'integer':
        message = `The field ${field} must be an integer`
        break
      case 'is':
        message = `The field ${field} must be ${params[0]}`
        break
      case 'is_not':
        message = `The field ${field} must not be ${params[0]}`
        break
      case 'length':
        message = `The field ${field} must be exactly ${params[0]} characters long`
        break
      case 'max':
        message = `The field ${field} may not be greater than ${params[0]} characters`
        break
      case 'max_value':
        message = `The field ${field} must be ${params[0]} or less`
        break
      case 'mimes':
        message = `The field ${field} must have a valid MIME type`
        break
      case 'min':
        message = `The field ${field} must be at least ${params[0]} characters`
        break
      case 'min_value':
        message = `The field ${field} must be ${params[0]} or more`
        break
      case 'numeric':
        message = `The field ${field} may only contain numeric characters`
        break
      case 'regex':
        message = `The field ${field} format is invalid`
        break
      case 'size':
        message = `The field ${field} size must be less than ${params[0]}KB`
        break
      case 'url':
        message = `The field ${field} must be a valid URL`
        break
      default:
        message = `The field ${field} is invalid`
        break
    }

    return message
  }
})

const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')
