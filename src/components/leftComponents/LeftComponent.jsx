import InfoContact from "./InfoContact";
import Target from "./Target";
import Certificate from "./Certificate";
import Skill from "./Skill";
import Prize from "./Prize";
import Interest from "./Interest";

export default function LeftComponent(){
    return (
        <div className="leftComponent">
            <InfoContact/>
            <Target/>
            <Certificate/>
            <Skill/>
            <Prize/>
            <Interest/>
        </div>
    )
}