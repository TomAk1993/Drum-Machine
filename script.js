//audio source files

const clapsample = new Audio();
clapsample.src = "assets/snare.wav";

const kicksample = new Audio();
kicksample.src = "assets/kick.wav";

const hihatsample = new Audio();
hihatsample.src = "assets/closedhihat.wav"

const hihatsample2 = new Audio();
hihatsample2.src = "assets/openhihat.wav"

const hitomsample = new Audio();
hitomsample.src = "assets/hitom.wav"

const lowtomsample = new Audio();
lowtomsample.src = "assets/lowtom.wav"

const crash1sample = new Audio();
crash1sample.src = "assets/crash1.wav"

const crash2sample = new Audio();
crash2sample.src = "assets/crash2.wav"

const ridesample = new Audio();
ridesample.src = "assets/ride.wav"

// sample pads 

const kick = document.getElementById('kick');
const clap = document.getElementById('clap');
const hihat = document.getElementById('hihat');
const hihat2 = document.getElementById('hihat2');
const hitom = document.getElementById('hitom');
const lowtom = document.getElementById('lowtom');
const crash1 = document.getElementById('crash1');
const crash2 = document.getElementById('crash2');
const ride = document.getElementById('ride');


kick.addEventListener("mousedown", kickClick, false);
function kickClick(e) {
    kicksample.currentTime = 0;
    kicksample.play();
    e.preventDefault();
}

kick.addEventListener("touchStart", kickTouch, false);
function kickTouch(e) {
    kicksample.currentTime = 0;
    kicksample.play();
    e.preventDefault();
}

clap.addEventListener("mousedown", clapClick, false);
function clapClick(e) {
    clapsample.currentTime = 0;
    clapsample.play(); 
    e.preventDefault();
}

clap.addEventListener("touchStart", clapTouch, false);
function clapTouch(e) {
    clapsample.currentTime = 0;
    clapsample.play(); 
    e.preventDefault();
}

hihat.addEventListener("mousedown", hhClick, false);
function hhClick(e) {
    hihatsample.currentTime = 0;
    hihatsample.play();   
    e.preventDefault();
}

hihat.addEventListener("touchStart", hhTouch, false);
function hhTouch(e) {
    hihatsample.currentTime = 0;
    hihatsample.play();   
    e.preventDefault();
}

hihat2.addEventListener("mousedown", hh2Click, false);
function hh2Click(e) {
    hihatsample2.currentTime = 0;
    hihatsample2.play();   
    e.preventDefault();
}

hihat2.addEventListener("touchStart", hh2Touch, false);
function hh2Touch(e) {
    hihatsample2.currentTime = 0;
    hihatsample2.play();   
    e.preventDefault();
}

hitom.addEventListener("mousedown", hitomClick, false);
function hitomClick(e) {
    hitomsample.currentTime = 0;
    hitomsample.play();  
    e.preventDefault();
}

hitom.addEventListener("touchStart", hitomTouch, false);
function hitomTouch(e) {
    hitomsample.currentTime = 0;
    hitomsample.play();     
    e.preventDefault();
}

lowtom.addEventListener("mousedown", lowtomClick, false);
function lowtomClick(e) {
    lowtomsample.currentTime = 0;
    lowtomsample.play(); 
    e.preventDefault();
}

lowtom.addEventListener("touchStart", lowtomTouch, false);
function lowtomTouch(e) {
    lowtomsample.currentTime = 0;
    lowtomsample.play();   
    e.preventDefault();
}

crash1.addEventListener("mousedown", crash1Click, false);
function crash1Click(e) {
    crash1sample.currentTime = 0;
    crash1sample.play(); 
    e.preventDefault();
}

crash1.addEventListener("touchStart", crash1Touch, false);
function crash1Touch(e) {
    crash1sample.currentTime = 0;
    crash1sample.play();  
    e.preventDefault();
}

crash2.addEventListener("mousedown", crash2Click, false);
function crash2Click(e) {
    crash2sample.currentTime = 0;
    crash2sample.play();   
    e.preventDefault();
}

crash2.addEventListener("touchStart", crash2Touch, false);
function crash2Touch(e) {
    crash2sample.currentTime = 0;
    crash2sample.play();    
    e.preventDefault();
}

