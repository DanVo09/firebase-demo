import { auth } from "../../../lib/firebase";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useAuth } from "../../../lib/hooks/useAuth";
import {LoginStatus} from './styles'



function UserLoginStatus({ size, color, status, ...props }) {
  const user = useAuth()
  const router = useRouter()

  function handleCLick(){
    signOut(auth)
    .then(()=>{
        router.push('/')
    })

  }

  if(user){
    return (
      <LoginStatus bgcolor="green" onClick={handleCLick}>
        <IoPersonCircleSharp size={size || "1.75rem"} />
        <figcaption>
          <p>Status</p>
          <p>Logout</p>
        </figcaption>
      </LoginStatus>
    );

  }
  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "1.75rem"} />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
