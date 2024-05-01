import { defineConfig } from "windicss/helpers"
import colors from "windicss/colors"

export default defineConfig({
  darkMode: "class",
  attributify: true,
  plugins: [require("windicss/plugin/forms"), require("windicss/plugin/line-clamp")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Shantell Sans Variable", "Inter", "Prompt"],
        serif: ["Sans-serif"],
      },
      fontSize: {
        xxs: ".625rem",
      },
      colors: {
        primary: colors.teal,
        gray: colors.trueGray,
        sky: colors.sky,
      },
      backgroundImage: {
        "gamify-ribbon": "url('/images/gamify-ribbon.png')",
        "page365-package": "url('/images/page365-express-package.png')",
      },
    },
  },
  // only allow to use/create shortcut for theme component
  shortcuts: {
    // btn
    btn: "inline-flex items-center justify-center px-4 py-2 border border-solid text-sm font-medium rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2",
    "btn-wide":
      "inline-flex items-center justify-center px-10 py-2 border border-solid text-sm font-medium rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2",
    "btn-borderless":
      "p-0 border-0 shadow-none text-primary-600 hover:text-primary-500 focus:shadow-sm focus:ring-primary-500",
    "btn-primary":
      "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
    "btn-sky": "border-transparent text-white bg-sky-600 hover:bg-sky-700 focus:ring-sky-500",
    "btn-danger": "border-transparent text-white bg-red-600 hover:bg-red-700 focus:ring-red-500",
    "btn-outline": "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500",
    // form
    "form-control":
      "block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm focus:outline-none",
    // link
    "link-primary": "text-primary-600 hover:text-primary-500 cursor-pointer",
    // icon
    "icon-action-primary": "text-gray-400 hover:text-primary-500 cursor-pointer",
    // text
    "text-disable": "cursor-not-allowed text-light-900 hover:text-light-900",
  },
})
