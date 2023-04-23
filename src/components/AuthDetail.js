import React,{useEffect,useState} from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
const AuthDetail = () => {

    const [AuthUser,setAuthUser] = useState(null);
    useEffect(() =>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null);
            }
        });
        return ()=>{
            listen();
        }
    },[])

    const userSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log('sign Out successfull');
        }).catch(error => console.log(error))
    }


  return (
    <div>{AuthUser ? <><p>{`Signed In as ${AuthUser.email}`}</p><button onClick={userSignOut}>SignOut</button> </>  : <p>SignedOut</p>  }</div>
  )
}

export default AuthDetail