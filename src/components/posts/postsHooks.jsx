import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

function Postsprueba ()  {

  const [loaded, setLoaded] = useState(null);
  const [items, setItems] = useState([]);
  /*
  constructor(props){
    super(props);
    this.state = {
      items: [],
      loaded: false
    };
}*/

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
 /* title: {
    flexGrow: 1,
  },*/
  links: {
    margin: '0.5em',
    color: 'white',
    textDecoration: 'none',
    display: 'inline-block',
    "&:hover, &:focus": {
      textDecoration: 'none',
      color: 'white',
    }
  },
  logout: {
    marginLeft: '0.1em'
  }, 
  icons: {
  marginleft: '4em'
},
cardStyle: {
  width: '80%'
}
}
)
);

useEffect( () => {
  console.log("usa el efecto")
  // Actualiza el título del documento usando la API del navegador
 // document.title = `You clicked ${count} times`;
 return () => {
   async function getValues () {
  await axios.get (`http://localhost:2000/users/posts/`)
  console.log("Entra en axios")
  .then (res => {
    let posts = res.data;
    setLoaded(true)
    setItems(posts.data)
    //this.setState({items : posts.data, loaded: true})
     // console.log(res.status)
     // console.log(posts)
     // const lista = this.state.items
     // console.log(Array.isArray(lista)) 
      
  })
    } }
 //this.getValues()

}, []);
/*componentDidMount() {
    this.getValues()

}*/



    
    const pStyle = {
      fontSize: '15px',
      textAlign: 'center',
      padding: '2em',
      border: '1px solid black',
      width: '25em', 
      borderRadius: '5px',
      margin: '0 auto',
      marginTop: '3em',
      marginBottom: '1em',
      backgroundColor: "#92B4A7"
    };

    if (loaded) {
      console.log("No recorre el array")
      return <h2>Loading..</h2>
    } else {
          return (  
      items.map(p => {       
        console.log("Recorre el array")
             return ( 
              <Container maxWidth="xl">
               <Card className={Posts.useStyles}>
             <div key={p.id} style={pStyle}>

                <CardHeader title={"#" + JSON.stringify(p.id) + "  " + p.title 
                + " by user ID " + JSON.stringify(p.user_id)} style={ { backgroundColor: "#B7CDC4"}} />
                <Divider />
               <CardContent  style={ { backgroundColor: "#C3D5CD"}}>
               <Typography gutterBottom variant="h5" component="h2">
               {p.content}
          </Typography>
               </CardContent>
              </div>
               </Card>
               </Container>
              )        
        })

    )
    }
    

  
}export default Postsprueba;