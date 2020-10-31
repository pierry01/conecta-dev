import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SvgIcon from '@material-ui/core/SvgIcon'
import { Bell } from 'react-feather'
import Account from './Account'

const useStyles = makeStyles({
  appBar: { boxShadow: 'none' },
  img: { maxHeight: 55 },
  grow: { flexGrow: 1 },
  button: { marginRight: 10 },
  bell: { marginRight: 10 },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
})

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} position='fixed' color='inherit'>
      <Toolbar>
        <img src='/images/logo.png' className={classes.img} alt='logo' />

        <div className={classes.grow} />

        <div className={classes.userSection}>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
          >
            Novo Post
          </Button>

          <SvgIcon className={classes.bell}>
            <Bell />
          </SvgIcon>
          
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
