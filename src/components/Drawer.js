import React from 'react'
import {Drawer,Typography,List,ListItem,ListItemIcon,ListItemText,makeStyles} from '@material-ui/core'
import {AddCircleOutlineOutlined,Person} from '@material-ui/icons'
import { useHistory,useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme)=>{
    return {
        drawer:{
            width:240
        },
        drawerPaper:{
            width:240
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        }
    }
})

export default function CustomDrawer(){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text:'My Contacts',
            icon:<Person color="secondary"/>,
            path:'/'
        },
        {
            text:'New Contact',
            icon:<AddCircleOutlineOutlined color="secondary"/>,
            path:'/create'
        }
    ]
    return(
        <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            classes={{paper:classes.drawerPaper}}
            elevation={5}
        >
            <Typography variant='h5' className={classes.title}>
                Sample
            </Typography>
            <List>
                {menuItems.map(item => (
                    <ListItem
                        key={item.title}
                        button
                        onClick={()=>history.push(item.path)}
                        className={location.pathname === item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}