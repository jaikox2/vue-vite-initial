import messages from "@intlify/unplugin-vue-i18n/messages"
import { createI18n } from "vue-i18n"

const i18n = createI18n({
  locale: "th",
  fallbackLocale: ["en", "th"],
  messages: messages,
})

export default i18n
