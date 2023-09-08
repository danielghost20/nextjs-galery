'use client'

import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";


export default function useGetImages () {
    const [resources, setResources] = useState()

    useEffect(() => {
        const q = query(collection(db, 'images'))
        const unsuscribe = onSnapshot(q, querySnapshot => {
            let items: null | any = []

            querySnapshot.forEach((doc) => {
                items.push({...doc.data()})
            })
            setResources(items)
        })
    }, [])

    return {resources}
}