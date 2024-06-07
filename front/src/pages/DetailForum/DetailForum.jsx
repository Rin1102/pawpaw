import './DetailForum.css';
import DetailForumComponent from '../../components/Forum/DetailForumComponent';
import NewForumComment from '../../components/Forum/NewForumComment';
import CreateForum from '../../components/Forum/CreateForum';
import ListForum from '../../components/Forum/ListForum';
import ListComment from '../../components/Forum/ListComment';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';



const DetailForum=() => {
  return (
 

    <div className="footer-content">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">You can add a comment for this publications : <br></br></h5>
        <div class="display: flex; gap: 10px;">
          <DetailForumComponent/><br></br>
          <div class="display: flex; gap: 10px;">
            <ListComment/>
        </div>
        </div>
      </div>

     

      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >Add a new comment : <br></br></h5>
        <div class="display: flex; gap: 10px;">
          <NewForumComment/>
        </div>
      </div>
    </div>

  );
}

export default DetailForum;