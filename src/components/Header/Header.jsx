import profile from '../.././assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 mt-5 border-b-2  max-w-5xl mx-auto '>
             <h1 className='text-3xl pt-2 font-bold'>Knowledge Cafe</h1>
             <img className='pb-3' src={profile} alt="" />
            
        </div>
    );
};

export default Header;