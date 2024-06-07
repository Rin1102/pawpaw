import axios from "axios"
import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailForumComponent() {

    
    const [publication, setPublication] = useState({});

    const params = useParams();
    const id = params.id;

    //console.log("id est : "+id);

    //console.log(JSON.stringify(props.match.params));

    useEffect(() => {

        console.log(" params: ::::::"+JSON.stringify(params));

        getPublication(id);

    }, []);


    // get id from url react router 

    function getPublication(id) {
	
        const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
   
        
            console.log("je suis dans getpublication");

            axios.get('http://localhost/git-one/api/detailforum/detailforum.php?id='+params.id, {headers}).then(function(response) {
                
           // console.log("*** response   "+JSON.stringify(response));
    
                console.log("*** response.data   "+response.data);
    
                setPublication(response.data);


            }).catch(error => {
                console.error('Une erreur est survenue :', error);
            });


        }

    return (
        <div  class="space-y-4"> 
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <a>
                        <img class="rounded-t-lg w-[200x] h-[200px]" src="/src/assets/pic.jpg" alt="" />
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
                    </div>          
                </div>              
    
        </div>  

        
    )
}
