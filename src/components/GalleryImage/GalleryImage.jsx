import { useState } from "react";


function GalleryImage({ image, putLikes }) {

    const [commentBool, setCommentBool] = useState(false);

    return (
        <>
            <td className="box">
                <div className="frame" onClick={() => setCommentBool(!commentBool)}>
                    {commentBool ? <p className="discription">{image.description}</p> : <img className="pic" src={image.path} />}
                </div>

                <h2 className="like">Likes: {image.likes}</h2>
                <button className="button" onClick={() => putLikes(image.id)}>Like</button>
            </td>
        </>
    )
}

export default GalleryImage;