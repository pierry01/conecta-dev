import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

import {
  Typography,
  Grid,
  Box,
  Avatar,
  TextField,
  Button,
  FormHelperText,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/background.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(0, 4),
  },
}))

const SignIn = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()

  const handleSignIn = async () => {
    try {
      await authService.signIn(email, password)
      navigate('/')
    } catch (error) {
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        md={7}
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de software!
          </strong>
        </Typography>

        <Typography
          variant='body2'
          style={{
            color: 'rgba(255,255,255,0.7)',
            marginTop: 30,
            fontSize: 15,
            lineHeight: '30px',
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
          software
        </Typography>
      </Grid>

      <Grid
        item
        md={5}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant='h5'>Acesso</Typography>

          <form className={classes.form} autoComplete='off'>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='E-mail'
              name='email'
              autoFocus
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='password'
              label='Senha'
              type='password'
              name='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              color='primary'
              variant='contained'
              className={classes.button}
              onClick={handleSignIn}
            >
              Entrar
            </Button>

            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignIn
