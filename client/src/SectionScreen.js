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
    padding: sectionHeight/2+"vh 0%"
  },
};

const SectionScreen = ({classes, text, backgroundColor, textColor}) => {
    textColor = textColor ? textColor : 'white'
    backgroundColor = backgroundColor ? backgroundColor : 'green'
    return (
        <div className={classes.sectionBreak} style={{background: backgroundColor}}>
          <p className={classes.sectionTitle} style={{color: textColor}}>
            {text}
          </p>
        </div>
    );
  }

export default injectSheet(styles)(SectionScreen);