import Activate from "./Activate";
import Education from "./Education";
import Experience from "./Experience";
import Infor from "./Infor";
import React from "react";
export default function RightComponent(){

    return(
        <div className="rightComponent">
            <Experience></Experience>
            <Education></Education>
            <Activate/>
            <Infor/>
        </div>

    )
}