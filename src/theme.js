import { createTheme } from "@material-ui/core";
import { pink, deepPurple, teal, yellow, grey } from "@material-ui/core/colors";
import { CenterFocusStrong } from "@mui/icons-material";
import { flexbox, textAlign } from "@mui/system";

const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
            contrastText: yellow[300],
            accent: grey[100],
            input: yellow[200],
        },
        secondary: {
            main: teal[100],
            over: teal[200],
            contrastText: pink[500],
            backgroundColor: deepPurple[200],
            hover: deepPurple[400]
        }
    }
  

    
})

theme.props = {

    MuiButton: { // `MuiButton` is the global class name for the <Button /> component
  
      disableElevation: true, // this prop disables the drop shadow on all Buttons
  
    },
    MuiPaper: {

    }, 
    MuiInputLabel: {
        //shrink: true
    }, 
    MuiInput: {
        disableUnderline: true,
    }, 
    MuiSelect: {
      //autoWidth: true,
    }
  
  };
  theme.overrides = {

    MuiButton: {
  
      root: {
        fontFamily: 'VT323',
        borderRadius: 10, // square corners
        //backgroundColor: theme.palette.secondary.main,
        textTransform: 'none', // removes uppercase transformation
  
      },
      containedPrimary: {
        backgroundColor: theme.palette.secondary.main,
        //fontWeight: 700, // makes text bold
        textTransform: 'uppercase',
       
        fontSize: '1.5rem', 
        color: theme.palette.primary.main,
        '&:hover': { // changes colors for hover state
  
            backgroundColor: theme.palette.secondary.over,
    
            
  
            },
  
        },
  
      containedSecondary: {
        backgroundColor: theme.palette.secondary.backgroundColor,
        //fontWeight: 700, // makes text bold
        //textTransform: 'uppercase',
        
        fontSize: '1.2rem', 
        color: theme.palette.primary.accent,
        padding: '0.2rem',
        margin: '0.1rem',
        '&:hover': { // changes colors for hover state
  
            backgroundColor: theme.palette.secondary.hover,
    
            
  
            },
  
        }, 
        
        
    }, 
    MuiPaper: {
        root: {
            
            color: theme.palette.secondary.contrastText,
            display: 'inline-block',
            
            
            
        }, 
        rounded: {
          borderRadius: 30,
          backgroundColor: theme.palette.primary.contrastText, 
        }
      
     
      
    }, 
    MuiSwipeableDrawer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }
    },
    MuiTextField: {
      root: {
        backgroundColor: theme.palette.secondary.backgroundColor,
        borderRadius: 8,
        padding: 1,
        margin: 3
      }
    },

    MuiDialog: {
     root: {
        padding: 10,
      }, 
    
      paperScrollBody: {
       
      
        backgroundColor: theme.palette.primary.accent,
        
      }, 
      container: {
       
        textAlign: 'center',
        
       
      },
    
    },
    MuiDialogContent: {
      dividers: {
        color: theme.palette.primary.main, 
      
      }
    }, 

    MuiSelect: {
      select: {
        borderRadius: 10,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        width: 90,
       
      }, 
      icon: {
        color: theme.palette.primary.main
      }
    }, 
    MuiMenuItem: {
      root: {
        color: theme.palette.primary.main,
      }
    }, 
  MuiInput: {
    root: {
      color: theme.palette.primary.main,
    }, 

  }, 
  MuiAvatar: {
    circular: {
      
    }
  }
  
  
  };  
export default theme