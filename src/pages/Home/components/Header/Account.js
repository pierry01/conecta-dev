import React, { useState, useRef, Fragment } from 'react'
import { Avatar, Menu, MenuItem } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../../../actions/accountActions'

const Account = () => {
  const account = useSelector(state => state.account)
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const dispatch = useDispatch()

  const isAuthenticated = !!account.user

  const handleOpen = () => { setIsOpen(true) }
  const handleClose = () => { setIsOpen(false) }
  
  const handleSignOut = () => {
    handleClose()
    dispatch(signOut())
  }

  return (
    <Fragment>
      <Avatar
        ref={ref}
        onClick={handleOpen}
        alt='Avatar'
        src={account.user && account.user.avatar}
      />

      {
        isAuthenticated ?
          <Menu
            getContentAnchorEl={null}
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={isOpen}
            onClose={handleClose}
          >
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Meus Favoritos</MenuItem>
            <MenuItem>Meus Posts</MenuItem>
            <MenuItem>Minhas Conexões</MenuItem>
            <MenuItem onClick={handleSignOut}>Sair</MenuItem>
          </Menu>
        :
          <Menu
            getContentAnchorEl={null}
            anchorEl={ref.current}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={isOpen}
            onClose={handleClose}
          >
            <MenuItem>Registrar</MenuItem>
            <MenuItem>Entrar</MenuItem>
          </Menu>
      }
    </Fragment>
  )
}

export default Account
