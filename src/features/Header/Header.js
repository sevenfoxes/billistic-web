import React from "react"
import "./header.scss"

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddIcon from '@material-ui/icons/AddCircle'
import { compose, withState, withHandlers } from "recompose"
import { NewItemModal, withModalState } from '../Modal'
import { Modal } from "@material-ui/core"


export const Header = ({ open, toggleDrawerHandler, openModal, closeModal, showModal }) => (
  <div className="site_header">
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon onClick={toggleDrawerHandler} />
        </IconButton>
        <h1 className="site_header__title">
          Billistic
        </h1>
        <IconButton onClick={openModal} color="inherit">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={toggleDrawerHandler}
    >
      <div>
        <IconButton onClick={toggleDrawerHandler}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Add Item'].map(text => (
          <ListItem button key={text}>
            <ListItemIcon>
              <AddIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    <Modal open={showModal} onClose={closeModal}>
      <NewItemModal />
    </Modal>
  </div>
)

export default compose(
  withState('open', 'setOpen', false),
  withModalState,
  withHandlers({
    toggleDrawerHandler: ({ open, setOpen }) => () => setOpen(!open),
  })
)(Header)
