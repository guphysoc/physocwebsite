
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

//import EventItem from "./EventItem.js";
//backgroundColor: "#2e3440"
class ContactUs extends Component {

    render() {
        return (
            <div className="App-content" style={{  }} id="ContactUs">
                <Typography variant="h4" style={{ margin: "0.2em" }} class="titleTextFont">
                    {" Contact Us "}
                </Typography>
                <Typography variant="h5" style={{ padding: "15px 10px",  color: "#bf616a" }} className="AboutUsSmallScreen">

                        guphysoc@gmail.com &nbsp;<p style={{ "display": "inline", "fontWeight": "bold", "color": "#ecefe4" }}>|</p> &nbsp;
                        <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }}>
                        Facebook
                        </a> &nbsp;<p style={{ "display": "inline", "fontWeight": "bold", "color": "#ecefe4" }}>|</p> &nbsp;
                        <a href="https://www.instagram.com/guphysoc/" style={{ "color": "#6169bf" }}>
                        Instagram
                        </a>

                </Typography>

                <Typography variant="h6" style={{ padding: "15px 10px", margin: "0 20%" }} className="AboutUsSmallScreen">
                    {
                        "If you have a welfare concerns, please dont hesitate to reach out to our Welfare Officer, Teoman. You can reach him via the societies email."
                    }
                </Typography>


            </div>
        )
    }
}

export default ContactUs;

/*
                <Typography variant="h5" style={{ padding: "15px 10px" }} className="AboutUsSmallScreen">
                    <a href="https://www.facebook.com/guphysoc/" style={{ "color": "#6169bf" }}>
                    Facebook
                    </a>
                </Typography>
*/
