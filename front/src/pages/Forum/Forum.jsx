import './Forum.css';
import CreateForum from '../../components/Forum/CreateForum';
import ListForum from '../../components/Forum/ListForum';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';



const Forum=() => {
  return (
 

    <div className="footer-content"  >
      <div>
        <br></br>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-pink-500  ">The latest publications : <br></br></h5>
        <div class="display: flex; gap: 100px;">
          <br></br><br></br>
          <ListForum/><br />
        </div>
      </div>
      <div >
        <br></br><br></br>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-pink-500 dark:text-white text-center" >Add a new post &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <br></br></h5> &nbsp;&nbsp;&nbsp;
        <div>
            <CreateForum/>
        </div>
      </div>
    </div>

  );
}

export default Forum;
