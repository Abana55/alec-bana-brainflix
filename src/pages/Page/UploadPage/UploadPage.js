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
        <form>
            <section className='upload' >
                <h1 className='upload__title'>Upload Video</h1>
                <h2 className='upload__sub-title'>video thumbnail</h2>
                <img className='upload' src={UploadImg}/>
                <form className='upload' onSubmit={submit}>
                <label className='upload__sub-title'>TITLE YOUR VIDEO
                    <input className='upload' placeholder='Add a title to your video' type="text" />
                 </label>
                 <label className='upload__sub-title'>ADD A VIDEO DESCRIPTION
                    <input className='upload' placeholder='Add a description to your video' type="text" />
                 </label>
                     <button className='upload'>PUBLISH</button>
                     <button className='upload'>CANCEL</button>
                </form>
            </section>
            </form>
        </>
    )
}

export default UploadPage;