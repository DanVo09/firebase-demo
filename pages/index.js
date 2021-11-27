import Link from 'next/link'
import { Title } from '../ui/title'

import { Button } from '../ui/buttons'

import { HomePageLayout, HomePageHeader, HomePageBody } from '../layouts/homepage'

function home(){
return(
    
    <HomePageLayout>
        <HomePageHeader>
            <Title>Home Page</Title>
        </HomePageHeader>
        <HomePageBody>
            <Link href="/login">
                <Button bgcolor="red" color="white">Log in</Button>
            </Link>
           <Link href="/signup">
                <Button bgcolor="red" color="white">Sign Up</Button>
           </Link>
            
        </HomePageBody>
        

    </HomePageLayout>
       
)
}

export default home