# Project Rekated to DOM

## Project Link
[Click Here!](https://stackblitzstartersy1hua6-c2fg--8080--34c588ed.local-credentialless.webcontainer.io)

# Solution Code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((btns) => {
  btns.addEventListener('click', (event) => {
    if (event.target.id == 'grey') {
      body.style.backgroundColor = 'grey';
    } else if (event.target.id == 'white') {
      body.style.backgroundColor = 'white';
    } else if (event.target.id == 'blue') {
      body.style.backgroundColor = 'blue';
    } else if (event.target.id == 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});
```