ride.addEventListener("mousedown", rideClick, false);
function rideClick(e) {
    ridesample.currentTime = 0;
    ridesample.play();   
    e.preventDefault();
}

ride.addEventListener("touchStart", rideTouch, false);
function rideTouch(e) {
    ridesample.currentTime = 0;
    ridesample.play(); 
    e.preventDefault();
}


// keydown events for keyboard down

window.addEventListener('keydown', (e) =>{
    switch (e.code) {
        case 'KeyC':
            kicksample.currentTime = 0;
            kicksample.play();
            kick.classList.add('background')
    }

    switch (e.code) {
        case 'KeyV':
            clapsample.currentTime = 0;
            clapsample.play();
            clap.classList.add('background')
    }
    switch (e.code) {
        case 'KeyG':
            hihatsample.currentTime = 0;
            hihatsample.play();
            hihat.classList.add('background')

    }
    switch (e.code) {
        case 'KeyH':
            hihatsample2.currentTime = 0;
            hihatsample2.play();
            hihat2.classList.add('background')

    }
    switch (e.code) {
        case 'KeyF':
            hitomsample.currentTime = 0;
            hitomsample.play();
            hitom.classList.add('background')

    }
    switch (e.code) {
        case 'KeyJ':
            lowtomsample.currentTime = 0;
            lowtomsample.play();
            lowtom.classList.add('background')

    }
    switch (e.code) {
        case 'KeyT':
            crash1sample.currentTime = 0;
            crash1sample.play();
            crash1.classList.add('background')

    }
    switch (e.code) {
        case 'KeyY':
            crash2sample.currentTime = 0;
            crash2sample.play();
            crash2.classList.add('background')

    }
    switch (e.code) {
        case 'KeyU':
            ridesample.currentTime = 0;
            ridesample.play();
            ride.classList.add('background')

    }
});

// key up for keyboard use

window.addEventListener('keyup', (e) =>{
    switch (e.code) {
        case 'KeyC':
            kick.classList.remove('background')
    }
    switch (e.code) {
        case 'KeyV':
            clap.classList.remove('background')
    }
    switch (e.code) {
        case 'KeyG':
            hihat.classList.remove('background')

    }
    switch (e.code) {
        case 'KeyH':
            hihat2.classList.remove('background')

    }
    switch (e.code) {
        case 'KeyF':
            hitom.classList.remove('background')

    }
    switch (e.code) {
        case 'KeyJ':
            lowtom.classList.remove('background')

    }
    switch (e.code) {
        case 'KeyT':
            crash1.classList.remove('background')

    }
    switch (e.code) {
        case 'KeyY':
            crash2.classList.remove('background')

    }
    switch (e.code) {
        case 'KeyU':
            ride.classList.remove('background')

    }
});

// Mixer

let kickVolume = document.querySelector("#kickVolume");
kickVolume.addEventListener("change", function(e) {
kicksample.volume = e.currentTarget.value / 100;
})

let clapVolume = document.querySelector("#clapVolume");
clapVolume.addEventListener("change", function(e) {
clapsample.volume = e.currentTarget.value / 100;
})

let hhcVolume = document.querySelector("#hhcVolume");
hhcVolume.addEventListener("change", function(e) {
hihatsample.volume = e.currentTarget.value / 100;
})

let hhoVolume = document.querySelector("#hhoVolume");
hhoVolume.addEventListener("change", function(e) {
hihatsample2.volume = e.currentTarget.value / 100;
})

let hiTomVolume = document.querySelector("#hiTomVolume");
hiTomVolume.addEventListener("change", function(e) {
hitomsample.volume = e.currentTarget.value / 100;
})

let lowTomVolume = document.querySelector("#lowTomVolume");
lowTomVolume.addEventListener("change", function(e) {
lowtomsample.volume = e.currentTarget.value / 100;
})

let crash1Volume = document.querySelector("#crash1Volume");
crash1Volume.addEventListener("change", function(e) {
crash1sample.volume = e.currentTarget.value / 100;
})

let crash2Volume = document.querySelector("#crash2Volume");
crash2Volume.addEventListener("change", function(e) {
crash2sample.volume = e.currentTarget.value / 100;
})

let rideVolume = document.querySelector("#rideVolume");
rideVolume.addEventListener("change", function(e) {
ridesample.volume = e.currentTarget.value / 100;
})