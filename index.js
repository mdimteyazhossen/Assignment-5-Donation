let money=5000;
let card1=400.00;
let card2=433;
let card3=800;
const money1=document.getElementById("balance-amount");
// History item
function historyitem(a,b){
    const history= document.createElement("div");
    history.className=
    "w-4/5 mx-auto my-[30px]  p-3 rounded-md border-4 border-black grid gap-5 p-[30px]";
    history.innerHTML=
    `
            <p class="text-3xl font-bold text-grey-500">${a} Taka is ${b}Bangladesh</p>
            <p class="text-xl  text-grey-500">Date: ${new Date().toString()}</p>

    `;

    const historyContainer=document.getElementById('historyItem');
    historyContainer.appendChild(history);   
}
// modal
const modal = document.querySelector('#modal');
const closeModal= document.querySelector('.close-button')
// Card-1
const donation1 = document.getElementById("donateNow");
donation1.addEventListener("click",function(){
    const donationAmount1= parseFloat(document.getElementById("donation-amount1").value);
    if (donationAmount1 >0 && donationAmount1<=money)
    {
        money -= donationAmount1;
        money1.innerText=money.toFixed(2);
        card1 += donationAmount1;
        const cardAmount1=document.getElementById("balanceid1")
        cardAmount1.textContent=card1.toFixed(2);
        const history="famine-2024 at Noakhali, "
        
        historyitem(donationAmount1,history);
        historyitems.classList.add('hidden');
        modal.showModal();
        closeModal.addEventListener('click',function(){
            modal.close();
        })
    }
    else if(money<1){
        alert("Sorry, Your have't enough money ...");
    }
    else{
        alert("Sorry, Your donation is't required ...")
    }
})
// Card-2
const donation2 = document.getElementById("donateNow1");
donation2.addEventListener("click",function(){
    const donationAmount2= parseFloat(document.getElementById("donation-amount2").value);
    if (donationAmount2 >0 && donationAmount2<=money)
    {
        money -= donationAmount2;
        money1.innerText=money.toFixed(2);
        card2 += donationAmount2;
        const cardAmount2=document.getElementById("balanceid2")
        cardAmount2.textContent=card2.toFixed(2);
        const history=" Flood Relief in Feni, "
        
        historyitem(donationAmount2,history);
        historyitems.classList.add('hidden');
        modal.showModal();
        closeModal.addEventListener('click',function(){
            modal.close();
        })
    }
    else if(money<1){
        alert("Sorry, Your have't enough money ...");
    }
    else{
        alert("Sorry, Your donation is't required ...")
    }
})
// Card-3
const donation3 = document.getElementById("donateNow2");
donation3.addEventListener("click",function(){
    const donationAmount3= parseFloat(document.getElementById("donation-amount3").value);
    if (donationAmount3 >0 && donationAmount3<=money)
    {
        money -= donationAmount3;
        money1.innerText=money.toFixed(2);
        card3 += donationAmount3;
        const cardAmount3=document.getElementById("balanceid3")
        cardAmount3.textContent=card3.toFixed(2);
        const history=" Aid for Injured in the Quota Movement, "
        
        historyitem(donationAmount3,history);
        historyitems.classList.add('hidden');
        modal.showModal();
        closeModal.addEventListener('click',function(){
            modal.close();
        })
    }
    else if(money<1){
        alert("Sorry, Your have't enough money ...");
    }
    else{
        alert("Sorry, Your donation is't required ...")
    }
})

// History tab
const historyTab= document.getElementById('history-tab');
const donationTab= document.getElementById('donation-tab');
const don=document.getElementById('dona');
const historyitems=document.getElementById('historyItem');
historyTab.addEventListener("click",function(){
    historyTab.classList.add('bg-button-color');
    historyTab.classList.remove('text-gray-600',);
    donationTab.classList.add('text-grey-600',);
    donationTab.classList.remove('bg-button-color');
    don.classList.add('hidden');
    historyitems.classList.remove('hidden');
   
})

//Donation tab
donationTab.addEventListener("click",function(){
    donationTab.classList.add('bg-button-color');
    donationTab.classList.remove('text-gray-600');
    historyTab.classList.add('text-grey-600');
    historyTab.classList.remove('bg-button-color')
    don.classList.remove('hidden');
    historyitems.classList.add('hidden');
    
})

