import { css } from '@emotion/css'

export const useStyles = () => ({
  container: css({
    borderRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 40,
    height: 500,
    textAlign: 'left',
    padding: 20,
    minWidth: 300,
    '& > h2': {
      margin: '5px 0',
    },

    '& > a': {
      color: 'blue',
      textDecoration: 'none',
    },

    '& > p': {
      margin: 0,
    },

    '&:hover': {
      boxShadow: '0 0 11px rgba(33,33,33,.2)',
    },

    '@media (max-width: 600px)': {
      marginLeft: 50,
    },
  }),
})
