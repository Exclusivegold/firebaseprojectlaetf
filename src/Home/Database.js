import {useState,useEffect} from "react";
import{db} from "../Base"
import {collection, getDocs} from "firebase/firestore";
import Card from "./Card";
import style from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {GrLinkedin} from "react-icons/gr";
import React from "react";


const Database =() =>{
    const[lsetf, setLsetf] = useState([]);

    const usersCollectionRef = collection(db, "Project");
    useEffect(()=>{
        const getUsers = async() =>{
            const data = await getDocs(usersCollectionRef);
            setLsetf(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };

        getUsers();
    }, []);
    return(
        <Container>
            {lsetf.map((user)=>{
                
                return(
                 <CardHolder>
                      <Box>
                        {" "}
                        <Cardimg><img style={{height:'80px', width:'80px',borderRadius:'50%'}} src={user.image}/></Cardimg>
                        <CardHead>{user.name}</CardHead>
                        <CardInfo>{user.description}</CardInfo>
                        <Medialinks>
                            <p><a href= {user.facebook} target= "_blank" rel="noopener noreferrer"><FiFacebook/></a></p>
                            <p><a href= {user.linkedin} target= "_blank" rel="noopener noreferrer"><GrLinkedin/></a></p>
                            <p><a href= {user.whatsapp} target= "_blank" rel="noopener noreferrer"><BsWhatsapp/></a></p>
                            <p><a href= {user.github} target= "_blank" rel="noopener noreferrer"><AiFillGithub/></a></p>
                        </Medialinks>

                      </Box>
                 </CardHolder>
                )
            })}
        </Container>
    )
}
export default Database

const Container = style.div`
    background-color: white;
    padding: 4rem;  
    flex: wrap
    flex-wrap;

`     
const Box = style.div`
    width: 250px;
    border-radius: 2%;
    background-color: grey;
    padding: 4rem;
    margin: 2rem,2rem,2rem 0;

    // margin: 2rem 2rem 2rem 0;
    // padding: 1.5rem;
    // width: 250px;
    // box-shadow: 0 0 24px rgba (0,0,0,0.1);
    // cursor: pointer;

    
`
const CardHead = style.h3`
`

const CardInfo = style.p`

`
const Medialinks = style.div`
    display: flex;
    justify-content:space-between;
`
const Cardimg = style.div`
    
`    
const CardHolder = style.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    // padding: 1.5rem;
    justify-content: center;
    // align-items: center;
    flex: wrap;
    
`