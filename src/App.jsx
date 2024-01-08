import HeaderProfile from "./components/headerComponents/HeaderProfile"
import './App.scss'
import LeftComponent from "./components/leftComponents/LeftComponent"
import RightComponent from "./components/rightComponents/rightComponent"

function App() {

  return (
    <>
      <div className="bodyProfile" >
        <HeaderProfile></HeaderProfile>
        <div className="bodyInfor">
          <LeftComponent></LeftComponent>
          <RightComponent></RightComponent>
        </div>
      </div>
    </>
  )
}

export default App
