import styled from 'styled-components';


const AddNewItem = styled.aside`
   
   margin: 2rem 1rem;
   padding:1rem;
   header{
       margin: 2rem auto;
       width: 320px;

   }

   h1{
       font-size:2rem;
       font-weight: 600;
       letter-spacing: -2px;
       text-align: center;
   }
   textarea{
       resize: none;
       border:none;
       border-radius: 2px;
       box-shadow:0 0 2px 1px  #d0d0d0;
       color:#5a5b66;
       font-size:14px;
       padding: 0.25rem;
   }
   input, textarea{
       width:100%;
   }
   label{
    display:block;
    margin:0;
    font-weight: bold;
}
`
const ItemID = styled.div`

  
`;

const AddItem = styled.form`
  background-color: #fcfcfc;
  box-shadow:0 0 2px 0px  #dddddd;
  padding: 2rem 1rem;
  max-width: 420px;
  margin: 0 auto;
`;

const ItemDescription = styled.div`
  
`;

const ItemCategory = styled.div`
`
 

export {AddNewItem, ItemID, AddItem, ItemDescription, ItemCategory}