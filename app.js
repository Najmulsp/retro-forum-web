const allPosts = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    
    const info =data.posts;
    console.log(info);
    displayInfo(info);
}

    const displayInfo = (info) =>{
    // console.log(info)
    // step-1: get the container
    const discussContainer = document.getElementById('discuss-container');
    discussContainer.classList =`bg-red-100 flex flex-col justify-between gap-6`;
    info.forEach(card =>{
    // console.log(card)
    // step-2: create a div as card container
    const infoCard =document.createElement('div'); 
    infoCard.classList = ` bg-red-100 flex flex-col lg:flex-row justify-between gap-6`;
    // step-3: set the inner html
    infoCard.innerHTML = `
    <div class="bg-orange-200  flex flex-col lg:flex-row justify-between  rounded-2xl ">
            <div class="w-16 mx-auto m-6 lg:ml-6"> <img class="mx-auto" src="${card.image}" alt=""></div>
            <div class="flex-1 p-10 space-y-4">
                <h2 class="font-semibold"># ${card.category} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<span>Authore: &nbsp ${card?.author?.name}</span></h2> 
                <h1 class="text-xl font-bold">${card.title}</h1>
                <p>${card.description}
                </p>
                <div class="divider"></div>


            <div class="flex items-center">
                <div class="flex-1 flex gap-12 lg:gap-6 border  ">
                    <div class="flex flex-col lg:flex-row items-center lg:gap-4">
                        <img class="w-10" src="images/message1.svg" alt="">
                        <span class="lg:mr-8">${card.comment_count}</span>
                    </div>
                    <div class="flex flex-col lg:flex-row lg:gap-4 items-center">
                        <img class="w-10" src="images/eye.svg" alt="">
                        <span class="lg:mr-8">${card.view_count}</span>
                     </div>
                     <div class="flex flex-col lg:flex-row lg:gap-4 items-center">
                        <img class="w-10" src="images/clock.png" alt="">
                        <span class="lg:mr-8"> ${card.posted_time} min</span>

                     </div>
                </div>
                <div>
                    <img id="message" onclick="showName(a)" class="w-10" src="images/message.svg" alt="">
                </div>
            </div>
            
                
            </div>
        </div>

        
        <div class="flex flex-col bg-green-200 gap-10 p-6 rounded-2xl">
            <div class="flex justify-between">
                <h2>Title</h2>
                <p>Mark as read (4)</p>
            </div>

            <div class="flex justify-between gap-10 bg-white rounded-2xl p-4 w-96">
                <h1>10 Kids Unaware of Their <br> Halloween Costume</h1>
                <p class="flex justify-center items-center gap-2">
                    <img src="images/eye.svg" alt="">
                    <span>1,568</span>
                </p>
            </div>
        </div> 
    `;
         //  step-4: append child
         discussContainer.appendChild(infoCard);
// show name onclick
       const asider =  document.getElementById('message');
       asider.addEventListener('click',function(){
        const div =document.createElement('div')
            div.classList = `flex justify-between gap-10 bg-white rounded-2xl p-4 w-96`;
            div.innerHTML = `

             `
       })

                })
                }

        allPosts();


        //  function showName(){
        //     const div =document.createElement('div')
        //     div.classList = `flex justify-between gap-10 bg-white rounded-2xl p-4 w-96`;
        //     div.innerHTML = `

        //     `
            
        // }




        // letest post section

const letestPosts = async() =>{
    const res = await fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    console.log(data)
    displaydata(data);
}

    const displaydata = (data) =>{
     // console.log(data)
     // step-1: get the container
     const postContainer = document.getElementById('post-container');
     postContainer.classList=`grid grid-cols-1 lg:grid-cols-3 gap-6`

     data.forEach(post =>{
    // // console.log(post)
     // step-2: create a div as post container
     const postCard =document.createElement('div'); 
    //  postCard.classList = `grid grid-cols-1 lg:grid-cols-3 gap-6`;
     // step-3: set the inner html
    postCard.innerHTML = `
     <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${post.cover_image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <div class="flex gap-6">
                    <img src="images/Frame.svg" alt="">
                    <p>${post.author.posted_date || 'No Publish Date'}</p>
                  </div>
                  <h1 class="font-semibold">${post.title}</h1>
                  <p>${post.description}</p>

                  <div class="flex gap-6">
                    <img class="w-12 rounded-full" src="${post.profile_image}" alt="">
                    <div>
                        <h3>${post.author.name}</h3>
                        
                        <p>${post.author.designation || 'Unknown'}</p>
                    </div>
                  </div>
                </div>
     </div>`;
          //  step-4: append child
          postContainer.appendChild(postCard);

                 })
                }

        letestPosts();
