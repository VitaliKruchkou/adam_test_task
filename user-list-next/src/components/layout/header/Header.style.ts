import { css } from '@emotion/css'

export const useStyles = () => ({
  container: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',

    '& > a': {
      width: 100,
      margin: '0 10px',
      color: 'black',
      transition: 'color .4s ease-in-out',
      padding: '20px 0',
      textDecoration: 'none',
      '&:hover': {
        color: '#c353c3',
      },
    },
  }),

  activeLink: {
    borderBottom: '1px solid green',
  },
})
