import React from 'react';
import injectSheet from 'react-jss';
import bg_img from '/Users/ravishrawal/Desktop/Columbia MS/Spring 2021/Data Vis/the-carbon-implication-of-crypto/client/src/crypto-header-v2.png';


const sectionHeight = 100

const styles = {
  sectionBreak: {
    height: sectionHeight+'vh'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 72,
    fontFamily: 'Roboto',
    padding: sectionHeight/2+"vh 0%"
  },
};

const TitleScreen = ({title, subtitle, textColor, classes}) => {
    
    textColor = textColor ? textColor : 'white'
    return (
        <div className={classes.sectionBreak} style={{
              backgroundImage: `url(${bg_img})`,
              backgroundSize:'cover'
            }}>
            
          <p className={classes.sectionTitle} style={{color: textColor}}>
            {title}
          </p>
        </div>
    );
  }

export default injectSheet(styles)(TitleScreen);