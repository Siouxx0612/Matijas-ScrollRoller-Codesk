
const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//create graviti to accelerate velocity on axis y
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
            y: 1
        }
        //Our Players size
        this.width = 30
        this.height = 50
    }

    //Method to define our Player
    draw() {

        c.fillStyle = 'red'
        //Where is our Player and how big it is
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
//Update our players property over time
    update() {
        this.draw()
        this.position.y += this.velocity.y
// check velocity, if we are above the bottom then stop velocity ( this.velocity.y = 0 )
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)
    //maintain shape of the rectangle
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}
animate()