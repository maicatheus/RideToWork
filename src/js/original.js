const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight 

const  gravity = 0.5

class Player{
    constructor(){
       this.position ={
           x:100,
           y:100
       } 
       this.velocity ={
           x:0,
           y:1
       }
       this.width = 30
       this.height = 30
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(
            this.position.x, 
            this.position.y,
            this.width,
            this.height
        ) 
    }

    update(){
        this.draw()
        this.position.y+=this.velocity.y
        this.position.x+=this.velocity.x

        if (this.position.y +this.height +  this.velocity.y <= ground.position.y)
            this.velocity.y += gravity
        else this.velocity.y=0
    }

}
class Ground{
    constructor({ x,y }){
        this.position = {
            x,
            y
        }
        this.width = 21000
        this.height = 50
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Obstacle{
    constructor({ x,y }){
        this.position = {
            x,
            y
        }
        this.width = 200
        this.height = 20
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
const ground = new Ground({
    x:0,
    y:400
})
const obstacles = [
    new Obstacle({
        x:200,
        y:100
    }), 
    new Obstacle({
        x:500,
        y:200
    })
]

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
}


let scrolOffset = 0

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width,canvas.height)
    player.update()
    ground.draw()
    obstacles.forEach(obstacle =>{
        obstacle.draw()
    })


    if (keys.right.pressed && player.position.x < 400){
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if(keys.right.pressed){
            scrolOffset +=5
            obstacles.forEach(obstacle =>{
                obstacle.position.x -= 5
            })
        }
        if(keys.left.pressed){
            scrolOffset -=5
            obstacles.forEach(obstacle =>{
                obstacle.position.x += 5
            })
        }
    }

    console.log(scrolOffset)

    // obstacle collision detection
    obstacles.forEach(obstacle =>{
        if(player.position.y + player.height <= obstacle.position.y && player.position.y + player.height + player.velocity.y >= obstacle.position.y && player.position.x + player.height >= obstacle.position.x && player.position.x <= obstacle.position.x + obstacle.width){
            player.velocity.y = 0
        }
    })

    if (scrolOffset > 2000){
        console.log('Acabou o mapa!!')
    }

    

}

animate()

addEventListener('keydown', ( {keyCode} ) =>{
    // a keycode 65 ,s keycode 83, d keycode 68, w keycode 87
    // space 32
    switch (keyCode){
        case 65:
            console.log('esquerda')
            keys.left.pressed = true
            break
        case 83:
            console.log('baixo')
            break
        case 68:
            console.log('direita')
            keys.right.pressed = true
            break
        case 87:
            console.log('cima')
            player.velocity.y -= 20
            break
        case 32:
            console.log('barra')
            break

    }
})
                
addEventListener('keyup', ( {keyCode} ) =>{
    // a keycode 65
    // s keycode 83
    // d keycode 68
    // w keycode 87
    // space 32
    switch (keyCode){
        case 65:
            console.log('esquerda')
            keys.left.pressed = false
            break
        case 68:
            console.log('direita')
            keys.right.pressed = false
            break
    
}
})

