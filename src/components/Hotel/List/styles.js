import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: '20vh', marginBottom: '2vh',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '10px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '55vh', overflow: 'auto',
  },
}));