import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListPublication() {

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getPublications();
    }, []);

    function getPublications() {
	
	const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
    
        axios.get('http://localhost:80/git-one/api/publications/', {headers}).then(function(response) {
            
        console.log("*** response   "+JSON.stringify(response));

        console.log("*** response.data   "+JSON.stringify(response.data));


            setPublications(response.data);
            
        });
    }

    const deletePublication = (id) => {
        axios.delete(`http://localhost:80/git-one/api/publication/${id}/delete`).then(function(response){
            console.log(response.data);
            getPublications();
        });
    }
    return (
        <div className="h-100"  class="space-y-4"> 
            {publications.map((publication, key) =>
                <div key={key} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <a href={`forum/${publication.id}/details`}>
                        <img class="rounded-t-lg w-[250x] h-[250px]" src="/src/assets/pic.jpg" alt="" />
                    </a>         
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {publication.name}
                            </h5>        
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mail: {publication.email}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Télèphone: {publication.mobile}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Publiée le : {publication.created_at}</p>
                        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href={`forum/${publication.id}/details`} style={{marginRight: "10px"}} class="w-full sm:w-auto bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <div class="flex flex-col items-center">
                                <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor"></path></svg>
                                <div class="mb-5 text-center">
                                    <div class=" text-xL text-center">Consulter</div>
                                </div>
                                </div>
                            </a>
                             {/*<a onClick={() => deleteUser(user.id)} class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" ></path></svg>
                                <div class="text-left rtl:text-right">
                                    <div class="mb-1 text-xs">Delete</div>
                                </div>
            </a> */}
                        </div>
                    </div>          
                </div>              
             )}
        </div>  
    )
}
