import './Contacts.css'

const Contacts=() => {
  return (
    <div className="footer-content">
        <div className="h-100"  class="space-y-4">
            <br></br><br></br>
           <h3 class="entete text-pink-500 font-bold">
                  Find your association : 
          </h3>

          <div>
            <div className="h-100"  class="space-y-4"> 
                <div class="flex flex-col items-center bg-pink-200 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                     {/*  <a>
                        <img class="rounded-t-lg" src="/src/assets/asso.png" alt="" />
  </a>      */}         
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-600 dark:text-white">
                              Association de Protection des Animaux
                            </h5>        
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mail: associationpat17@gmail.com</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Télèphone: 98 000 000</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Locatlisation : Ariana</p>
                    </div>          
                </div>              
    
            </div>
          </div>

          <div>
            <div className="h-100"  class="space-y-4"> 
                <div class="flex flex-col items-center bg-pink-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                     {/*  <a>
                        <img class="rounded-t-lg" src="/src/assets/asso.png" alt="" />
  </a>      */}        
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Association de Protection des Animaux
                            </h5>        
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mail: associationpat17@gmail.com</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Télèphone: 98 000 000</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Locatlisation : Sousse</p>
                    </div>          
                </div>              
    
            </div>
          </div>

          <div>
            <div className="h-100"  class="space-y-4"> 
                <div class="flex flex-col items-center bg-pink-200 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  {/*  <a>
                        <img class="rounded-t-lg" src="/src/assets/asso.png" alt="" />
  </a>      */}   
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Association de Protection des Animaux
                            </h5>        
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mail: associationpat17@gmail.com</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Télèphone: 98 000 000</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Locatlisation : Sousse</p>
                    </div>          
                </div>              
    
            </div>
          </div>
          


        </div>
        <div>
          
        <br></br><br></br><br></br>
        <h3 class="entete">
              Find your veterinarian : 
          </h3>
          <br></br>
        <div>
            <div className="h-100"  class="space-y-4"> 
                <div class="flex flex-col items-center bg-pink-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <a>
                        <img class="rounded-t-lg" src="/src/assets/veto.png" alt="" />
                    </a>         
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Dr Chedlia Selmi Chtioui
                            </h5>        
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mail: vetoooo@gmail.com</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Télèphone: 98 000 000</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Locatlisation : Sousse</p>
                    </div>          
                </div>              
    
            </div>
          </div>
    </div>

  </div>
    
    
  )
}
export default Contacts
