module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
  
    fontFamily:{
      aHelvetica:"Arabic Helvetica"
    },
    extend: {
      colors:{
        primary:"#5830C5",
        primaryHovered:"#312490",
        header:'#F2F2F2'
      },
      fontFamily:{
        aHelvetica:"Arabic Helvetica"
      },
      fontSize:{
        'xx':'.5rem'
      }
    }
  },
  variants: {
    extend: {
    
    }
  },
  plugins: []
}
