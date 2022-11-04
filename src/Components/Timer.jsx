import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

export default function Timer(props) {

    useEffect(() => {
        if (props.startButtonClicked) {
            let myInterval = setInterval(() => {
                if (props.seconds > 0) {
                    props.setSeconds(props.seconds - 1);
                } else {
                    clearInterval(myInterval)
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
    });

    return (
        <Text
            padding="20px"
            display={props.startButtonClicked ? "block" : "none"}
        >Time: {props.seconds}</Text>
    )
}