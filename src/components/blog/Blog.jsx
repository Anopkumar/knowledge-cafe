import PropTypes from 'prop-types';
import logo from '../../assets/images/Frame.svg'
const Blog = ({ blog ,handleBookmark }) => {
    const {title, cover,author_img,author_name,upload_date,reading_time,hashtags } = blog
    console.log(title)
    return (
        <div >
            <img className=' rounded-xl w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='h-10 w-10 rounded-full' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h1>{author_name}</h1>
                        <p className='text-xs'> <small>{upload_date}</small></p>

                    </div>

                </div>
                <div className='flex'>

               <div>
               <p className='text-xs mt-1'> <small>{reading_time} min read</small></p>
               </div>
                <div>
               <button onClick={()=>handleBookmark(blog)}> <img className='w-3 h-3 mt-2  ' src={logo } alt="" /></button>
                </div>

                </div>

            </div>
            <h2>Title:{title}</h2>
            <p className='my-2 text-xs'><small>{hashtags}</small></p>
            
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;