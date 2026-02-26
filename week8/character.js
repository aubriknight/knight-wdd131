
const card = {
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    // stop from going below 0
    attacked: function () {
        this.health = Math.max(0, this.health - 10);
        const healthElement = document.querySelector('.stats p:nth-child(3)');
        healthElement.textContent = `Health: ${this.health}`;
    },
    // stop from going above 20
    levelUp: function () {
        this.level = Math.min(20, this.level + 1);
        const levelElement = document.querySelector('.stats p:nth-child(2)');
        levelElement.textContent = `Level: ${this.level}`;
    }
}

document.querySelector("#attacked").addEventListener("click", function () {
    card.attacked();
});

document.querySelector("#levelUp").addEventListener("click", function () {
    card.levelUp();
});