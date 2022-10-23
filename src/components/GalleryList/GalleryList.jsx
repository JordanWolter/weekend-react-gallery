import GalleryImage from "../GalleryImage/GalleryImage"

function GalleryList({ imageList, putLikes }) {
    console.log('IMAGE LIST', imageList);

    return (
        <>
            <tbody>
                <tr className="row">
                    {imageList.map(image => (
                        <GalleryImage key={image.id} image={image} putLikes={putLikes} />
                    ))}
                </tr>
            </tbody>
        </>
    )
}
export default GalleryList