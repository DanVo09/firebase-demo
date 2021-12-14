import { Title } from "../ui/title"
import AppBar from "../components/appbar/appbar"
import GoogleProvider from "../components/authentication/providers/google/GoogleProvider"
import Spacer from "../ui/spacers/Spacer"
import { UserLogin } from "../components/authentication/user-login"
import { PageLayout, PageHeader, PageBody } from "../layouts/loginpage"
import GitHubProvider from "../components/authentication/providers/github/GitHubProvider"

function signup(){

    return(
        <>
              <AppBar/>
              <PageLayout>
                    <PageHeader>
                    <Title>Sign Up</Title>
                    </PageHeader>
               <PageBody>
                   <GoogleProvider>With Google</GoogleProvider>
                   <GitHubProvider>With GitHub</GitHubProvider>
                   <Spacer>OR</Spacer>
                   <UserLogin/>
                </PageBody>             

              </PageLayout>
        </> 
    )

}

export default signup