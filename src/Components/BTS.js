import React, { useState } from 'react'
import{collection}  from 'firebase/firestore'


export default function BTS() {
    const [BTS, SetBTS] = useState([])
    function getBTS() {
        const BTScollectionRef = collection(db, 'BTS')
        getDocs(BTScollectionRef )
    }
    
    function getBTS() {

    }
    return(
        <div>
            <h4>BTS is the best Kpop group in the world argue with your keyboard</h4>
        </div>
    )
}