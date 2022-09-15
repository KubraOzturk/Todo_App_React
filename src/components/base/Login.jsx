import styled from "styled-components";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch,useSelector } from "react-redux";
 const StyledPhoto = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;
const CardWrapper = styled.div`
background-color:#ecf0f1;
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 0;
width: 300px;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
`;

const CardHeader = styled.header`
padding-top: 32px;
padding-bottom: 32px;
`;
 const CardHeading = styled.h1`
font-size: 24px;
font-weight: bold;
text-align: center;
`;

const CardBody = styled.div`
padding-right: 32px;
padding-left: 32px;
`;

 const ProfilBody = styled.div`
background-color:#7f8c8d;
`;
 const Fieldset = styled.fieldset`
position: relative;
padding: 0;
margin: 0;
border: 0;

& + & {
  margin-top: 24px;
}

&:nth-last-of-type(2) {
  margin-top: 32px;
}

&:last-of-type {
  text-align: center;
}
`;

 const Input = styled.input`
padding: 7px 0;
width: 100%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1px solid #ddd;
border-left: 0;
transition: border-bottom-color 0.25s ease-in;

&:focus {
  border-bottom-color: #e5195f;
  outline: 0;
}
`;
const SignButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #ff5e57;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;


function Login(props){
    const [user, setUser] = useState({ username: "", password: "" });
    //const [isLogin,setIsLogin]=useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.isLogin);
    
    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify({
            "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
            "username": "kubra",
            "password": "1234",
            "joinDate": "December 2021"
        }
        ))
    }, []);

    function handleLogin(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("userData"));
        console.log("target", e.target.username.value);
        if (user.username === e.target.username.value && user.password === e.target.password.value) {
            console.log("girildi", user);
            navigate("/");
            dispatch(isLogin);
            console.log(isLogin);
            //setIsLogin(true);
        }
        else{
            navigate("/error");
           console.log("Error");
        }

    }


return(<>
<CardWrapper>
                <CardHeader>
                    <CardHeading>Sign in</CardHeading>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleLogin}>
                        <Fieldset>
                            <Input placeholder="Username" type="text" required name="username" onChange={() => { }} />
                        </Fieldset>
                        <Fieldset>
                            <Input placeholder="Password" type="password" required name="password" />
                        </Fieldset>
                        <Fieldset>
                            <SignButton type="submit" >Sign In</SignButton>
                        </Fieldset>
                    </form >
                </CardBody>
            </CardWrapper>
        </>
    
);
}

export default Login;