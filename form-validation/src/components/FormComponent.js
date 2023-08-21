import  './FormComponent.css'
import {useState} from 'react'

const FormComponent=()=>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')

    const [errorUserName, SetErrorUserName] = useState('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
    const [errorEmail, SetErrorEmail] = useState('รูปแบบอีเมลไม่ถูกต้อง')
    const [errorPassword, SetErrorPassword] = useState('กรุณาป้อนรหัสผ่านจำนวน 8 ตัวอักษร')
    const [errorRePassword, setErrorRePassword] = useState('รหัสผ่านไม่ถูกต้อง')

    const [userNameColor, setuserNameColor] = useState('')
    const [EmailColor, setEmailColor] = useState('')
    const [passwordColor, setpasswordColor] = useState('')
    const [repasswordColor, setrepasswordColor] = useState('')



    const validateForm=(e)=>{
        e.preventDefault()

        if(username.length>8){
            SetErrorUserName('')
            setuserNameColor('green')
        } else {
            SetErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
            setuserNameColor('red')
        }

        if(email.includes('@')){
            SetErrorEmail('')
            setEmailColor('green')
        } else {
            SetErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            SetErrorPassword('')
            setpasswordColor('green')
        } else {
            SetErrorPassword('กรุณาป้อนรหัสผ่านจำนวน 8 ตัวอักษร')
            setpasswordColor('red')
        }

        if(repassword !== '' && repassword === password){
            setErrorRePassword('')
            setrepasswordColor('green')
        } else {
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setrepasswordColor('red')
        }
    }
    
    return(
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:EmailColor}}/>
                    <small style={{color:EmailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}}/>
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">ยืนยันแบบฟอร์ม</button>
            </form>
        </div>
    )
}

export default FormComponent