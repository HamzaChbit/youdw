"use client"
import Link from "next/link";
import { SetStateAction, useState, useEffect } from "react";

const Hero = () => {
    const [link, setLink] = useState('');
    const [format, setFormat] = useState('720');
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');
    const [addDataVisible, setAddDataVisible] = useState(true);
    const [viewDataVisible, setViewDataVisible] = useState(false);


    const handleAddDataClick = () => {
        setAddDataVisible(true)
        setViewDataVisible(false)
    }


 const handleViewDataClick = () => {
    setAddDataVisible(false)
    setViewDataVisible(true)
    }







    // Retrieve values from local storage when the component mounts
    useEffect(() => {
        const savedLink = localStorage.getItem('link');
        const savedFormat = localStorage.getItem('format');
        if (savedLink) setLink(savedLink);
        if (savedFormat) setFormat(savedFormat);
    }, []);

    // Save values to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('link', link);
    }, [link]);

    useEffect(() => {
        localStorage.setItem('format', format);
    }, [format]);

    const handleDownload = () => {
        if (link !== '') {
            let url1 = '';
            let url2 = '';

            if (link.indexOf("https://youtu.be/") !== -1) {
                url1 = link.replace("https://youtu.be/", "https://www.youtube.com/embed/");
                setResult1(`<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

                url2 = `https://loader.to/api/button/?url=${link}&f=${format}`;
                setResult2(`<iframe style="width:100%;height:60px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`);
            } else if (link.indexOf("https://www.youtube.com/watch?v=") !== -1) {
                url1 = link.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
                setResult1(`<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

                const u = link.replace("https://www.youtube.com/watch?v=", "https://youtu.be/");
                url2 = `https://loader.to/api/button/?url=${u}&f=${format}`;
                setResult2(`<iframe style="width:100%;height:60px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`);
            } else if (link.indexOf("https://youtube.com/shorts/") !== -1) {
                url1 = link.replace("https://youtube.com/shorts/", "https://www.youtube.com/embed/");
                const u3 = url1.replace("?feature=share", "");
                setResult1(`<iframe width="100%" height="190" src="${u3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

                const u = link.replace("https://youtube.com/shorts/", "https://youtu.be/");
                const u2 = u.replace("?feature=share", "");
                url2 = `https://loader.to/api/button/?url=${u2}&f=${format}`;
                setResult2(`<iframe style="width:100%;height:60px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`);
            }
        }
    };

    const handleFormatChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        handleDownload();
        setFormat(e.target.value);
        
    };

    return (
        <div className=' mt-10' id="hero">
            <div className=" h-[80vh] max-w-screen-md px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
            <div className="flex flex-row justify-between">
                <button onClick={handleAddDataClick}  className={`${addDataVisible ? ' border-b-2 border-title text-2xl font-medium ' : 'px-4 py-2 text-2xl font-light '}`} >Youtube To Mp4</button>
                <button 
    onClick={handleViewDataClick} 
    className={`${viewDataVisible ? ' border-b-2 border-title text-2xl font-medium ' : 'px-4 py-2 text-2xl font-light'}`}>
    Youtube To Mp3
</button>
            </div>

               { addDataVisible &&
<div className="flex flex-col space-y-2 my-2">
                    <h1 className='text-title text-3xl font-bold p-3'>YouTube Video Downloader</h1>
                    <h4 className='text-xl my-2 '>Download YouTube videos, convert YouTube to mp3 free Online</h4>
                   
                    <input
                        type="text"
                        className="link"
                        placeholder="Video Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <select
                        className="format bg-title text-white"
                        value={format}
                        onChange={handleFormatChange}
                        required
                    >
                        <option disabled>Select Video Format</option>
                      
                        <option value="m4a">144p</option>
                        <option value="360">360p</option>
                        <option value="480">480p</option>
                        <option value="720">720p</option>
                        <option value="1080">1080p</option>
                        <option value="4k">4k</option>
                        <option value="8k">8k</option>
                    </select>

                    <button
                        className="btn text-title hover:bg-red-400 hover:transform"
                        onClick={handleDownload}
                    >
                        Download 
                    </button>
       
                  
                    <br /><br />
                    <div className="result1" dangerouslySetInnerHTML={{ __html: result1 }}></div>
                    <div className="result2" dangerouslySetInnerHTML={{ __html: result2 }}></div>
                </div>

               } 

{ viewDataVisible &&
    <div className="flex flex-col space-y-2 my-2">
                    <h1 className='text-title text-3xl font-bold p-3'>YouTube Video Downloader</h1>
                    <h4 className='text-xl my-2 '>Download YouTube videos, convert YouTube to mp3 free Online</h4>
                   
                    <input
                        type="text"
                        className="link"
                        placeholder="Video Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <select
                        className="format bg-title text-white"
                        value={format}
                        onChange={handleFormatChange}
                        required
                    >
                        <option disabled>Select Video Format</option>
                        <option value="mp3">mp3</option>
                        <option value="mp3">mp3</option>
                    </select>

                    <button
                        className="btn text-title hover:bg-red-400 hover:transform"
                        onClick={handleDownload}
                    >
                        Download 
                    </button>
       
                  
                    <br /><br />
                    <div className="result1" dangerouslySetInnerHTML={{ __html: result1 }}></div>
                    <div className="result2" dangerouslySetInnerHTML={{ __html: result2 }}></div>
                </div>


               } 





            </div>
        </div>
    )
}

export default Hero;
