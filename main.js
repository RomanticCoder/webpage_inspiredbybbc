(()=>{
    const stepElems = document.querySelectorAll(".step");
    const graphicElems = document.querySelectorAll(".graphic-item");
        
    let currentItem = graphicElems[0]; //현재 활성화된 .graphic-item을 지정
    let ioIndex;
    const io = new IntersectionObserver((entries)=>{
        ioIndex = +entries[0].target.dataset.index;
        });

    window.addEventListener("load",()=>{
        window.scrollTo(0,0);

});
const actions = {
    cpEating(){
        const pic = document.querySelector('[data-index="3"] .scene-img').getBoundingClientRect();

        const x = pic.x;
        const y = pic.y;

        const cater = document.querySelector('[data-index="3"] .caterpillar');
        cater.style.left = x;
        cater.style.top = y;

        const movingWidth = (cater.width)*-0.3+"px";
        cater.style.transform = `translateX(${movingWidth})`;
    }
}

    activate();

    for(let i = 0; i < stepElems.length; i++){
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = i;
        graphicElems[i].dataset.index = i;

    }

    function activate(action){
        currentItem.classList.add('visible');
        if(action){
            actions[action]();
        }
    }

    function inactivate(){
        currentItem.classList.remove('visible');
    }

    window.addEventListener('scroll',()=>{
        let step;
        let boundingRect;

        for(let i = ioIndex - 1; i < ioIndex +2 ; i++){
            step = stepElems[i];
            if(!step){continue;}
            boundingRect = step.getBoundingClientRect();
            if(boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8)
                {
                    inactivate(currentItem.dataset.action);
                    currentItem = graphicElems[step.dataset.index];
                    activate(currentItem.dataset.action);
                }

        }

    });

    window.addEventListener('load',()=>{
        setTimeout(()=>{
            scrollTo(0,0);
        },100);
    });


})();