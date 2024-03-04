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
                <h2 class="font-semibold"># ${card.category} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<span> ${card?.author?.name}</span></h2> 
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
                    <img class="w-10" src="images/message.svg" alt="">
                </div>
            </div>
            
                
            </div>
        </div>
    `;
         //  step-4: append child
         discussContainer.appendChild(infoCard);

                })
                }

        allPosts();

