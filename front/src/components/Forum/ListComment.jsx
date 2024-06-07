import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListComment() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments();
    }, []);

    function getComments() {
	//
	const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    
        axios.get('http://localhost:80/git-one/api/newcomment/licomments.php', {headers}).then(function(response) {
            
        console.log("*** response   "+JSON.stringify(response));

        console.log("*** response.data   "+JSON.stringify(response.data));


            setComments(response.data);
            
        });
    }

   
    return (
        <div className="h-100"  class="space-y-4"> 
            {comments.map((comment, key) =>
                <div key={key} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                           
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {comment.name}
                            </h5>        
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Comment: {comment.comment}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Publiée le : {comment.created_at}</p>
                        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            
                                
                                
                           
                            
                        </div>
                    </div>          
                </div>              
             )}
        </div>  
    )
}
