import React from 'react';
import injectSheet from 'react-jss';
import bg_img from './purple_title_2560_1440.png';


const sectionHeight = 100

const styles = {
  sectionBreak: {
    height: '100vh',
  },
  sectionTitle: {
    textAlign: 'left',
    fontSize: 72,
    fontFamily: 'Roboto',
    fontWeight: 300,
    paddingLeft: '300px',
    margin:'0'
    // padding: sectionHeight/3 +"vh 0%"

  },
};


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
              paddingLeft: "300px",
            }}>
            {title[0]} <br/>
            {title[1]}
          </p>
        </div>
    );
  }

export default injectSheet(styles)(TitleScreen);