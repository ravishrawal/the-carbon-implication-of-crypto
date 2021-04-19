import React from 'react';
import injectSheet from 'react-jss';


const sectionHeight = 100

const styles = {
  explainBreak: {
    height: sectionHeight+'vh'
  },
  explainTitle: {
    textAlign: 'left',
    fontSize: 28,
    padding: sectionHeight/4+"vh 0% 0% 100px"

  },
  explainText: {
    textAlign: 'left',
    fontSize: 24,
    width:'40%',
    paddingLeft:'100px'
  },
};

const ExplainScreen = ({classes, title, text, backgroundColor, textColor}) => {
    textColor = textColor ? textColor : 'white'
    backgroundColor = backgroundColor ? backgroundColor : 'green'
    return (
        <div className={classes.explainBreak} style={{background: backgroundColor}}>
        <h5 className={classes.explainTitle} style={{color: textColor, fontSize:30}}>{title}</h5>
            {text}
        </div>
    );
  }
export default injectSheet(styles)(ExplainScreen);