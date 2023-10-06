import { css } from '@emotion/css'

export const useStyles = () => ({
  container: css({
    width: 300,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 40,
    textAlign: 'left',
  }),
})
