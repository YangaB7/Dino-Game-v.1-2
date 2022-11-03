let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;

/**
 * Make the player jump.
 */
function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}

/**
 * Set the bounds for the box's collision range.
 */
const COLLISION_BOX = {
    right: 20,
    left: -20
}

/**
 * Checks whether the block collides, by the boundaries set in {@link COLLISION_BOX}.
 * @param {number} blockCoord 
 * @returns whether the player collides.
 */
function collides(blockCoord) {
    return blockCoord < COLLISION_BOX.right && blockCoord > COLLISION_BOX.left
}

/**
 * Checks if a player is jumping.
 * @param {number} characterTop 
 * @returns whether the player is jumping.
 */
function isJumping(characterTop) {
    return characterTop < 130
}

let checkDeath = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (collides(blockLeft) && !isJumping(characterTop)) {
        block.style.animation = "none";
        alert("Game Over :( Score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);