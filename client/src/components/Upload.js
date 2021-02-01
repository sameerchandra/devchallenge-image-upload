import {React,useState} from 'react'
import Button from '@material-ui/core/Button';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'
import LinearIndeterminate from './LinearProgress'



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

    const handleClickChange = async(e) =>{

        toggleLoading(true)

        var data = new FormData() 
        data.append('file', e.target.files[0])

       axios.post("http://localhost:5000/api/upload", data, { 
      })
      .then(result => {
            if(result.statusText === "OK"){
                setTimeout(() => {
                toggleLoading(false)
                props.liftStateUp(true)
                    
                }, 3000);
            }
      })
    

    }

    const { classes, children, className, ...other } = props;

    const [loading,toggleLoading] = useState(false)



    return (
        
        <div className={`mainDiv${loading ? "small":""}`}>
            {loading ? 
    <>
    <div style={{fontSize:20,color:'4f4f4f',width:'90%',marginBottom:15}}>Uploading...</div>
        <LinearIndeterminate />
        </>
    :
    <>
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
        <input onChange={handleClickChange} type="file" hidden></input>
      </Button></>}
        </div>
    )
}

export default withStyles(styles)(Upload)