// Created an 404 ERROR page for unidentified routes 
//used Inline CSS for this page.

import { useNavigate } from "react-router-dom"
export default function Error(){
    const navigate = useNavigate();
    function handleClick(){
        navigate('/');
    }
    return (
        <div style={{
            display:"flex",
            flexDirection:'column',
            justifyContent:"center",
            alignItems:"center",
            height:'100vh',
            width:'100vw',
            backgroundColor:'#f4f6f6',
        }}>
            <div style={{
                display:"flex",
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
            }}>
            <h1 style={{margin:'0'}}>Lost your way? Sweat no more.</h1>
            <h3 style={{color:'red'}}>Market's on the shelves. Go explore.</h3>
{/* Using Bootstrap Icon imported an arrow button -where handleclick function is called to navigate back to home page  */}
            <svg 
                onClick={handleClick}
                style={{
                    border: '2px solid black', 
                    borderRadius: '15px',
                    transition: '0.3s ease-in-out',
                }} 
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgray'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                xmlns="http://www.w3.org/2000/svg" 
                width="46" 
                height="46" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                >
                <path 
                    fillRule="evenodd" 
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
            </svg>

            </div>
        <img 
        style={{
            height:"auto",
            width:"400px",
        }}
        src="./src/assets/error.webp" 
        alt="Error 404"/>
        </div>
    )
}