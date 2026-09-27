// የቴሌግራም ዌብ አፕ ማስጀመር
let tg = window.Telegram.WebApp;
tg.expand();

// ከተቻለ የቴሌግራም ተጠቃሚውን ስም እና መረጃ መቀበል
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    document.getElementById('username').innerText = `@${user.username || user.first_name}`;
    document.getElementById('user-id').innerText = user.id;
}

let isSpinning = false;
let diamonds = 711;

function spinWheel() {
    if (isSpinning) return;
    
    if (diamonds < 1000) {
        alert('አልማዝ (Diamonds) በቂ አይደለም! እባክዎ ጓደኛ ይጋብዙ።');
        return;
    }

    isSpinning = true;
    diamonds -= 1000;
    document.getElementById('gem-count').innerText = diamonds;

    const wheel = document.getElementById('wheel');
    
    // የዘፈቀደ ዙሮች (ለምሳሌ ከ 5 እስከ 8 ሙሉ ዙሮች + የዘፈቀደ አንግል)
    const randomDegree = Math.floor(Math.random() * 360) + 2880;
    
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        isSpinning = false;
        alert('እንኳን ደስ አለዎት! ሽልማትዎ ተመዝግቧል።');
        // እዚህ ላይ ተጨማሪ ነጥብ ወይም ዶላር ወደ データベース (Backend) መላክ ይቻላል
    }, 4000);
}
