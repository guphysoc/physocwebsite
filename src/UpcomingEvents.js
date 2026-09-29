import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

import EventItem from "./EventItem.js";
/* fontSize: 45px */
class UpcomingEvents extends Component {
  render() {
    return (
      <div
        className="App-content"
        style={{ backgroundColor: "#2e3440" }}
        id="UpcomingEvents"
      >
        <Typography variant="h4" style={{ margin: "0.2em" }} class="titleTextFont">
          {" Upcoming Events "}
        </Typography>


        <EventItem
                    img="images/EventLecture.svg"
                    date="TBA"
                    title="Guest Lecture: TBA"
                    location="Location: TBA"
                    body="Details: TBA."
                />

        <EventItem
                    img="images/EventMicrophone.svg"
                    date="TBA"
                    title="7 Minutes of Science"
                    location="TBA"
                    body="Join us for a conference-style event to hear about the exciting research being done in the various departments of our university!"
                />

        <EventItem
                    img="images/EventWine.svg"
                    date="TBA"
                    title="Science Ball"
                    location="DoubleTree by Hilton Glasgow Central"
                    body="Our annual ball for all GU Scientists, including a 3 course meal, ceilidh band and a photobooth!"
                />

        <EventItem
                    img="images/EventBeer.svg"
                    date="Tuesday 6th October @ 6:45 PM"
                    title="Scavenger Hunt"
                    location="Kitty's Pub"
                    body="Teams will visit each of four pubs and complete its challenge before moving on to the next. The winner of this challenge will get a prize!"
                  />

        <EventItem
                    img="images/EventBeer.svg"
                    date="Saturday 24th October, Time TBA"
                    title="Escape Room"
                    location="St Enoch Escape Room"
                    body="TBA"
                  />

        <EventItem
                    img="images/EventMicrophone.svg"
                    date="Thursday 5th November, Time TBA"
                    title="Ceilidh"
                    location="Glasgow University Union"
                    body="TBA"
                  />"
        <EventItem
                    img="images/EventLecture.svg"
                    date="Thursday 26th October @ 5:30 PM"
                    title="Python and LATEX Tutorial"
                    location="Kelvin Building Computer Cluster"
                    body="Are labs stressing you out? Do you feel like you need some help with coding? Unfortunately, you've missed our coding workshop for this semester - but don't worry! We've prepared some (hopefully) helpful material to guide you through the chaos, answer common questions, and boost your confidence. Check it out"
                  />
        </div>
    );
  }
}

export default UpcomingEvents;

// Use the text below when there are no upcomming events, or the bottom one for an upcoming event
/*
               <Typography variant="h5" style={{ padding: "3px 10px" }} className="AboutUsSmallScreen">
                    {
                        "We currently have no upcoming events (but it's best to check facebook, just in case)"
                    }
                </Typography>

                    <EventItem
                    img="images/EventFreshersFair.svg"
                    date="17/09/19 - 18/09/19"
                    title="Freshers Fair"
                    body=""
                />

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeW4-LAVmxwW0CnKsPs-uHzVy5JyHfSOFgx_EVzexVfgLCQtw/viewform" style={{textDecoration: "none", color: "#ecefe4"}}>
                <EventItem
                            img="images/RedQuark3.svg"
                            date="Tuesday 13/02 - 6pm"
                            title="Guest Lecture: We need to talk about Kelvin!"
                            location="St. Andrews Building 234"
                            body="2024 marks 200 years since the birth of William Thomson, better known as Lord Kelvin: renowned scientist, mathematician and engineer who was Professor of Natural Philosophy (what we nowadays call Physics) at the University of Glasgow for more than 50 years.  Lord Kelvin was one of the most influential scientific figures of the nineteenth century – not just because of his research, but as a pioneer of turning fundamental science into commercial innovation and in laying the foundations for how we teach science today. Join Martin Hendry for a whistle-stop tour through some of Lord Kelvin’s greatest discoveries (and his biggest mistakes) as he explores how Kelvin’s scientific legacy lives on – in everything from fridges to magnets (and even fridge magnets!) and much more in besides."
                        /></a>







*/
