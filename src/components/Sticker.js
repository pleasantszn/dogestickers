import React,{useState} from 'react'
import { saveAs } from 'file-saver'
// iport ReactGA from 'react-ga';
import {ReactComponent as DownloadIcon} from '../Assets/Images/download.svg'
// import person from '../Assets/Images/awesome.gif'

const Sticker = ({item}) => {

    let isGiphyImage = 'images' in item;
   

    var image = `http://localhost:8000${item.image}`

    if (isGiphyImage){
        image = item.images.downsized.url
        

    }
    
    
    // function copyLink(){
        
    //     let link =  "pornhhb.com"
        
    //     let inputElem = document.createElement('input');
    //     inputElem.setAttribute('value', link);
    //     document.body.appendChild(inputElem);

    //     inputElem.select();
    //     inputElem.setSelectionRange(0,9999);
    //     document.execCommand('copy');
        
    //     inputElem.parentNode.removeChild(inputElem)
    //     ReactGA.event({
    //         category: 'User',
    //         action: 'Copy Link'
    //     });
    //     ReactGA.exception({
    //         description: 'An error ocurred',
    //         fatal: true
    //     });

    //     alert('Link Copied! 😎 ')
    // }
    const download = () => {
        let imgPath = image
        
        let fileName = item.title
        saveAs(imgPath,fileName)
        // ReactGA.event({
        //     action: 'Download',
        //     category : 'Image',
        // });
        // ReactGA.exception({
        //     description: 'An error ocurred',
        //     fatal: true
        // });
    }
    return (
        <>
        
            <li className='item'>
                
                <img src={image} alt={item.title} className='item-img'></img>
               

                <div className="item-container">
                    
                    <h4 className="title">{item.title}</h4>
                    { item.downloads ? <div className="stats"><DownloadIcon /><h6 className="no">{item.downloads}</h6></div> : <div className="space"></div>}
                    
                    <div className='item-btns'>
                        <button className='download' onClick={download}>Download</button>
                        {item.image ? <button className='share' onClick={download}>Share</button>: <div></div>}
                    </div>
                </div>
                
            </li>

            
        </>
    )
}

export default Sticker

 // {item.user ? <h4 className="title"> by <span className="user-h4"> {item.user}</span></h4>:<div></div>} 