class React {
    constructor() {
        this.libary = 'React';
        this.server = 'https://localhost:300';

        // REQUIREMENT \\
        document.querySelector('button').addEventListener('click', this.clickBtn.bind(this))
    }

    clickBtn() {
        console.log('Click Button!');
        console.log(this);
    }
}

const newReact = new React();
