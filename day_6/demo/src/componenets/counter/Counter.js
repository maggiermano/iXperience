import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>the count is: { count }</p>

            <button onClick={increaseCount}>Click to increase count</button>

        </div>
    )
}
