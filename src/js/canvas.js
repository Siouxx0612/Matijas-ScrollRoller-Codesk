import platform from '../img/platform.png'
import background from '../img/background.png'
import hills from '../img/hills.png'

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
canvas.width = 1400
canvas.height = 576
//create gravity to accelerate velocity on axis-y
const gravity = 0.5
class Player {
    // our Player starting position
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        //Players velocity
        this.velocity = {
            x: 0,
            y: 0
        }
        //Our Players size
        this.width = 30
        this.height = 50
    }
    //Method to define our Player and create our object size
    draw() {
        c.fillStyle = 'red'
        //Where is our Player and how big it is
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    //Update our players property over time
    update() {
        //separate how our player looks like from that we are updating
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        // check velocity, add gravity, if we are above the bottom then stop velocity ( this.velocity.y = 0 )
        //monitor our players start y position and then we add our players height for monitoring bottom of our player now.
        //we know velocity is been added to our player over time so we need to make sure that were adding on the players the velocity on the y-axis, 
        //and we want to say if the bottim of our player plus
        //its velocity is less than the bottom of our canvas right here then we want to keep adding gravity onto it, 
        //but the second that our player passes the bottom of the screen we want to set its
        //velocity equal to zero.
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        //as soon as our player croses that line, hitts the bottom.
        //Now not relevant, we want the player to fall down and our code is continued on Loose condition
        // else this.velocity.y = 0
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        //draws rectangle like we did with our Player. Create our platform size
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        //Replace our initial box with an image. 
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class BackgroundObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            //Its the same
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)

    }
}
function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}
let platformImage = createImage(platform)
let player = new Player()
// const platform = new Platform()
//create multiple platforms, and create one platfor in that array
let platforms = [
    new Platform({ x: -1, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 3, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width * 2 +300, y: 470, image: platformImage }),
]
let backgroundObjects = [
    new BackgroundObject({
        x: -1,
        y: -1,
        image: createImage(background)
    }),
    new BackgroundObject({
        x: -1,
        y: -1,
        image: createImage(hills)
    })
]
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
let howFarScrollOffset = 0

function restartGame() {
platformImage = createImage(platform)
player = new Player()
// const platform = new Platform()
//create multiple platforms, and create one platfor in that array
 platforms = [
    new Platform({ x: -1, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 3, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width * 2 +300, y: 470, image: platformImage }),
]
backgroundObjects = [
    new BackgroundObject({
        x: -1,
        y: -1,
        image: createImage(background)
    }),
    new BackgroundObject({
        x: -1,
        y: -1,
        image: createImage(hills)
    })
]

howFarScrollOffset = 0
}

//Function, animation loop, to get our Player to move and where we have our changes over time
function animate() {
    //using recursive loop to call animate over and over and over again
    requestAnimationFrame(animate)
    //get our context and maintain shape of the rectangle. Its gonna clear our canvas, take everything off it.
    // c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    backgroundObjects.forEach(backgroundObject => {
        backgroundObject.draw()
    })
    //loop trough array and select one individual platform in that array. platform, arbitrarily named platform but it makes sence 
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()


    //Check if the keys are true or false for movement Left or Right
    if (keys.right.pressed && player.position.x < 600) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            howFarScrollOffset += 5
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            backgroundObjects.forEach(backgroundObject => {
                backgroundObject.position.x -= 2
            })
        }
        else if (keys.left.pressed) {
            howFarScrollOffset -= 5
            platforms.forEach(platform => {
                platform.position.x += 5
            })
            backgroundObjects.forEach(backgroundObject => {
                backgroundObject.position.x += 2
            })
        }
    }
    //check if our players y position plus height, so the bottom of the player whether or not the bottom of the player
    //is less than the top of our platform
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })

    let winMsg = document.querySelector("h1")
    if (howFarScrollOffset > 1000) {
       
    }

    //LOOSE
    if(player.position.y > canvas.height) {
        restartGame()
    }

}
animate()

//EventListener for our keys on pres down for Player movment
window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('LEFT')
            keys.left.pressed = true
            break
        case 83:
            console.log('DOWN')
            break
        case 68:
            console.log('RIGHT')
            keys.right.pressed = true
            break
        case 87:
            console.log('UP')
            player.velocity.y -= 20
            break
        case 32:
            console.log('JUMP')
            player.velocity.y -= 20
            break

    }
})
window.addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('LEFT')
            keys.left.pressed = false
            break
        case 83:
            console.log('DOWN')
            break
        case 68:
            console.log('RIGHT')
            keys.right.pressed = false
            break
        case 87:
            console.log('UP')
            player.velocity.y = 0
            break
        case 32:
            console.log('JUMP')
            player.velocity.y = 0
            break

    }
})