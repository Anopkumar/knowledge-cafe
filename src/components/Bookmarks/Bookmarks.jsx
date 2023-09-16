import Bookmark from "./bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-2/3 bg-gray-400">
            <h1>Bookmarked Blog:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;