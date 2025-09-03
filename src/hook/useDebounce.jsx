import { useState, useEffect, use } from "react"


const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
       const timer = setTimeout(() => setDebounceValue(value), delay)
    }, [value, delay])

    return debounceValue
}

export default useDebounce