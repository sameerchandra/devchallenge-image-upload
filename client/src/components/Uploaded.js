import {React,useState,useRef,useLayoutEffect} from 'react'
import Button from '@material-ui/core/Button';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'
import LinearIndeterminate from './LinearProgress'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = {
    root:{
        background:'#2f80ed',
        height:"100%",
        width:"20%",
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#2f80ed",
        },
        borderRadius:10

    },
}


function Uploaded(props){

    const [open, setOpen] = useState(false);


    const { classes, children, className, ...other } = props;

    const handleClick = () => {
        navigator.clipboard.writeText(`${document.baseURI}api/image/${props.fileName}`)
        setOpen(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false)
    }


    return (
        
        <div className="mainDivuploaded">
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Text Copied"
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
            <i class="material-icons" style={{fontSize:64,color:"green"}}>check_circle</i>
                <h1 style={{fontSize:32}}>Uploaded Successfully</h1>
            <div className="innerDiv2">
        <img style={{height:"100%",width:"100%",borderRadius:12}} src={`${document.baseURI}api/image/${props.fileName}`}></img>
        
            </div>
            <div style={{display:'flex',flexDirection:'row',border:'4px solid #e0e0e0',borderRadius:12,height:'10%',width:'75%',alignItems:'center',background:'#f6f8fb'}}>
                <div style={{width:'90%',textOverflow:'ellipsis',overflow:"hidden",whiteSpace:'nowrap',fontSize:18,fontWeight:500,margin:'0 0 0 10px'}}>{`${document.baseURI}api/image/${props.fileName}`}</div>
                <Button onClick={handleClick} className={clsx(classes.root, className)} {...other} variant="contained" color="primary" component="label">
        Copy
      </Button>

            
        </div>
      </div>
    )
}

export default withStyles(styles)(Uploaded)