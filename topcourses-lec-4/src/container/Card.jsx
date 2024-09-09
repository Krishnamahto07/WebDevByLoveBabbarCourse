import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';

export const Card = ({course,likedCourses,setLikedCourses}) => {
    const {id, title,image,description }= course;

    function likeHandler(){
        if(likedCourses.includes(id)){
            setLikedCourses((prev)=> prev.filter((cid) => cid !== course.id));
            toast.warning("Liked removed ....");
        }
        else {
            if(likedCourses.length === 0){
                setLikedCourses([id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }   
            toast.success("Liked new course");
        }
    }
    
  return (
    <div className='card'>
        <div className='img-container'>
            <img src={image.url} alt='image' loading='lazy' className='image' />
            <button className='h-btn' onClick={()=>likeHandler()}>      
                {
                    likedCourses.includes(id) ? <FcLike /> : <FcLikePlaceholder />
                }
            </button>
        </div>
        <div className='text-container'>
            <h3 className='title'>{title}</h3>
            <p className='desc'>{description.substring(0, 70)}...</p>
        </div>
    </div>
  )
}
