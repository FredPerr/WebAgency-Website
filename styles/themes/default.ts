import { createTheme } from "@mui/material/styles";
import shadows from "@mui/material/styles/shadows";

const shadowsEdited = shadows

shadowsEdited[1] = '0px 0px 10px rgba(65, 164, 255, 0.19)'

const defaultTheme = createTheme({
    typography: {
        fontWeightRegular: 400,
        fontFamily: [
            '"Montserrat"',
            'sans-serif'
        ].join(',')
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
    shadows: shadowsEdited,
    palette: {
        mode: 'light',
        primary: {
            main: "#1877F2",
            dark: "#357ED2",
            light: "#41A4FF",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#474747",
            dark: "#0F0F0F",
            light: "#5F6368",
            contrastText: "#FFFFFF"
        },
        background: {
            default: "#FFFFFF",
            paper: "#FBFBFB",
        },
        success: {
            main: '#6CCB64'
        },
        error: {
            main: '#FF0000'
        },
        text: {
            primary: '#1D1D1D',
            secondary: '#4E4E4E'
        },
        grey: {
            '500': '#5F6368',
            "700": '#3C4043'
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                color: "transparent",
                elevation: 0
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    [theme.breakpoints.up('md')]: {
                        paddingLeft: 20,
                        paddingRight: 20
                    },
                    [theme.breakpoints.down('md')]: {
                        paddingLeft: 3,
                        paddingRight: 3
                    },
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease-in-out'
                })
            }
        },
        MuiButton: {
            defaultProps: {
                color: 'primary',
                variant: "contained",
                disableElevation: true
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    borderRadius: '3px',
                    fontWeight: 600,
                    width: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    [theme.breakpoints.down('md')]: {
                        fontSize: 10
                    },
                    [theme.breakpoints.up('xl')]: {
                        fontSize: 20
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: 13,
                        marginRight: 5
                    },
                    ...(ownerState.variant === "contained" && ownerState.color === "primary" && {
                        boxShadow: shadowsEdited[1],
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light
                        }
                    }),
                    ...(ownerState.variant === 'outlined') && {
                        borderWidth: '1px',
                        whiteSpace: 'nowrap',
                        width: 'fit-content',
                        fontWeight: 500,
                        color: theme.palette.primary.light
                    }
                })
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState.type === "email" || ownerState.type == "tel" || (ownerState.type == "text" && !ownerState.multiline)) && {
                        border: '1px solid black',
                        borderColor: theme.palette.primary.light,
                        borderRadius: '3px',
                        width: '238px',
                        padding: '12px auto 12px 24px',
                        background: theme.palette.background.default,
                        color: theme.palette.text.secondary,
                        fontSize: '13px'
                    },
                    ...(ownerState.type === "checkbox") && {
                        width: '15px',
                        height: '15px',
                        border: '1px solid black',
                        borderColor: theme.palette.primary.light,
                        borderRadius: '3px'
                    },
                    ...(ownerState.type === "text" && ownerState.multiline) && {
                        border: '1px solid black',
                        borderColor: theme.palette.primary.light,
                        borderRadius: '3px',
                        width: '498px',
                        padding: '12px auto 12px 24px'
                    }
                })
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: ({ theme }) => ({
                    color: theme.palette.primary.light
                }),
                select: {
                    color: '#5F6368',
                    fontSize: '11px'
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.light,
                    borderWidth: '1px',
                    borderRadius: '3px',
                    '&.Mui-checked': {
                        color: theme.palette.primary.light
                    }
                })
            }
        },

        MuiTypography: {
            styleOverrides: {
                root: ({ ownerState, theme }) => ({
                    ...(ownerState.variant === 'h1') && {
                        [theme.breakpoints.down('xl')]:{
                            fontSize: 24,
                        },
                        [theme.breakpoints.up('xl')]:{
                            fontSize: 50,
                        },
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    },
                    ...(ownerState.variant === 'h2') && {
                        [theme.breakpoints.down('xl')]:{
                            fontSize: 32,
                        },
                        [theme.breakpoints.up('xl')]:{
                            fontSize: 50,
                        },
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    },
                    ...(ownerState.variant === 'h3') && {
                        fontSize: 20,
                        fontWeight: 600,
                        color: theme.palette.text.secondary
                    },
                    ...(ownerState.variant === 'h4') && {
                        fontSize: 20,
                        fontWeight: 400,
                        color: theme.palette.text.primary
                    },
                    ...(ownerState.variant === 'h5') && {
                        [theme.breakpoints.down('md')]:{
                            fontSize: 14,
                        },
                        [theme.breakpoints.up('xl')]:{
                            fontSize: 25,
                        },
                        fontSize: 18,
                        fontWeight: 500,
                        color: '#5F6368',
                    },
                    ...(ownerState.variant === 'h6') && {
                        fontSize: 13,
                        fontWeight: 600,
                        color: theme.palette.grey[700],
                    },
                    ...(ownerState.paragraph && ownerState.variant == "body2") && {
                        [theme.breakpoints.down('md')]:{
                            fontSize: 11,
                        },
                        [theme.breakpoints.up('xl')]:{
                            fontSize: 20,
                        },
                        fontSize: 13,
                        fontWeight: 400,
                        color: theme.palette.text.primary,
                        marginBottom: 0,
                    },
                    ...(ownerState.variant === 'caption') && {
                        fontSize: 11,
                        fontWeight: 400,
                        color: theme.palette.primary.light
                    },
                    ...(ownerState.component === 'a') && {
                        color: theme.palette.primary.light,
                        fontSize: 16,
                        fontWeight: 400,
                        cursor: 'pointer'
                    },
                    ...(ownerState.variant==="subtitle2") && {
                        color: theme.palette.grey[600],
                        fontSize: 14.5,
                        fontWeight: 500,
                    }
                })
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderStyle: 'dotted',
                    borderBottomWidth: 1,
                    borderColor: theme.palette.primary.light,
                    width: '100px',
                    textAlign: 'center',
                    margin: '0.5em auto'
                })
            }
        }
    }
})

export default defaultTheme;