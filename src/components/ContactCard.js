import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import {IconButton, Typography,Avatar,makeStyles} from '@material-ui/core'
import { DeleteOutline,Person,Home,LocalPhone} from '@material-ui/icons'
import { pink, yellow } from '@material-ui/core/colors'

const styles = makeStyles({
    flex:{
        display:'flex',
        marginTop:'10px',
        marginBottom:'10px'
    },
    customMargin:{
        marginRight:'5px'
    }
})

{/**

avatar:{
        backgroundColor:(usertype)=>{
            if(usertype === 'private'){
                return pink[500]
            }
            return yellow[700]
        }
    }

*/}

export default function ContactCard({name,phone,address,id,usertype,handleDelete}){
    const classes = styles(usertype)
    return(
        <Card elevation={1}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {name[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <DeleteOutline onClick={()=>handleDelete(id)}/>
                    </IconButton>
                }
                title={name}
            />
            <CardContent>
                <Typography variant='body1' className={classes.flex}>
                    <Home color="secondary" className={classes.customMargin}/>
                    {address}
                </Typography>
                <Typography variant='body1' className={classes.flex}> 
                    <LocalPhone color="secondary" className={classes.customMargin}/>
                    {phone}
                </Typography>
            </CardContent>
        </Card>
    )
}