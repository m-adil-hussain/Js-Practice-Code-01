const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/madilhussain');
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        let obj = JSON.parse(this);
        console.log(obj.followers);
    }
}
xhr.send();