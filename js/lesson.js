// IPHONE WALADATOOOOOORRRR
const phoneInput = document.querySelector('#phone_input')
const phoneButtom = document.querySelector('#phone_button')
const phoneResault = document.querySelector('#phone_result')
const regEXP = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButtom.onclick=() => {
 if (regEXP.test(phoneInput.value)) {
     phoneResault.innerHTML  = 'OK'
     phoneResault.style.color = 'green'
 }
 else {
     phoneResault.innerHTML  = 'NOT OK'
     phoneResault.style.color = 'red'
 }
}


const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const parentTabs = document.querySelector('.tab_content_items');
let currentIndex = 0;
let intervalId;

const hideTapContent = () => {
    tabContentBlocks.forEach((tabContentBlock) => {
        tabContentBlock.style.display = 'none';
    });
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (indexElement = 0) => {
    tabContentBlocks[indexElement].style.display = 'block';
    tabsItems[indexElement].classList.add('tab_content_item_active');
};

const startAutoSlide = () => {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabsItems.length;
        hideTapContent();
        showTabContent(currentIndex);
    }, 3000);
};

const stopAutoSlide = () => {
    clearInterval(intervalId);
};

hideTapContent();
showTabContent(0);
startAutoSlide();

parentTabs.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                currentIndex = tabIndex;
                hideTapContent();
                showTabContent(tabIndex);
                stopAutoSlide();
                startAutoSlide();
            }
        });
    }
};
// conventer
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const converter = (element, target, target2, currency) =>{
    element.oninput = () =>{
        const request = new XMLHttpRequest()
     request.open("GET", "../data/conventer.json")
     request.setRequestHeader("Conventer-type", "application.json")
     request.send()
        request.onload= () =>{
            const respone = JSON.parse(request.response)
            if (currency === 'som'){
                target.value = ( element.value / respone.usd).toFixed(2
                )
                target2.value = ( element.value / respone.eur).toFixed(2
                )
            }else if (currency === 'usd'){
                target.value = (element.value / respone.som).toFixed(2)
                target2.value = (element.value * respone.eur).toFixed(2)
            }
            else if (currency === 'eur'){
                target.value = (element.value * respone.usd).toFixed(2)
                target2.value = (element.value / respone.som).toFixed(2)
            }

                element.value === '' && (target.value = '') && ( target2.value = '')
        }
    }
}
converter(som, usd, eur, 'som',)
converter(usd, som, eur,'usd',)
converter(eur, usd, som, 'eur')

// ______________________________________________

const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let count = 1;
let isCountMax = false;

function fetchData() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `<p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'} ">${data.completed}</p>
            <span>${data.id}</span>`
        });
}

btnNext.onclick = () => {
    if (isCountMax) {
        count = 1;
        isCountMax = false;
    } else {
        count++;
        if (count === 200) {
            isCountMax = true;
        }
    }

    fetchData();
};

btnPrev.onclick = () => {
    if (isCountMax) {
        count = 199;
        isCountMax = false;
    } else {
        count--;
        if (count === 0) {
            count = 200;
            isCountMax = true;
        }
    }

    fetchData();
};

fetchData();
// +++++++++++++++++++++++++++++++++++++++++++++++++
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })