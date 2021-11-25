// Code Keypad Component Here
function Keypad() {
    return (
        <>
            <label>Password</label>
            <br />
            <input 
                type="password" 
                placeholder="password"  
                onChange={() => console.log("Entering password...")}>    
            </input>
        </>
    );
}

export default Keypad;