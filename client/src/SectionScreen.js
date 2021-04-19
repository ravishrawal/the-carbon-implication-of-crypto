import React from 'react';
import injectSheet from 'react-jss';


const sectionHeight = 100

const styles = {
  sectionBreak: {
    height: sectionHeight+'vh'
  },
  sectionText: {
    textAlign: 'left',
    fontSize: 24,
    // margin:'auto',
    width:'60%',
    paddingLeft:'29vw',
    paddingRight: '300px'
  },
};

const SectionScreen = ({classes, title, text, backgroundColor, textColor}) => {
    textColor = textColor ? textColor : 'white'
    backgroundColor = backgroundColor ? backgroundColor : 'green'
    return (
        <div className={classes.sectionBreak} style={{background: backgroundColor}}>
          <h5 className="sectionTitle" style={{color: textColor}}>{title}</h5>
          <p
          style={{color: textColor, }}>
            {text}
          </p>
        </div>
    );
  }


export default injectSheet(styles)(SectionScreen);