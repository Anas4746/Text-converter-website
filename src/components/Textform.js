import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState('')

    const textUpCase = () => {
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase', 'success')
    }

    const textLoCase = () => {
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success')
    }

    const textClear = () => {
        const newText = ''
        setText(newText)
        props.showAlert('Text Cleared', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }

    return (
        <>  <h1>{text}</h1>
            <div className='mb-3 my-30 my-5' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="my-box" rows="8"></textarea>
                <div className='container my-3 '>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={textUpCase}>Convert into UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={textLoCase}>Convert into LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={textClear}>Clear Screen</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                {text.split(' ').filter((word) => { return word.length !== 0 }).length} words and {text.length} characters
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
