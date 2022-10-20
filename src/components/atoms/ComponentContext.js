import { createContext ,useState } from 'react';
import ComponentA from './ComponentA'

export const UserCount = createContext()

const ComponentContext = () => {
    const [count, setCount] = useState(100)
    const value ={
        count,
        setCount
    }
    return (
        <div>
            <p>Learn useContext</p>
            <UserCount.Provider value={value}>
            <ComponentA/>
            </UserCount.Provider>
        </div>
    )
}

export default ComponentContext