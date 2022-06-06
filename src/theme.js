import { createTheme } from '@mui/material/styles';

import { pink, deepPurple, teal, yellow, grey } from "@mui/material/colors";
import { NoEncryption } from '@mui/icons-material';


export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500], //#673BB7
      contrastText: yellow[300], //#FFF176
      accent: grey[100], //#F5F5F5
      input: yellow[200], //#FFF176
    },
    secondary: {
      main: teal[100], //#9AD6CE
      over: teal[200], //#80CBC4
      contrastText: pink[500], //#E46CAA
      backgroundColor: deepPurple[200], //#A98DB8
      hover: deepPurple[400] //#7E57C2
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
          backgroundColor: '#9AD6CE',
          //fontWeight: 700, // makes text bold
          textTransform: 'uppercase',    
          fontSize: '1.5rem', 
          color: '#673BB7' ,
          '&:hover': { // changes colors for hover stat
            backgroundColor: '#80CBC4',         
          }
        },
        containedSecondary: {
          backgroundColor: '#A98DB8',
          //fontWeight: 700, // makes text bold
          //textTransform: 'uppercase',     
          fontSize: '1.2rem', 
          color: '#F5F5F5',
          padding: '0.2rem',
          margin: '0.1rem',
          
          '&:hover': { // changes colors for hover stat
            backgroundColor: '#7E57C2',         
          }
        }, 
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
        backgroundColor: '#A98DB8',
        borderRadius: 10,
        padding: 0,
        margin: 3,
        
        }, 
      
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: '#E91E63',
          display: 'inline-block',
          backgroundColor: '#FFFFFF',
        }, 
        rounded: {
          borderRadius: 30,
          backgroundColor: '#FFF176',  
        },
        // elevation0: {
        //   backgroundColor: '#F5F5F5',
        // }, 

      }
    }, 
    MuiDialog: {
      styleOverrides: {
        root: {
          padding: 10,
        }, 
        paperScrollPaper: {
          backgroundColor: '#F5F5F5',
          textAlign: 'center',
        }, 
      container: {
        textAlign: 'center',
        },
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        dividers: { //char dialog
          color: '#673BB7', 
        }
      }
    }, 
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: 10,
          backgroundColor: '#9AD6CE',
          color: '#673BB7',
          width: 90,
        }, 
        icon: {
          color: '#673BB7'
        }
      }
    }, 
    
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#673BB7',
        }
      }
    }, 
    MuiInputLabel: {
      defaultProps: {
        // shrink: true,
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
        //autoFocus: true,
      },
      styleOverrides: {
        root: {
          color: '#673BB7'
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