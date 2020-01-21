window.onload = function () {
    const bRed = document.querySelector('.block--red')
    const bBlue = document.querySelector('.block--blue')
    const bGreen = document.querySelector('.block--green')
    const bPink = document.querySelector('.block--pink')
    const bGray = document.querySelector('.block--gray')
    let myTimer

    let bArray = [
        bRed,
        bBlue,
        bGreen,
        bPink,
        bGray
    ]

    function trvlTimer (block) {
        const grow = "10px"
        block.style.width = block.style.width + grow
    } 


    const bLocation = function (block) {
        let tempOrd = 10
        bArray.forEach((item) => {
            if (parseInt(item.style.order) < tempOrd) {
                tempOrd = parseInt(item.style.order)
            }
        })
        block.style.order = tempOrd - 1 
    }


   
    bArray.forEach(function(block, index) {
        block.style.order = index;
        block.addEventListener('click', e => {
            e.preventDefault()
            e.stopPropagation()
            bLocation(block)
        })
        block.addEventListener('mousedown', e => {
            e.preventDefault()
            e.stopPropagation()
            block.style.width = '100px'
            myTimer = setInterval(trvlTimer(block), 10)
        } )
    })





}