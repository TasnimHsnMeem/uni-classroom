import { useWindowSize } from "usehooks-ts";
import {useEffect, useState} from "react";

export const useResponsive = () => {
    const { width } = useWindowSize();
    const [isMobile,setIsMobile] = useState(false);
    useEffect(()=>{
        setIsMobile(width < 768)
    },[width]);

    return [isMobile]
}