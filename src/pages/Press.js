/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Style from "../components/css/Press.module.css";

let Press = props => {
  return (
    <div className={Style.pressContainer}>
      <div>
        <h4>
          THESE ARE PORTLAND’S 50 ESSENTIAL SIT-DOWN RESTAURANTS RIGHT NOW
        </h4>
        <p style={{fontStyle: 'italic'}}>
          “PoMo’s 2014 Restaurant of the Year is still on a winning streak,
          unlocking the interactive, herb-zinging secrets of regional Thai
          cooking in choreographed evenings—each month trekking to a different
          region. Start looking for reservations now—it can take a while to get
          in.”
        </p>
        <h5>– PDX MONTHLY</h5>
        <a
          href="https://www.pdxmonthly.com/articles/2017/10/12/these-are-portland-s-50-essential-sit-down-restaurants-right-now"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>PORTLAND’S 40 BEST RESTAURANTS</h4>
        <p style={{fontStyle: 'italic'}}>“Arguably America’s finest Thai restaurant…”</p>
        <h5>– THE OREGONIAN</h5>
        <a
          href="https://www.oregonlive.com/portland-best-restaurants/2017/09/portlands_40_best_restaurants.html"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>BEST FOOD TOWN</h4>
        <p style={{fontStyle: 'italic'}}>
          “Langbaan, which introduces eaters to the different regions of
          Thailand.”
        </p>
        <h5>– SUNSET MAGAZINE</h5>
        <a
          href="https://www.sunset.com/travel/sunset-travel-awards-food-town"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>36 HOURS IN PORTLAND</h4>
        <p style={{fontStyle: 'italic'}}>watch the video in the link below</p>
        <h5>– THE NEW YORK TIMES</h5>
        <a
          href="https://www.nytimes.com/2015/09/13/travel/what-to-do-in-36-hours-in-portland.html?smid=fb-nytimes&amp;smtyp=cur&amp;_r=3"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>CUISINE OF THE YEAR</h4>
        <p style={{fontStyle: 'italic'}}>“We’re hoping, praying (OK, begging) for a return trip in 2016.”</p>
        <h5>– PORTLAND MONTHLY</h5>
        <a
          href="https://www.pdxmonthly.com/articles/2015/10/9/the-4-most-memorable-portland-restaurant-moments-of-the-year"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>THE 50 BEST THINGS TO EAT & DRINK OF 2015</h4>
        <p style={{fontStyle: 'italic'}}>
          “For me, the flavor of the moment is funky and pungent, with a balance
          between acidity, salt, and spice..”
        </p>
        <h5>– GQ</h5>
        <a
          href="https://www.gq.com/story/50-best-things-to-eat-and-drink-2015"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>GQ MOST OUTSTANDING RESTAURANTS IN AMERICA</h4>
        <p style={{fontStyle: 'italic'}}>
          “Langbaan is welcoming and generous, the food homey and gentle. Only
          the recipes are complicated, like the handwoven egg net enclosing
          pork, peanuts, and much more. (There’s always much more with Thai.)
          Live scallop sitting in a crispy cup made from coconut milk and rice
          flour was so sumptuous I wondered if it was intended to pass for
          dessert, and the salads contained tuna ceviche or marinated pork
          jowl—my kind of greens. This is the first Thai food I’ve ever eaten
          that made me wish I lived over there.”
        </p>
        <h5>– GQ</h5>
        <a
          href="http://www.gq.com/food-travel/201502/25-best-restaurants-of-2015#slide=3"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
      <div>
        <h4>NOTES FROM PORTLAND, TAKE TWO</h4>
        <p style={{fontStyle: 'italic'}}>
          “Owner Akkapong Earl Nimson and Rassamee Ruaysuntia seem to be in a
          kind of wordless trance, working together, silently tasting the
          balance of flavors, plating each intricate dish. They handed the first
          plate of their tasting menu across the table – miang som (above) – and
          it took me right back to Thailand. This is Thai food as I have not
          experienced it in any other restaurant in America.”
        </p>
        <h5>– RUTH REICHL</h5>
        <a
          href="http://ruthreichl.com/2014/09/notes-from-portland-take-two.html/"
          target="_blank" rel="noopener"
        >
          <button className={Style.button}>READ MORE</button>
        </a>
      </div>
      <div className={Style.breakLine} style={{ width: "100%", height: 1 }} />
    </div>
  );
};

export default Press;
