
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

class OurCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ["President", "Andrew Quinn"],
                ["Secretary", "Gediminas Glemza"],
                ["Treasurer", "Elliot Bourke"],
                ["Social Events Convenor", "Rachel park"],
                ["Physics Events Convenor", "Philip Binner"],
                ["Publicity Officer", "Jason Mill"],
                ["Librarian", "Aurys Silinga"],
                ["Second Year Rep", ""],
                ["First Year Rep", "Christiane Mayer"],
                ["OCM", "Richard Menzies(Webmaster), Matthew Palmer"]

            ]
        }

        this.state.htmlMembers = this.state.members.map((item) => {
            return (<div className="CommitteePaddingHeadingSmallScreen" style={{ "padding": "10px 0px" }}><i>{item[0]}</i>
                <pre className="NotDisplayOnSmallScreens" style={{ "display": "inline" }}> - </pre>
                <p className="DisplayBlockOnSmallScreens CommitteePaddingPersonSmallScreen" style={{ "display": "inline" }}>{item[1]} </p></div>)
        })
    }

    render() {
        return (
            <div className="App-content" style={{ backgroundColor: "#3b4252", position: "relative" }} id="OurCommittee">
                <Typography variant="h4" style={{ margin: "0.2em" }}>
                    {" Our Committee "}
                </Typography>
                <Typography variant="h5" className="CommitteeAlignCentreSmallScreen" style={{ padding: "10px 0", textAlign: "left" }}>
                    {this.state.htmlMembers}
                </Typography>
                <img
                    src="images/Telescope.svg"
                    alt=""
                    style={{
                        position: "absolute",
                        alignItems: "left",
                        float: "left",
                        right: "7em",
                        top: "10%",
                        width: "120px",
                        zIndex: "0"
                    }}
                />

                <img
                    src="images/OldLogoGreen.svg"
                    alt=""
                    style={{
                        position: "absolute",
                        alignItems: "left",
                        float: "left",
                        left: "4%",
                        bottom: "10%",
                        width: "200px",
                        zIndex: "0"
                    }}
                />

            </div>
        )
    }
}

export default OurCommittee;