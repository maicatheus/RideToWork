import ground_image from '../img/ground.png'
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = 600 

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

        if (this.position.y +this.height +  this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y=0
    }

}

class Ground{
  constructor({ x,y, image }){
    this.position = {
        x,
        y
    }
    this.image = image
    this.width = image.width
    this.height = image.height

  }

  draw(){
    c.drawImage(this.image, this.position.x, this.position.y)

    //c.fillStyle = 'blue'
    //c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


const image = new Image()
image.src = ground_image
const player = new Player()

const gounds = [
    new Ground({
        x:0,
        y:500,
        image
    }), 
    new Ground({
        x:700,
        y:500,
        image
    }),
    new Ground({
      x:700 + 700,
      y:500,
      image
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

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width,canvas.height)
    player.update()
    gounds.forEach(ground =>{
        ground.draw()
    })


    if (keys.right.pressed && player.position.x < 200){
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if(keys.right.pressed){
            gounds.forEach(ground =>{
                ground.position.x -= 5
            })
        }
        if(keys.left.pressed){
            gounds.forEach(ground =>{
                ground.position.x += 5
            })
        }
    }

    // ground collision detection
    gounds.forEach(ground =>{
        if(player.position.y + player.height <= ground.position.y && player.position.y + player.height + player.velocity.y >= ground.position.y && player.position.x + player.height >= ground.position.x && player.position.x <= ground.position.x + ground.width){
            player.velocity.y = 0
        }
    })
    

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
            player.velocity.y -= 10
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

