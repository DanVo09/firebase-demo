import styled from 'styled-components'
 
const HomePageLayout = styled.div`

    max-width: 460px;
    margin: 3rem auto 0;
    padding: 3rem 2rem;
    background-color: white;
    border:3px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.125);
    .jim{
        background-color: blue;
    }

    
    
`

const HomePageHeader = styled.header`
text-align: center;
color:#222b37;
p{
  margin:0.5rem;

}
.brand{
  margin-top:2rem;
   h1{
     margin-bottom: -2rem;
   }
}
li{
  color:#646f79;
      font-weight: 200;
      font-size: 1.5rem;
    }
`


const HomePageBody = styled.main`
       .spacing{
           padding:2rem 0;
       }
    
`

const LinksContainer = styled.div`
 max-width: 320px;
margin: 2rem auto;
display:flex;
flex-direction: column;
justify-content: center;
button{
  margin-bottom: 1rem;
  font-size:1.125rem;
}
  
`;

 
 

export {HomePageLayout, HomePageHeader, HomePageBody, LinksContainer }

 