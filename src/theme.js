import { createTheme } from '@mui/material/styles';

import { pink, deepPurple, teal, yellow, grey } from "@mui/material/colors";


export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500], //#673BB7
      contrastText: yellow[300], //#FFF176
      accent: grey[100],
      input: yellow[200],
    },
    secondary: {
      main: teal[100], //#9AD6CE
      over: teal[200], //#8FB8B1
      contrastText: pink[500], //#E46CAA
      backgroundColor: deepPurple[200],
      hover: deepPurple[400]
      }
    },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontFamily: 'VT323',
          borderRadius: 10, // square corners
          //backgroundColor: '#9AD6CE',
          textTransform: 'none', // removes uppercase transformatio
        },
        containedPrimary: {
          backgroundColor: '#673BB7',
          //fontWeight: 700, // makes text bold
          textTransform: 'uppercase',    
          fontSize: '1.5rem', 
          color: '#7FCDC3' ,
          '&:hover': { // changes colors for hover stat
            backgroundColor: '#482880',         
          }
        },
        containedSecondary: {
          // backgroundColor: theme.palette.secondary.backgroundColor,
          //fontWeight: 700, // makes text bold
          //textTransform: 'uppercase',     
          fontSize: '1.2rem', 
          // color: theme.palette.primary.accent,
          padding: '0.2rem',
          margin: '0.1rem',
          '&:hover': { // changes colors for hover stat
            backgroundColor: '#8FB8B1',         
          }
        }, 
      }
    },     
    MuiPaper: {
        styleOverrides: {
          root: {
          color: '#E46CAA',
          display: 'inline-block',
        }, 
        rounded: {
          borderRadius: 30,
          // backgroundColor: theme.palette.primary.contrastText,  
        }
      }
    }, 
    MuiSwipeableDrawer: {
      styleOverrides: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
      root: {
        // backgroundColor: theme.palette.secondary.backgroundColor,
        borderRadius: 8,
        padding: 1,
        margin: 3
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          padding: 10,
        }, 
      paperScrollBody: {
          // backgroundColor: theme.palette.primary.accent,
        }, 
      container: {
        textAlign: 'center',
        },
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        dividers: {
          // color: theme.palette.primary.main, 
        }
      }
    }, 
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: 10,
          // backgroundColor: theme.palette.secondary.main,
          // color: theme.palette.primary.main,
          width: 90,
        }, 
        icon: {
          // color: theme.palette.primary.main
        }
      }
    }, 
    MuiMenuItem: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.main,
        }
      }
    }, 
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
        autoFocus: true,
      },
      styleOverrides: {
        root: {
          // color: theme.palette.primary.main,
        }, 
      }
    }, 
    MuiAvatar: {
      styleOverrides: {
        circular: {
        }
      }
       
      },
    },

})

// theme.props = {
//   MuiButton: { 
//     disableElevation: true,
//     },
//   MuiPaper: {
//     }, 
//   MuiInputLabel: {
    
//     }, 
//   MuiInput: {
//     disableUnderline: true,
//     }, 
//   MuiSelect: {
//       //autoWidth: true,
    
//   }
// }
// theme.overrides = {
//   MuiButton: {
//     root: {
//       fontFamily: 'VT323',
//       borderRadius: 10, // square corners
//       //backgroundColor: theme.palette.secondary.main,
//       textTransform: 'none', // removes uppercase transformatio
//     },
//     containedPrimary: {
//       backgroundColor: theme.palette.secondary.main,
//       //fontWeight: 700, // makes text bold
//       textTransform: 'uppercase',    
//       fontSize: '1.5rem', 
//       color: theme.palette.primary.main,
//       '&:hover': { // changes colors for hover stat
//         backgroundColor: theme.palette.secondary.over,         
//       }
//     },
//     containedSecondary: {
//       backgroundColor: theme.palette.secondary.backgroundColor,
//       //fontWeight: 700, // makes text bold
//       //textTransform: 'uppercase',     
//       fontSize: '1.2rem', 
//       color: theme.palette.primary.accent,
//       padding: '0.2rem',
//       margin: '0.1rem',
//       '&:hover': { // changes colors for hover stat
//         backgroundColor: theme.palette.secondary.hover,         
//       }
//     }, 
//   },     
//   MuiPaper: {
//     root: {
//       color: theme.palette.secondary.contrastText,
//       display: 'inline-block',
//     }, 
//     rounded: {
//       borderRadius: 30,
//       backgroundColor: theme.palette.primary.contrastText,  
//     }
//   }, 
//   MuiSwipeableDrawer: {
//     root: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       textAlign: 'center',
//     }
//   },
//   MuiTextField: {
//     root: {
//       backgroundColor: theme.palette.secondary.backgroundColor,
//       borderRadius: 8,
//       padding: 1,
//       margin: 3
//     }
//   },
//   MuiDialog: {
//     root: {
//       padding: 10,
//     }, 
//     paperScrollBody: {
//       backgroundColor: theme.palette.primary.accent,
//     }, 
//     container: {
//       textAlign: 'center',
//     },
//   },
//   MuiDialogContent: {
//     dividers: {
//       color: theme.palette.primary.main, 
//     }
//   }, 
//   MuiSelect: {
//     select: {
//       borderRadius: 10,
//       backgroundColor: theme.palette.secondary.main,
//       color: theme.palette.primary.main,
//       width: 90,
//     }, 
//     icon: {
//       color: theme.palette.primary.main
//     }
//   }, 
//   MuiMenuItem: {
//     root: {
//       color: theme.palette.primary.main,
//     }
//   }, 
//   MuiInput: {
//     root: {
//       color: theme.palette.primary.main,
//     }, 
//   }, 
//   MuiAvatar: {
//     circular: {
//     }
//   }
// };  


  export default theme