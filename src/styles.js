import { makeStyles } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    input: {
        width: '100%',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
    },
    button: {
        width: '100%',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        background: theme.palette.primary.main,
        color: 'white',
        '&:hover': {
            background: theme.palette.primary.dark,
        },
    },
    hashtagsContainer: {
        width: '100%',
        marginTop: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
    },
    hashtag: {
        width: '100%',
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        background: theme.palette.secondary.main,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    copyButton: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        background: theme.palette.secondary.dark,
        color: 'white',
        '&:hover': {
            background: theme.palette.secondary.main,
        },
    },
}))

export default useStyles
