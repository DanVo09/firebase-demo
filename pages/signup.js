import { Title } from "../ui/title"
import AppBar from "../components/appbar/appbar"
import GoogleProvider from "../components/authentication/providers/google/GoogleProvider"
import Spacer from "../ui/spacers/Spacer"
import { UserLogin } from "../components/authentication/user-login"
import { PageLayout, PageHeader, PageBody } from "../layouts/loginpage"
import { Button } from "../ui/buttons"
import TextInput from "../ui/forms/TextInput"
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
                   <TextInput label="Email"  id="emailAddress" placeholder="janedoe@home.com" />
                    <TextInput label="Password"  type="password" id="emailAddress" placeholder="use a secure password" />
    
                    <Button bgcolor="#ed4747" color="white" noBoxShadow  type="submit">Sign Up</Button>
                </PageBody>             

              </PageLayout>
        </> 
    )

}

export default signup