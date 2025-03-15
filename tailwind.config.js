/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    conrainer:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#323232',
        dark:'#0f172a',
        secondary:'#64748b',
        krem:'#DDD0C8',
        abu:'#323232',
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

