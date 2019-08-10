import React, { Component } from "react";
import { Typography } from "@material-ui/core";
/*
              saturate: "2476%",
              invert: "0.5",
              sepia: "1"
              backgroundColor: "#2e3440",
*/
class AboutItem extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0 auto",
          //backgroundColor: "orange",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: "10",
          position: "relative"
        }}
      >
        <div
          style={{
            //display: "inline",
            float: "left",
            marginRight: "0em",
            /// backgroundColor: "#434c5e",

            width: "4em",
            height: "4em",
            borderRadius: "0.5em",
            verticalAlign: "center",
            padding: "0.2em"
          }}
        >
          <img
            src={this.props.img}
            width="30em"
            style={
              {

                //margin: "auto"
                // marginTop: "0.5em"
              }
            }
          />
        </div>
        <div
          style={{
            //display: "inline",
            textAlign: "left",
            //backgroundColor: "black",
            overflow: "auto"
            //float: "left"
          }}
        >
          <Typography variant="h6">{this.props.title}</Typography>
          <Typography variant="body">{this.props.body}</Typography>
        </div>
      </div>
    );
  }
}

export default AboutItem;
