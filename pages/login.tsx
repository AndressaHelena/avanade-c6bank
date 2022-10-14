import React, { FormEvent, useEffect, useState } from 'react';

import {  
    Typography, 
    Container, 
    Button, 
    Avatar, 
    TextField, 
    Checkbox, 
    Grid, 
    Box, 
    CssBaseline, 
    FormControl,
    FormControlLabel,
    Stack,
    Snackbar} from '@mui/material'
import { typography } from '@mui/system';
import { type } from 'os';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

type CopyProps = {
    site?: string;
}

function Copyright(props: CopyProps){
    return(
        <Typography>
            {'Copyright ©️'}
            <Link color='inherit' href={`https://www.${props.site}.com`}>
            {props.site}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

{/*<Snackbar open={open} duration={6} message={'Usuário logado com sucesso! ...Aguarde...'}
 */}

const theme = createTheme();

export default function LoginPage() {

const[email, setEmail] = useState<string | undefined | null | FormDataEntryValue> ('')
const[password, setPassword] = useState<string | undefined | null | FormDataEntryValue> ('')
const [error, setError] = useState<string | boolean>('');
const [errorMessage, setErrorMessage] = useState<string>('');
const [open, setOpen] = useState<boolean>(false);
const [contador,setContador] = useState<number>(0);


const handleClose = () =>{
    setOpen(false);
}



useEffect(()=>{

    if(contador == 0){
        document.title = `Executando useEffect a 1x. O contador ${contador}`;
    }else{
        document.title = `Executando useEffect ${contador} vezes`;
    }
    console.log(`Executando useEffect ${contador} vezes`)
},[contador]);
    


const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setPassword(data.get('email'));
    
}

useEffect(()=>{
    
    if(password && password.length < 6){
        setError(true)
        setErrorMessage('Senha precisa ter no mínimo 6 caracteres')
    }else if(password){
        setError(false)
        setErrorMessage('') 
        setOpen(true);
    }

},[password])

  return (
    <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
    <Stack>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Usuário logado com sucesso! ...Aguarde...
        </Alert>
        </Snackbar>
    </Stack>

            <button onClick={()=>setContador(contador+1)}>Mudando o Contador</button>
            Contador vale {contador}
            <Box sx={{mt:8, 
                display:'flex', 
                flexDirection:'column',
                alignItems:'center'
                }}>
                <Typography component='h1' variant='h5'>Tela de Login</Typography>
            </Box>
            <Box component='form' onSubmit={handleSubmit} sx={{mt:1}}>
                <TextField autoFocus margin='normal' required id='email' name='email' 
                fullWidth label='Digite o e-mail' autoComplete='email'/>

                <TextField margin='normal' required fullWidth id='password' 
                name='password' type='password' label='Digite a senha' autoComplete='current-password'/>

                <FormControlLabel
                control={<Checkbox value='remember' color="primary"/>}
                label="Lembrar-me"  
                />      
                <Button type='submit' fullWidth variant='contained' sx={{mt:3, mb:2}}>
                Login    
                </Button>    
                {error && <Typography color="error">{errorMessage}</Typography>}    
            </Box>
            
            <Copyright site="Avanade" />
        </Container>
    </ThemeProvider>
  )
}
