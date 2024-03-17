/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-background': '#F2F2F2',
        'nature-green': '#B4CD93',
        'default': '#4C4C4C',
        'logout-red': '#A65959',
        'red-bg': "#EDDEDE",
        'unselected-text': '#808080',
        'light-gray': '#E6E6E6',
        'alt-gray': '#B3B3B3',
        'search-bar': '#FAFAFA',
        'table-main-row': "#F7F7F7",
        'table-secondary-row': "#FCFCFC",
        'verified-text': '#427A5B',
        'verified-bg': '#DEEDE5',
        'pending-text': '#938406',
        'pending-bg': '#FDF8CE',
        'unverified-text': '#999999',
        'unverified-bg': '#FAFAFA',
      },
    },
  },
  plugins: [],
}
