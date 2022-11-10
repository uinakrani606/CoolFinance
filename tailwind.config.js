/* @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryBlue: '#0770E5',
      primaryDarkBlue: '#00215F', 
      black:'#000',
      white:'#fff',
      white100:'#E0E0E0',
      gray100:'#E0E0E066',
      gray200:'#E0E0E080',
      gray300:'#E0E0E0',
      gray400:'#E8E8E8',
      gray900:'#333333',
      
    },
    extend: {
      boxShadow: {
        'blog-box': '0px 29px 40px 0px rgba(63, 54, 169, 0.15)',
        'button-shadow': '0px 15px 30px 0px rgba(0, 0, 0, 0.2)',
        'rectangle-shadow': '0px 31px 38px 0px rgba(63, 54, 169, 0.4)',
        'home-serviceshadow': '0px 2px 10px 0px rgba(63, 54, 169, 0.15)',
        'we-like-project': '-4.314px 30.698px 27px 0px rgba(10, 10, 10, 0.4)',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px', 
      'xxl': '1480px',

    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1480px',
      },
    },
  },
  plugins: [],
}



