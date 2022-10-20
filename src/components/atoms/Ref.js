import {useState, useRef} from 'react'

export const Ref = () => {
    const [name, setName] = useState("");
    const handleOnChange = (e) =>setName(e.target.value)
    const inputEl = useRef(null)
    const handleOnClick = () => inputEl.current.focus()

    return (
        <div>
            <input ref={inputEl} type="text" value={name} onChange={handleOnChange} />
            <p>名前：{name}</p>
            <button onClick={handleOnClick}>フォーカスを当てる</button>
        </div>
    )
}
