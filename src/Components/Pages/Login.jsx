import React from 'react';
import Axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'
import App from '../../App';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        backgroundColor: "white",
        height: 180,
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

    const [userName, setUserName] = React.useState();
    const [pswd, setPswd] = React.useState();
    const [responseItem, setResponseItem] = React.useState([]);
    const [responseStatus, setResponseStatus] = React.useState();

    const url ="http://localhost/ppia-react/src/API/login/index.php";
    const options = {
        url: url,
        method: 'POST',
        data: {
            username: userName,
            pswd: pswd
        }
    };


    async function HandleLogin() {
        await Axios(options)
                .then(response => {
                    setResponseItem(response.data);
                    setResponseStatus(response.status);
                })
    };

    console.log(responseStatus, responseItem);
    
    if (responseStatus === 202) {
        localStorage.setItem('isLoggedIn', true);
        window.location.reload();
    }

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
                <Card className={classes.root} elevation={2}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <CardActions>    
                                <Box mx="auto">
                                    <div>
                                        <TextField required 
                                            id="username"
                                            label="username"
                                            type="text"
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <TextField required
                                            id="pswd"
                                            label="Password"
                                            type="password"
                                            onChange={(e) => setPswd(e.target.value)}
                                        />
                                    </div>   
                                </Box>                                   
                        </CardActions>
                        <CardActions>
                            <Box mx="auto">
                                <Button
                                    style={{marginRight:"10px"}}
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) => HandleLogin(e)}
                                >
                                    Login
                                </Button>
                                <Link to="/userreg">
                                    <Button variant="contained">
                                        Daftar
                                    </Button>
                                </Link>
                            </Box>         
                        </CardActions>
                    </form>
                </Card>
            </Grid>       
        </Grid>

        
    )
}