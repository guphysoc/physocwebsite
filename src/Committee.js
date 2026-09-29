
import React, { Component } from "react";
import "./App.css";

import { Typography } from "@material-ui/core";

//style={{ backgroundColor: "#2e3440" }}
//backgroundColor: "#2e3440", fontSize: 2.5rem
class OurCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                ["President", "Teodora Raducanu"],
                ["Vice President", "Scott McGillivray"],
                ["Secretary", "Magnus Allan"],
                ["Treasurer", "Gregor Swan"],
                ["Social Events Convenor", "Gioya Heberer"],
                ["Academic Events Convenor", "Rosa Kelly"],
                ["Publicity Officer", "Murad Aldabbagh"],
                ["Welfare Officer", "Teoman Thierry"],
                ["Second Year Rep", "Daniel Clarkson"],
                ["First Year Rep", "This could be you!"],
                ["OCM", "Becca Richardson"],

            ]
        }

        this.state.htmlMembers = this.state.members.map((item) => {
            return (<div className="CommitteePaddingHeadingSmallScreen CommitteeAlignCentreSmallScreen" style={{ "padding": "12px 0px", "margin": 0, "textAlign": "left"}}>
                <span className="CommitteeListTitle">{item[0]}</span>
                <p className="DisplayBlockOnSmallScreens CommitteePaddingPersonSmallScreen CommitteeAlignCentreSmallScreen" style={{ "display": "inline","textAlign": "right" }}>{item[1]} </p></div>)
        })
    }

    render() {
        return (
            <div className="App-content" style={{  position: "relative", backgroundColor: "#2e3440"  }} id="OurCommittee">
                <Typography variant="h4" style={{ margin: "0.2em", marginBottom: "1em"}} class="titleTextFont">
                    {" Our Committee "}
                </Typography>
                <Typography variant="h6" className="CommitteeAlignCentreSmallScreen CommitteeList">
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
                        zIndex: "-1"
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
                        zIndex: "-1"
                    }}
                />

            </div>
        )
    }
}

export default OurCommittee;
/* 2019/2020
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
*/
