import AppBar from "../components/appbar/appbar"
import GoogleProvider from "../components/authentication/providers/google/GoogleProvider"
import { Title } from "../ui/title"
import Spacer from "../ui/spacers/Spacer"
import { UserLogin } from "../components/authentication/user-login"
import { Legal, HighLight } from "../ui/legal"
import { PageLayout, PageHeader, PageFooter, PageBody } from "../layouts/loginpage"
function index (){
    
    return(
        <>
              <AppBar/>
              <PageLayout>
                    <PageHeader>
                    <Title>Account Login</Title>
                    </PageHeader>
               <PageBody>
                   <GoogleProvider>With Google</GoogleProvider>
                   <Spacer>OR</Spacer>
                   <UserLogin/>
                </PageBody>             
                <PageFooter>
                        <Legal>Legal Stuff  <HighLight>terms and conditions</HighLight></Legal>
                </PageFooter>

              </PageLayout>
        </>
    )
}

 

export default index