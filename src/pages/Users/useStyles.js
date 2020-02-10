import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    marginTop: 30,
  },

  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontStyle: 'normal',
    marginTop: 30,
    textTransform: 'uppercase',
    backgroundClor: 'blue',
  },

  divider: {
    width: 140,
    height: 2,
    background: 'black',
    position: 'absolute',
    left: 'calc(50% - 60px)',
    marginTop: 8,
  },

  formUser: {
    paddingTop: 50,
  },

  formPadding: {
    paddingTop: 15,
  },

  containersSenconday: {
    paddingTop: 20,
  },

  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      borderRadius: 161,
      '& $imageBackdrop': {
        opacity: 0.15,
        borderRadius: 161,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
    borderRadius: 161,
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },

  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },

  borderLeft: {
    borderTopLeftRadius: 20,
  },
  borderRight: {
    borderTopRightRadius: 20,
  },
}));
