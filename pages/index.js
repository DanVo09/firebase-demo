import firebase from "../firebase"

import AppBar from "../components/appbar"
import Brand from "../components/brand"


 function Home() {
   console.log(firebase)
  return (
    <div>
     <AppBar brand={"Home"} company={"Login"} loginOption={"Sign up"} uiStyles={"styles.light"} ></AppBar>

    <Brand title="Home Page" tagline="Login Option"/>
    </div>
  )
}
export default Home