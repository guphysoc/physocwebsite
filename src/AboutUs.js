
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import AboutItem from "./AboutItem.js";
/* 2d6ec4ff  #5a8ed1ff
                        "We're Physoc, the Glasgow University physics society.  We have a library (Kelvin Bulding, room 332) which, though not as big as the university's library, still has a fair number of good books.  We also have a common room where we sometimes hold events."
*/
                /* f7d9cf  f4a086  ea572a  f24f3a Monoton*/
class AboutUs extends Component {

    render() {
        return (
            <div className="App-content" id="AboutUs">

                <Typography variant="h4" style={{ zIndex: "2", margin: "0.2em"  }} class="titleTextFont">{" About Us "}</Typography>
                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "15px 18% 0px 18%", zIndex: "2", "textAlign": "justify", lineHeight: "1.25" }}
                >
                    {
                        "We are the Physics Society of Glasgow Uni!"
                    }
                </Typography>
                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "5px 18% 20px 18%", zIndex: "2", "textAlign": "justify", display: "inline", lineHeight: "1.25" }}
                >
                    {
                "Our goal is to bring the physicists and physics enthusiasts of our university together with academic and non-academic events throughout the year."
                    }
                </Typography>

                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "5px 18% 20px 18%", zIndex: "2", "textAlign": "justify", display: "inline", lineHeight: "1.25" }}
                >
                    {
                "Join us for our various guest lectures by experts in their field or stop by for our tutorials on how to write lab reports in LaTeX. If you need a break from all the stress of a physics degree, we also host pub crawls, ceilidhs and quiz nights or cross-over events with other societies."
                    }
                </Typography>

                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "5px 18% 20px 18%", zIndex: "2", "textAlign": "justify", display: "inline", lineHeight: "1.25" }}
                >
                    {
                "We also run a small library in Room 332 of the Kelvin Building with many course textbooks available for all our members. Stop by any week day of the semester between 12-2pm to browse our books or chat to us!"
                    }
                </Typography>

                <Typography
                    variant="h5"
                    color="text"
                    className="AboutUsSmallScreen"
                    style={{ padding: "5px 18% 20px 18%", zIndex: "2", "textAlign": "justify" }}
                >
                    {
                        "Sign up for Membership (2026-2027): "
                    }

                    <a className="AboutUsSmallScreen" href="https://www.glasgowunisrc.org/organisation/7921/ " style={{textDecoration: "none",}}>
                    <Typography variant="h5"
                    color="text"
                    style={{display: "inline", textDecoration: "none", color: "#3479d6ff", textDecorationColor: "transparent"}}>
                        https://www.glasgowunisrc.org/organisation/7921/  </Typography>
                    </a>
                </Typography>

                <Typography variant="h6" style={{ margin: "0.2em", fontFamily: "Merriweather", color:"#f24f3a", fontSize: "2rem", fontWeight: "Bold" }}>
                    {" Our Events "}
                </Typography>
                <div
                    style={{
                        margin: "1em 10em",
                        width: "60%",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                    className="AboutUsSmallScreen"
                >
                    <Grid container spacing="24">
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventLecture.svg"
                                title="Guest Lectures"
                                body="We often hold guest lectures on a wide varity of topics, from dark matter to the science of star wars."
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventBeer.svg"
                                title="Pub Crawls"
                                body="We regularly hold pub crawls where you can meet up and socialise with like minded people. Join us for the scavenger hunt on the 6th of October!"
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventMicrophone.svg"
                                title="7 Minutes of Science"
                                body="Once a year we bring together a variety of scientists to present their research - in just 7 minutes!"
                                imgWidth="30px"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <AboutItem
                                img="images/EventSolarSystem2.svg"
                                title="Team up with other societies"
                                body="We team up with Astrosoc and other societies for quiz nights, pub crawls and a variety of other events."
                                imgWidth="50px"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default AboutUs;
