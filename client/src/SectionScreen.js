import React from 'react';
import injectSheet from 'react-jss';


const sectionHeight = 100

const styles = {
  sectionBreak: {
    height: sectionHeight+'vh'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 32,
    padding: sectionHeight/2+"vh 0% 0% 0%"
  },
  sectionText: {
    textAlign: 'center',
    fontSize: 24
  },
};

const SectionScreen = ({classes, title, text, backgroundColor, textColor}) => {
    textColor = textColor ? textColor : 'white'
    backgroundColor = backgroundColor ? backgroundColor : 'green'
    return (
        <div className={classes.sectionBreak} style={{background: backgroundColor}}>
          <h5 className={classes.sectionTitle} style={{color: textColor}}>{title}</h5>
          <p className={classes.sectionText} style={{color: textColor}}>
            {text}
          </p>
        </div>
    );
  }

export default injectSheet(styles)(SectionScreen);