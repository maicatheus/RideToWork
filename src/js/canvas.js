import ground_image from '../img/ground.png'
import background_image from '../img/backgroundImage.png'
import casa1 from '../img/casa1.png'
import casa2 from '../img/casa2.png'
import casa3 from '../img/casa3.png'
import pucrs from '../img/pucrs.png'
import aquiris from '../img/aquiris.png'
import rideToRight from '../img/ridesprite.png'
import standUp from '../img/standup.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 800
canvas.height = 530

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
       this.width = 100
       this.height = 100
       this.image = createImage(standUp)
       this.frames = 0
       this.sprites = {
           stand: createImage(standUp),
           ride: createImage(rideToRight) 
       }

       this.currentSprite = this.sprites.stand
    }

    draw(){
        c.drawImage(
            this.currentSprite,
            210.75 * this.frames,
            0,
            210.75,
            184, 
            this.position.x, 
            this.position.y, 
            this.width,
            this.height)        
    }

    update(){
        this.frames++
        if(this.frames>=24){
            this.frames = 0
        }

        this.draw()
        this.position.y+=this.velocity.y
        this.position.x+=this.velocity.x

        if (this.position.y +this.height +  this.velocity.y <= canvas.height)
            this.velocity.y += gravity

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

class GenericObject{
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
      }
  }

function createImage(url){
    const image = new Image()
    image.src = url
    return image
}


const player = new Player()

const groundImage = createImage(ground_image)

const gounds = [
    new Ground({
        x:0,
        y:500,
        image: groundImage
    }), 
    new Ground({
        x:(groundImage.width),
        y:500,
        image:groundImage
    }),
    new Ground({
      x:(2*groundImage.width + 120),
      y:500,
      image:groundImage
    }),
    new Ground({
        x:(3*groundImage.width + 300),
        y:500,
        image:groundImage
    }),
    new Ground({
        x:(4*groundImage.width + 450),
        y:500,
        image:groundImage
    }),
    new Ground({
        x:(5*groundImage.width + 570),
        y:500,
        image:groundImage
    }),
    new Ground({
        x:(6*groundImage.width + 630),
        y:500,
        image:groundImage
    }),
    new Ground({
        x:(7*groundImage.width + 630),
        y:500,
        image:groundImage
    })

]
const background = new GenericObject({
    x:0,
    y:0,
    image: createImage(background_image)
})
const generricObjects = [
    new GenericObject({
        x:2*createImage(casa1).height,
        y:createImage(casa1).height - 60,
        image: createImage(casa1)
    }),
    new GenericObject({
        x:3.3*createImage(casa2).width,
        y:510 - createImage(casa2).height ,
        image: createImage(casa2)
    }),
    new GenericObject({
        x:5*createImage(casa3).width,
        y:510 - createImage(casa3).height ,
        image: createImage(casa3)
    }),

    new GenericObject({
        x:3*createImage(pucrs).width,
        y:510 - createImage(pucrs).height ,
        image: createImage(pucrs)
    }),
    new GenericObject({
        x:6.5*createImage(aquiris).width,
        y:510 - createImage(aquiris).height ,
        image: createImage(aquiris)
    }),
]

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
}

let scrolScreem = 0

function animate(){
    
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0, canvas.width,canvas.height)
    background.draw()
    generricObjects.forEach(generricObjects =>{
        generricObjects.draw()
    })
    gounds.forEach(ground =>{
        ground.draw()
    })

    player.update()

    console.log(player.position.y)
    if (keys.right.pressed && player.position.x < 400){
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 50){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
        if(scrolScreem<=6300){
            if(keys.right.pressed){
                gounds.forEach(ground =>{
                    ground.position.x -= 5
                    scrolScreem += 1
                })
                generricObjects.forEach(genericObject =>{
                    genericObject.position.x -=3
                })
            }
            if(keys.left.pressed){
                if (scrolScreem >= 5){
                    gounds.forEach(ground =>{
                        ground.position.x += 5
                        scrolScreem -= 1
                    })
                    generricObjects.forEach(genericObject =>{
                        genericObject.position.x +=3
                    })
                }
            }
        }
        
        
    }
    console.log(scrolScreem)
    if(scrolScreem>=6000){
        player.velocity.x = 10
    }
    if(player.position.x > 900){
        alert("Matheus chegou no horário!\n\n")
    }
    if(player.position.y > canvas.height && scrolScreem<=6000){
        alert("Você caiu!\nVai chegar atrasado!\n\nReinicia a página para tentar novamente!")
    }

    // ground collision detection
    gounds.forEach(ground =>{
        if(player.position.y + player.height <= ground.position.y && player.position.y + player.height + player.velocity.y >= ground.position.y && player.position.x + player.height >= ground.position.x && player.position.x <= ground.position.x + ground.width){
            player.velocity.y = 0
        }
    })
    

}

alert("Utilize 'A' e 'D' para se mover e 'W' para saltar! ")
animate()

addEventListener('keydown', ( {keyCode} ) =>{
    // a keycode 65 ,s keycode 83, d keycode 68, w keycode 87
    // space 32
    switch (keyCode){
        case 65:
            console.log('esquerda')
            keys.left.pressed = true
            player.currentSprite = player.sprites.ride
            break
        case 83:
            console.log('baixo')
            break
        case 68:
            console.log('direita')
            keys.right.pressed = true
            player.currentSprite = player.sprites.ride
            break
        case 87:
            console.log('cima')
            if (player.position.y ==399.5){
                player.velocity.y -= 10
            }
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
            player.currentSprite = player.sprites.stand
            break
        case 68:
            console.log('direita')
            keys.right.pressed = false
            player.currentSprite = player.sprites.stand
            break
    
}
})

