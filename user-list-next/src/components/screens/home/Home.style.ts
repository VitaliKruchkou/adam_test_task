import { css } from '@emotion/css'

export const useStyles = () => ({
  container: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '80%',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      '& > div:nth-child(2n)': {
        marginLeft: 30,
      },
    },
    '@media (min-width: 1150px) and (max-width: 1720px)': {
      '& > div': {
        marginLeft: 30,
      },
    },
    '@media (min-width: 1730px)': {
      '& > div': {
        marginLeft: 10,
      },
    },
  }),
  formContainer: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    margin: '0 auto',
    padding: '25px 0',
    '@media (max-width: 1240px)': {
      width: 400,
    },
  }),
})
