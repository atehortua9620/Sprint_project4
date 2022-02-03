import {DB} from './firebase'
import { collection, getDocs} from 'firebase/firestore'

//geting collection data

export const getData = async (coll) =>{

    const collectionRef = collection(DB, coll);
    const snapData = await getDocs(collectionRef);

    console.log(snapData);

    const data = snapData.docs.map((doc)=>doc.data());

    return data;




}

