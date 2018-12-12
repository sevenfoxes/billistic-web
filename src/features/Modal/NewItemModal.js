import React from "react"
import "./NewItem.scss"
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { compose, withStateHandlers } from "recompose"
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const styles = ({ spacing, palette, shadows }) => ({
  paper: {
    width: spacing.unit * 50,
    backgroundColor: palette.background.paper,
    boxShadow: shadows[5],
    padding: spacing.unit * 4,
  },
})

export const NewItemModal = ({ classes, itemType, updateItemType }) => (
  <div tabIndex="-1" className={`modal ${classes.paper}`}>
    <Typography variant="h5" component="h2">
      Add New Item
    </Typography>
    <br />
    <form className="form form_new_item">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple">Item Type</InputLabel>
        <Select
          value={itemType}
          onChange={updateItemType}
          inputProps={{
            name: 'type',
            id: 'income-expense',
          }}
        >
          <MenuItem value='expense'>Expense</MenuItem>
        </Select>
      </FormControl>
    </form>
  </div>
)

export const enhance = compose(
  withStateHandlers(
    ({ initialItemType = 'expense' }) => ({ itemType: initialItemType }),
    {
      updateItemType: () => ({ target }) => ({ itemType: target.value }),
    })
)

export default compose(
  withStyles(styles),
  enhance,
)(NewItemModal)
