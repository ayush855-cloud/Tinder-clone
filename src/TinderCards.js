import React,{useState,useEffect} from 'react';
import TinderCard from 'react-tinder-card';

import {db} from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people,setPeople]=useState([])
    useEffect(()=>{
        db.collection('people').onSnapshot(snp=>{
            // console.log(snp.docs);
            // this is also correct
            // setPeople(snp.docs.map(doc=>({
            //     id:doc.id,
            //     name:doc.data().name,
            //     url:doc.data().url,
            // })
              setPeople(snp.docs.map(doc=>doc.data()))
                
            
            
        })
    },[people])

    return (
        <div className="cards">
           {people.map((person)=>{

               return <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']}>
                   <div className="card" style={{backgroundImage:`url(${person.url})`}}>
                   <h3>{person.name}</h3>
                   </div>
               </TinderCard>
           })} 
        </div>
    )
}

export default TinderCards;
