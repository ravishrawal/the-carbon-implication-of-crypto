import React from 'react';
import injectSheet from 'react-jss';
import bg_img from './purple_title_2560_1440.png';


const sectionHeight = 100

const styles = {
  sectionBreak: {
    height: '100vh',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 72,
    fontFamily: 'Roboto',
    // padding: sectionHeight/3 +"vh 0%"

  },
};

// function render_text(text_array)=>{
  
//   for (var i=0;i<text_array.length;i++){

//   }

// }

const TitleScreen = ({title, subtitle, textColor, classes}) => {
    
    textColor = textColor ? textColor : 'white'
    return (
        <div className={classes.sectionBreak} id="bgimg" style={{
              backgroundImage: `url(${bg_img})`,
              backgroundSize:'cover'
            }}>
            
          <p className={classes.sectionTitle} style={{
              color: textColor,
              paddingTop: "40vh",
              paddingRight: "430px",
              paddingLeft: "50px",
            }}>
            <b>{title[0]}</b>
          </p>
          <p 
            style={{
              color: textColor,
              textAlign: "left",
              paddingLeft: "51px",
              paddingTop: "10",
            }}>
          {title[1]}
          </p>
        </div>
    );
  }

export default injectSheet(styles)(TitleScreen);