import React from "react";
import Style from "../components/css/Info.module.css";

let Info = props => {
  return (
    <div className={Style.infoContainer}>
      <div className="infoDiv">
        <h4>RESERVATIONS</h4>
        <p style={{fontSize: '1em'}}>
          Reservations are accepted 3 months in advance and can be made{" "}
          <a
            href="https://resy.com/cities/pdx/langbaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            online through Resy
          </a>
          . We offer two seatings on Thursdays, Fridays, and Saturdays at 6:00pm
          and 8:45pm, and on Sundays at 5:30pm and 8:15pm.
        </p>
      </div>

      <div className="infoDiv">
        <h4>DIETARY RESTRICTIONS</h4>
        <p style={{fontSize: '1em'}}>
          Our menu is based on seasonal availability of ingredients and our
          chefs’ creative inspirations. Ingredients may change frequently and
          without notice. It is very important that you inform us of any food
          allergies or dietary restrictions when making a reservation or when we
          reach out to confirm your reservation. Our chefs require at least 2
          days notice to accommodate any restrictions. We apologize in advance
          if these accommodations cannot be made.
        </p>
      </div>

      <div className="infoDiv">
        <h4>CANCELLATION POLICY</h4>
        <p style={{fontSize: '1em'}}>
          We require all bookings to confirm their reservation at least 3 days
          in advance via phone or email. If we are unable to confirm with you
          using the contact information provided, your reservation will be
          cancelled 3 days prior to the reservation date at 3:00pm and the table
          will be released to the wait list. In the event of a no-show or
          cancellation with less than 2 days notice, the credit card will be
          charged the current full menu price per person.
        </p>
        <p style={{fontSize: '1em'}}>
          If you find yourself needing to cancel or alter your reservation,
          please give us a call and leave a message with your details. Please
          note that any cancellations or reductions in party size within 48
          hours of your reservation will trigger a fee of $95 per person.
        </p>
      </div>

      <div className="infoDiv">
        <h4>TABLE POLICY</h4>
        <p style={{fontSize: '1em'}}>
          Due to the complexities of seating patrons at private tables in a
          small space, we may politely decline alterations to party size after
          the reservation has been made. A decrease in party size will cause
          reservations to be forfeited and the new, smaller party will be placed
          on the wait list for the evening. We appreciate your understanding on
          this matter.
        </p>
      </div>

      <div className="infoDiv">
        <h4>CORKAGE POLICY</h4>
        <p style={{fontSize: '1em'}}>
          We recommend checking our wine list prior to visiting the restaurant
          as we do not allow corkage for wines on our list. Our corkage fee is
          $30 per 750ml for the first two bottles, $55 for the third and fourth
          bottles, and $75 per bottle thereafter. Corkage fee for one magnum
          wine bottle is $55 and $100 per bottle thereafter. One corkage fee
          will be waived (750ml) when a bottle is purchased from our wine list.
        </p>
      </div>

      <div className="infoDiv">
        <h4>DRESS CODE</h4>
        <p style={{fontSize: '1em'}}>
          Many of our diners consider their evening with us as a momentous
          occasion. Please consider dressing to impress!
        </p>
      </div>

      <div className="infoDiv">
        <h4>AMBIANCE NOTICE</h4>
        <p style={{fontSize: '1em'}}>
          Our humbly-sized restaurant is made for intimate evenings. Because of
          the layout and acoustics in our small restaurant, we may ask tables to
          lower their voices on rare occasions, so as to better respect the
          dining experiences of our other patrons.
        </p>
      </div>

      <div className="infoDiv">
        <h4>GIFT CARDS</h4>
        <p style={{fontSize: '1em'}}>
          We offer gift cards in any amount. Please email us at
          <a
            href="mailto:reservations@langbaanpdx.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            reservations@langbaanpdx.com
          </a>{" "}
          or give us a call at{" "}
          <span style={{ color: "#827553" }}>971-344-2564</span> to purchase.
        </p>
      </div>
    </div>
  );
};

export default Info;
