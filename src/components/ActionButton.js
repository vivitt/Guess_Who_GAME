import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";
import { borderRadius, textTransform } from "@mui/system";
import { pink, deepPurple, teal, yellow } from "@material-ui/core/colors";

const styles = () => ({
    default: {
        borderRadius: 30,
        textTransform: 'none'
    },
    primary: {

        '&:hover': { // changes colors for button hover state
    
          backgroundColor: teal[200],
    
          color: deepPurple[900],
    
        },
    
      },
})
export const ActionButton = ({color, text, action }) => {
    return (
        <Button variant="contained" color={color} onClick={action}>{text}</Button>
    )
}

ActionButton.propTypes = {
    color: PropTypes.string
}


