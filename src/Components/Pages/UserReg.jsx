import React from 'react';
import Grid from '@material-ui/core/Grid'
import { Box, FormLabel, Radio, FormControlLabel, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(5),
            width: theme.spacing(45),
            height: theme.spacing(90),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 300,
            alignSelf: "center",
        },
    },
}));


function UserReg() {
    const classes = useStyles();

    const [value, setValue] = React.useState('3-Staf Prodi');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return(
        <Grid
            container
            direction="column"
            alignContent="center"
            alignItems="center"
        >
            <Card className={classes.root}>
                <Box mx="auto">
                    <CardHeader title="Form Pendaftaran User Baru" />
                    <form>
                        <CardActions>                 
                            <Box mx="auto">
                                <TextField required name="username" label="user name" type="text" />
                                    <TextField required name="pswd" label="password" type="password" /> 
                                    <TextField required name="pswd2" label="konfirmasi password" type="password" />
                                    <TextField required name="Nama_Depan" label="nama depan" type="text" />
                                    <TextField required name="Nama_Belakang" label="nama belakang" type="text" />
                                    <TextField required name="email" label="email" type="email" />           
                            </Box>                                   
                        </CardActions>
                        <CardActions>
                            <Box>
                                <FormLabel>Jabatan</FormLabel>        
                                        <RadioGroup aria-label="Jabatan" name="Jabatan" value={value} onChange={handleChange}>
                                            <FormControlLabel value="1-Kaprodi" control={<Radio />} label="Kaprodi" />
                                            <FormControlLabel value="2-Staf Akademik" control={<Radio />} label ="Staf Akademik" />
                                            <FormControlLabel value="3-Staf Prodi" control={<Radio />} label="Staf Prodi" />
                                            <FormControlLabel value="4-Dosen" control={<Radio />} label="Dosen" />
                                        </RadioGroup>     
                            </Box> 
                        </CardActions>
                        <CardActions>
                            <Box mx="auto">
                                <Button style={{marginRight:"10px"}} variant="contained" color="primary">
                                    Daftar
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Batal
                                </Button>
                            </Box> 
                        </CardActions>
                    </form>        
                </Box>
            </Card>
        </Grid>
    )
}

export default UserReg