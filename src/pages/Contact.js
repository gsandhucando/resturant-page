import React from "react";
import Style from "../components/css/Contact.module.css";
import Map from "../components/Map";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env"
});

let Contact = props => {
  return (
    <div className={Style.contactContainer}>
      <h4>Contact Page</h4>
      <div style={{ marginTop: "20px" }}>
        <a
          className="fl r-iIe80IPkn6PQ"
          title="Call via Hangouts"
          href="https://www.google.com/search?q=langbaan+phone+number&amp;oq=langbaan+phone+number&amp;aqs=chrome..69i57.2948j1j4&amp;sourceid=chrome&amp;ie=UTF-8#"
          data-number="+19713442564"
          data-pstn-out-call-url=""
          data-rtid="iIe80IPkn6PQ"
          data-ved="2ahUKEwijmu23hrDfAhUBGnwKHVrGAyoQkAgoADAAegQIChAE"
          target="_blank"
          rel="noopener noreferrer"
        >
          (971) 344-2564
        </a>
        <br />6 SE 28th Ave, Portland, OR 97214 <br />
        reservations@langbaanpdx.com
      </div>

      <div style={{ marginTop: 20 }}>
        <div>
          <Map
            lat={45.522514}
            lng={-122.637077}
            isMarkerShown={true}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
              process.env.REACT_APP_GOOGLE_KEY
            }`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <h4>HOURS</h4>
      <p style={{ padding: "0 0px" }}>
        Reservations are accepted 3 months in advance and can be made online
        through Resy. We offer two seatings on Thursdays, Fridays, and Saturdays
        at 6:00pm and 8:45pm, and on Sundays at 5:30pm and 8:15pm.
      </p>
      <div className={Style.btnContainer}>
        <a
          href="https://resy.com/cities/pdx/langbaan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={Style.button}>RESERVATIONS</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
