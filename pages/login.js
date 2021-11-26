import AppBar from "../components/appbar"
import Brand from "../components/brand"


 function Login() {
  return (
    <div>
     <AppBar brand={"Home"} company={"Login"} loginOption={"Sign up"} uiStyles={"styles.light"} ></AppBar>
    <Brand title="Login Page" tagline="Allow user to log in"/>
    </div>
  )
}
export default Login