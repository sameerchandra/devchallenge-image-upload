import {React,useState} from 'react'
import Button from '@material-ui/core/Button';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root:{
        background:'#2f80ed',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#2f80ed",
        },
        borderRadius:10

    },
}

function Upload(props){

    const { classes, children, className, ...other } = props;

    return (
        <div className="mainDiv">
            <div className="innerDiv">
                <span style={{fontWeight:"400",fontSize:30,color:"#4f4f4f"}}>Upload your image</span>
                <p style={{marginTop:20,color:'#828282'}}>File should be Jpeg, Png...</p>
                <div className="dragImage">
                    <img style={{height:"40%",width:"40%",justifySelf:"center"}} src="image.svg" alt="imagesd"></img>
                    <p style={{color:'#bdbdbd'}}>{"Drag & Drop your image here"}</p>
                </div>
            </div>
            <div style={{color:'#bdbdbd',marginBottom:25,pointerEvents:'none'}}>Or</div>
            <Button className={clsx(classes.root, className)} {...other} variant="contained" color="primary" component="label">
        Choose a file
        <input type="file" hidden></input>
      </Button>
        </div>
    )
}

export default withStyles(styles)(Upload)