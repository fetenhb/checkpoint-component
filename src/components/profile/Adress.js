import React from 'react'
import './Adress.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MessageIcon from '@material-ui/icons/Message';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Adress = () => {
  const classes = useStyles();
    return (
     <div className="cont">
      <section className="section pb-5">
        {/*Section heading*/}
        <h2 className="section-heading h1 pt-4" style={{marginBottom:'30px'}}>Contact us</h2>
        <br/>
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-5 mb-4">
            {/*Form with header*/}
            <div className="card">
              <div className="card-body">
                {/*Header*/}
                <div style={{marginTop:'-50px'}}>
                <div class="text-center mb-3 ">
                 <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a" style={{cursor:'default'}}> 
                 <div style={{display:'flex'}}>
                 <EmailIcon fontSize="large" style={{marginRight:'20px'}}/>
                    <div style={{marginTop:'4px', fontSize:'20px'}}>  
                       Write to us:
                   </div>
                   </div>
                 </button>
               </div>
               </div>
               <br/>             
               

                {/*form*/}
              
               
                <form className={classes.root} noValidate autoComplete="off">
              <div className='input-icon'> 
                 <PersonIcon fontSize="large"  style={{ color: 'rgba(165, 160, 171, 0.7)' }} />
                <TextField id="standard-basic" label="Your Name" />
              </div>
              <br/>
              <div className='input-icon'> 
                 <EmailIcon fontSize="large"  style={{ color: 'rgba(165, 160, 171, 0.7)' }} />
                <TextField id="standard-basic" label="Your Email" />
              </div>
              <br/>
              <div className='input-icon'> 
                 <LocalOfferIcon fontSize="large"  style={{ color: 'rgba(165, 160, 171, 0.7)' }} />
                <TextField id="standard-basic" label="Subject" />
              </div>
              <br/>
              <div className='input-icon'> 
                 <MessageIcon fontSize="large"  style={{ color: 'rgba(165, 160, 171, 0.7)' }} />
                 <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
        /> </div>
         <div class="text-center mt-4">
            <button class="btn btn-light-blue" style={{marginLeft:'120px'}}>Submit</button>
          </div>
      
        </form>
      </div>
     </div>
  </div>
        
          {/*Grid column*/}
          <div className="col-lg-7">
            {/*Google map*/}
            <div id="map-container-google-11" className="z-depth-1-half map-container-6" style={{height: '80%'}}>
              <iframe src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{border: 0}} allowFullScreen />
            </div>
            <br />
            {/*Buttons*/}
            <div className="row text-center">
              <div className="col-md-4">
               <RoomIcon  style={{ color: '#50a9d3' }}  fontSize="large"/>
               <br/>   <br/>
                <p>San Francisco, CA 94126</p>
                <p>United States</p>
              </div>
              <div className="col-md-4">
              <PhoneIcon  style={{ color: '#50a9d3' }}  fontSize="large"/>
              <br/>   <br/>
                <p>+ 01 234 567 89</p>
                <p>Mon - Fri, 8:00-22:00</p>
              </div>
              <div className="col-md-4">
               <EmailIcon  style={{ color: '#50a9d3' }}  fontSize="large"/>
               <br/>   <br/>
                <p>info@gmail.com</p>
                <p>sale@gmail.com</p>
              </div>
            </div>
          </div>
          {/*Grid column*/}
        </div>
      </section>
      </div>
     
       
    )
}

export default Adress
