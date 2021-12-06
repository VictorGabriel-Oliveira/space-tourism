import { pageInfoTypes } from "../types/pageInfoType"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
export const getCurrentPage = (pagesInfos :pageInfoTypes[])=>{
    const currentPageName= useParams().name?.toString() ||''
    const teste:string = currentPageName?.replace('-',' ').toUpperCase()
    const [currentPageInfo , setCurrentPageInfo] = useState<pageInfoTypes>()
    
    useEffect(()=>{
        
        const currentItem= pagesInfos.filter(item => (item.title.toUpperCase() === teste))
        setCurrentPageInfo(currentItem[0])
        
    },[currentPageName])

    return currentPageInfo
}