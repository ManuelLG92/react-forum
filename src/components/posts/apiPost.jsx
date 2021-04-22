import React from 'react';
import axios from 'axios'
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import {UserContext} from '../users/userContext'
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {
  Link
} from "react-router-dom";
//import  { Redirect } from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles((theme) =>
createStyles({
 /* title: {
    flexGrow: 1,
  },*/
rootLoading: {
  display: 'flex',
  '& > * + *': {
    marginLeft: theme.spacing(2),
  }, 
  margin: '0 auto'
}, table: {
  minWidth: 700,
  border: '1px solid black'
},
}
)
);

const styles = {
  buttonStyle: {
    marginTop: '2em',
    marginLeft: '75%'
  }
}
/*
const newPost = {
  marginTop: '2em',
  marginLeft: '70%'
}
*/
const Posts = () =>  {
 //console.log({auth})
// const location = useLocation();
 //const deletedPost = location.state.deletedPost
  const user = React.useContext(UserContext)
  const [posts, SetPosts] = React.useState([])
  const [load, SetLoad] = React.useState(false)
  //console.log(user)

  const getPosts = async () => {
    await axios.get (`http://localhost:2000/posts/`)
    .then (res => {
      let posts = res.data;
      SetPosts(posts.data)   
      //this.setState({items : posts.data, loaded: true})
      console.log(posts)
       // console.log(posts)
       // const lista = this.state.items
       // console.log(Array.isArray(lista))  
       
       /* 
       component={Link} to={ {
            pathname: '/edit-post',
            state: {
              user_id: post.user_id,
              post_id: post.id,
              title: post.title,
              content: post.content,
            },
               } }
               */
    })
    .catch(error => console.log(error))
      }

  React.useEffect(() => {
      getPosts() 
      SetLoad(true) 
  }, [] ) 
  
        if (!load) {
      return (
      <div className={useStyles.rootLoading}>
        <h2>Loading..</h2>
      <CircularProgress />
    </div>
        )
    } else {
          return (  
              <div style={{paddingBottom: '1em', marginBottom: '2em'}}>
               
            <TableContainer component={Paper}>
            <Table className={useStyles.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Theme</StyledTableCell>
                  <StyledTableCell align="right">Author</StyledTableCell>
                  <StyledTableCell align="center">Date</StyledTableCell>
                  <StyledTableCell align="center">Responses</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <StyledTableRow key={post.id}>
                    
                  
                      <StyledTableCell component="th" scope="row" >
                        <Link to={`/post/${post.id}`} color="inherit">
                      {post.title}
                      </Link>
                    </StyledTableCell>
                  
                  
                    <StyledTableCell align="right">{post.user_name}</StyledTableCell>
                    <StyledTableCell align="center">{post.created_at}</StyledTableCell>
                    <StyledTableCell align="center">0</StyledTableCell>
                  </StyledTableRow>
                ))}


                
              </TableBody>
              
            </Table>
            
          </TableContainer>
                  {user !== null ? 
          <Button variant="outlined" color="primary" style={styles.buttonStyle}
          component={Link} to="/create-post">
           <PostAddIcon/> Create new post
          </Button> : ""}

          
          </div>
    )
    }
    

  
}

export default Posts