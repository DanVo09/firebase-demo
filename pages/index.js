   
import Link from 'next/link'
import { Title } from '../ui/title'
import { Button } from '../ui/buttons'
import { HomePageLayout, HomePageHeader, HomePageBody, LinksContainer } from '../layouts/homepage'
import { PageLayout } from '../layouts/loginpage'

function home(){
return(
    
  <>

  <HomePageHeader> 
         
      <p>Official task management tool for tools</p>
      <LinksContainer>
      <Link   href="/signup">
          <Button bgcolor="#0fa9ec" color="#ffffff">New user account setup</Button>
     </Link>
      <Link href="/login">
        <Button bgcolor="#0071e3" color="white">Current user account login</Button>
      </Link>
     </LinksContainer>
         <ul>              
           <li>No Credit Card Required</li>
           <li>Upgrade your account at anytime</li>
         </ul>
  </HomePageHeader>
  
 </>
       
)
}

export default home
