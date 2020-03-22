import React from 'react';
import Container from 'react-bootstrap/Container';

class About extends React.Component {
  render() {
    return <Container className="text-left">
      <h2><strong>Beta</strong></h2>

      <p><a href="https://confessit.app">ConfessIt.app</a> is currently in beta! While many features will work, you might notice some minor bugs. Importantly, it doesn't persist your data anywhere yet, so you'll lose your work if you close the tab.</p>

      <p>This website, <a href="https://confessit.app">ConfessIt.app</a>, is based on the <a href="https://play.google.com/store/apps/details?id=com.mikekasberg.confessit">ConfessIt Android App</a> (created in 2012 by the same developer). While it's not (yet) a complete reproduction, it aims to make the app available to a wider range of users on a broader range of devices - including on the web and all mobile platforms!</p>

      <h2>About Confession</h2>

      <p>
      Confession is the holy sacrament by which Catholics are forgiven their sins. Confession times are listed in your local parish bulletin, and you can find them online at your parish website or at <a href="https://masstimes.org/">masstimes.org</a>. You can also schedule a confession at any time you'd like by contacting your local parish.
      </p>

      <p>
      When you go to confession, typically, you will have the choice of kneeling anonymously behind a screen 
      or sitting face-to-face with your confessor. Don't be nervous about going to confession! 
      Whatever you confess, your priest has heard it before. 
      Remember, he is there to help you.
      </p>

      <h2>About ConfessIt</h2>

      <p>
      This app is designed to help Roman Catholics prepare for the sacrament of confession by examining their conscience.  
      It is <b>NOT</b> a substitute for confession.
      </p>

      <p>
      Please be respectful of those around you when you use this app. 
      I recommend that you turn your phone off when you're inside your church, and use this app before you arrive. 
      If you do use this app inside your church or during confession, please ensure your phone is in silent mode.
      </p>

      <p>
      Rest assured that any information you enter into this app is only stored temporarily in your web browser.
      </p>

      <p>
      Information in this app comes from the Revised Standard Version of the Holy Bible, Catholic Edition.  
      Information from the Catechism of the Catholic Church was also used.
      </p>
    </Container>;
  }
}

export default About;