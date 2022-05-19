import {useState, useEffect, useRef} from "react"

function useHover() {
    const [isHovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        
        return () => {    
            ref.current.removeEventListener("mouseenter", enter)
            ref.current.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [isHovered, ref]
}

export default useHover