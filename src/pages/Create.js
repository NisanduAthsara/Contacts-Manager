import React from 'react'
import { Container,TextField,Button,Typography,FormControl,FormControlLabel,RadioGroup,Radio,FormLabel,makeStyles } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import Drawer from '../components/Drawer'

const styles = makeStyles({
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block'
    },
    root:{
        display:'flex'
    },
    appbar:{
        width: `calc(100% - 240px)`
    }
})

export default function Create(){
    const [name,setName] = React.useState('')
    const [address,setAddress] = React.useState('')
    const [phone,setPhone] = React.useState('')
    const [type,setType] = React.useState('private')
    const [nameErr,setNameErr] = React.useState(false)
    const [addressErr,setAddressErr] = React.useState(false)
    const [phoneErr,setPhoneErr] = React.useState(false)
    const [errors,setErrors] = React.useState([])
    const classes = styles()
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        reset()
        if(!name){
            setNameErr(true)
            return
        }
        if(name.length > 15){
            setErrors(['Name is too lengthy'])
            return
        }
        if(!address){
            setAddressErr(true)
            return
        }if(!phone){
            setPhoneErr(true)
            return
        }
        fetch('http://localhost:8000/contacts',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,address,phone,type})
        }).then(()=>history.push('/'))
          
    }

    function reset(){
        setNameErr(false)
        setAddressErr(false)
        setPhoneErr(false)
        setErrors([])
    }

    return(
        <div className={classes.root}>
            <Drawer/>
            <Container className={classes.appbar}>
                <Typography variant="h4">Add New Contact</Typography>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <TextField color="secondary" label="Name" variant='filled' error={nameErr} fullWidth className={classes.field} onChange={(e)=>setName(e.target.value)}/>
                    <TextField color="secondary" label="Address" variant='filled' error={addressErr} fullWidth className={classes.field} onChange={(e)=>setAddress(e.target.value)}/>
                    <TextField color="secondary" label="Phone No." variant='filled' error={phoneErr} fullWidth className={classes.field} onChange={(e)=>setPhone(e.target.value)}/>
                    <FormControl className={classes.field}>
                        <FormLabel>Contact Type</FormLabel>
                        <RadioGroup onChange={(e)=>setType(e.target.value)} value={type}>
                            <FormControlLabel value="private" control={<Radio/>} label="Private"/>
                            <FormControlLabel value="business" control={<Radio/>} label="Business"/>
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" type="submit" color="secondary">Add</Button>
                </form>
            </Container>
        </div>
    )
}