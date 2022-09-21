import React from 'react'
import {Container,Grid,makeStyles,Typography,Button} from '@material-ui/core'
import ContactCard from '../components/ContactCard'
import Drawer from '../components/Drawer'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    appbar:{
        width: `calc(100% - 240px)`,
        marginTop:20
    },
    root:{
        display:'flex'
    },
    button:{
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:20
    }
})

export default function Contacts(){
    const [contacts,setContacts] = React.useState([])
    const classes = useStyles()
    const history = useHistory()

    React.useEffect(()=>{
        fetch('http://localhost:8000/contacts')
            .then(res => res.json())
            .then(data => setContacts(data))
    },[])

    async function handleDelete(id){
        await fetch(`http://localhost:8000/contacts/${id}`,{
            method:'DELETE'
        })
        const newContacts = contacts.filter(contact => contact.id !== id)
        setContacts(newContacts)
    }

    function handleNavigate(){
        history.push('/create')
    }

    return(
        <div className={classes.root}>
            <Drawer/>
            <Container className={classes.appbar}>
                {contacts.length > 0 ? 
                
                    <Grid container spacing={2}>
                        {contacts.map(contact=>(
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <ContactCard
                                    key={contact.id}
                                    name={contact.name}
                                    address={contact.address}
                                    phone={contact.phone}
                                    id={contact.id}
                                    usertype={contact.type}
                                    handleDelete={handleDelete}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    :
                    <Container>
                        <Typography align='center' color='secondary' variant='h4'>
                            No Contacts!
                        </Typography>
                        <Button className={classes.button} color="secondary" variant='outlined' onClick={handleNavigate}>Add new</Button>
                    </Container>
                }
                
            </Container>
        </div>
    )
}