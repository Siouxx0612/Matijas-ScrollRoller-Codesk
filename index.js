
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
        //separate how our player looks like from that we are updating
        this.draw()
        this.position.y += this.velocity.y
// check velocity, add gravity, if we are above the bottom then stop velocity ( this.velocity.y = 0 )
//monitor our players start y position and then we add our players height for monitoring bottom of our player now.
//we know velocity is been added to our player over time so we need to make sure that were adding on the players the velocity on the y-axis, and we want to say if the bottim of our player plus
//  its velocity is less than the bottom of our canvas right here then we want to keep adding gravity onto it, but the second that our player passes the bottom of the screen we want to set its
// velocity equal to zero.
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
            //as soon as our player croses that line
        else this.velocity.y = 0
    }
}

const player = new Player()

//Function, animation loop, to get our Player to move
function animate() {
    //using recursive loop to call animate over and over and over again
    requestAnimationFrame(animate)
    //get our context and maintain shape of the rectangle. Its gonna clear our canvas, take everything off it.
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}
animate()