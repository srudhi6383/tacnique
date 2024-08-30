import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e5f5f9',
      100: '#b3e0e5',
      200: '#80c2cb',
      300: '#4da3b0',
      400: '#1a8496',
      500: '#007e7f',
      600: '#006b6d',
      700: '#005859',
      800: '#004446',
      900: '#003233',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
      },
      sizes: {
        md: {
          fontSize: 'lg',
          px: 6,
          py: 4,
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '#1e90ff', 
        color: 'black', 
      },
    },
  },
});

export default theme;
