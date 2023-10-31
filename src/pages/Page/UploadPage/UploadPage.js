import './UploadPage.scss';
import Header from '../../../components/Header/Header';
import UploadImg from '../../../assets/Images/Upload-video-preview.jpg';
import React from 'react';

function UploadPage() {
    const submit = (event) => {
        event.preventDefault();
        alert("your all set");

        window.location.href ="/";
        };
    return(
        <>
        <Header/>
            <section className='upload' >
                <h1 className='upload__title'>Upload Video</h1>
                <h2 className='upload__sub-title-1'>video thumbnail</h2>
                <img className='upload__img' src={UploadImg}/>
                <form onSubmit={submit} className='upload__form'>
                <div className='upload__box'>
                    <label className='upload__sub-title'>TITLE YOUR VIDEO
                        <input className='upload__input' placeholder='Add a title to your video' type="text" />
                    </label>
                 <label className='upload__sub-title'>ADD A VIDEO DESCRIPTION
                    <input className='upload__input-1' placeholder='Add a description to your video' type="text" />
                 </label>
                 </div>
                 <div className='upload__border-sty'>
                     <button className='upload__button'>PUBLISH</button>
                     <button className='upload__button-1'>CANCEL</button>
                 </div>    
                </form>
            </section>
        </>
    )
}

export default UploadPage;