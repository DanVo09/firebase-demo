import Image from 'next/image'
import { auth } from '../../../../lib/firebase';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../../../../lib/hooks/useAuth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { ProviderButton } from '../../../../ui/buttons';
import google from "./google.png";


function GoogleProvider({ children,  ...props }) {
    const router = useRouter()
    const user = useAuth()
    const [isValidUser, setIsValidUser] = useState(null)
    const provider = new GoogleAuthProvider()
   //request a sign in with pop window pass the provider
    async function requestLogin(){
      setIsValidUser(await signInWithPopup(auth,provider))
   
    }

    function handleClick(e,data){
      //Sign in with google
     requestLogin()
    }

    if(isValidUser){
      router.push('/add-item')
    }
 

  return (
    <ProviderButton onClick={handleClick} {...props}>
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
