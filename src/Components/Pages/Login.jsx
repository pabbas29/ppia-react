import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Grid, Box } from '@material-ui/core';
import { spacing } from '@material-ui/system'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        backgroundColor: "white",
    },
    pos: {
        marginBottom: 12,
    },
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
        alignSelf: "center",
    },
}));

export default function LoginCard() {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '50vh'}}
        >
            <Grid>
                <Card className={classes.root}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <CardActions>    
                                <Box mx="auto">
                                    <div>
                                        <TextField required 
                                            id="username"
                                            label="username"
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <TextField required
                                            id="pswd"
                                            label="Password"
                                            type="password"
                                        />
                                    </div>   
                                </Box>                                   
                        </CardActions>
                        <CardActions>
                            <Box mx="auto">
                                <Button style={{marginRight:"10px"}} variant="contained" color="primary">
                                    Login
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Cancel
                                </Button>
                            </Box>         
                        </CardActions>
                    </form>
                </Card>
            </Grid>       
        </Grid>

        
    )
}