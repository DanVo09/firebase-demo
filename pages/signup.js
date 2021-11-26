import AppBar from "../components/appbar"
import Brand from "../components/brand"


 function SignUp() {
  return (
    <div>
     <AppBar brand={"Home"} company={"Login"} loginOption={"Sign up"} uiStyles={"styles.light"} ></AppBar>

    <Brand title="Sign Up Page" tagline="Allow user to log in"/>
    </div>
  )
}
export default SignUp