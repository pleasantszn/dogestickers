import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Alert = ({msg,username,btn,btn2, l1, l2}) => {
    const [show, toggleShow] = useState(true)
    
    return (
        <section className="alert-sec">
          	{show ?
	          <div className="alert">
				<div className="alert-container">
					<p className="alert-msg"> {msg} {username ? <span className = "name-name" style = {{color : '#FD4D4D'}}>@{username}</span> : <span></span>}</p>
					<Link to = {l1} style={{textDecoration : 'none'}}>
						<button className="alert-btn" onClick= {() => toggleShow(!show)}> {btn} </button>
					</Link>
					{l2 ?
						<Link to = {l2} style={{textDecoration : 'none'}}>
							<button className="alert-btn-black" onClick= {() => toggleShow(!show)}> {btn2} </button>
						</Link>
					:
						<div></div>
					}
				</div>
			  </div>
			:
				<div></div>
			}
            
        </section>
    )
}

export default Alert


