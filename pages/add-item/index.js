import Head from "next/head";
import { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid' 
import { useAuth } from "../../lib/hooks/useAuth";
import {doc, getDoc, setDoc} from "firebase/firestore"
import firebaseConfig from "../../lib/firebase/firebaseConfig";
import { db } from "../../lib/firebase";

import { AddNewItem, ItemID, AddItem, ItemDescription } from "./styles";
import AppBar from "../../components/appbar/appbar";
import { Brand } from "../../components/brand";
import { Button } from "../../ui/buttons";
import { TagLine } from "../../ui/text";

 
function AddNewItempage({...props}) {
  const user = useAuth()
 const [id, setId] = useState("")
 const [description, setdescription] = useState('')

 useState(()=>{
   setId(uuid().substring(0,8))
 },[])

 function handleSubmit(e){
  e.preventDefault()
 // `users/${user.uid}`

 const toDo = {
  id,
  description
}
console.log(toDo)


  const docPath= `users/${user.uid}`
  console.log(docPath)
  const userDoc = doc(db, docPath)
       getDoc(userDoc).then(doc=>{
         console.log(doc.data())
       })
 }

  return (
    <>
       <AppBar/>
       <AddNewItem>
         <header>
         <Brand/>
         <h1>Add New Todo Items</h1>
         </header>
        <AddItem onSubmit={(e)=>handleSubmit(e)}>
          <ItemID>
            <label htmlFor="uid">uid</label>
            <input type="text" disabled placeholder={id}/>
          </ItemID>
          <ItemDescription style={{margin:"1rem 0 1.5rem"}} >
            <label htmlFor="description">Description</label>
            <textarea onChange={(e)=> setdescription(e.currentTarget.value)}  rows="3" cols="4" name="description" id="description"></textarea>
          </ItemDescription>
          <Button style={{margin:"1rem 0"}} bgcolor="crimson" color="white">Add a new to do item </Button>
        </AddItem>
        <TagLine>Id: {id}</TagLine>
        <TagLine>Description: {description}</TagLine>
       </AddNewItem>
    </>
  );
}

export default AddNewItempage;
