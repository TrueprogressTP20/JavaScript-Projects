function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById('result').value = "";
}

function calculate(value) {
    const r = document.getElementById('result').value;
    const q = eval(r);
    document.getElementById('result').value = q;
}

const input = document.getElementById('result');
input.addEventListener('mouseover', () => {
    input.style.color = 'red';
})

input.addEventListener('mouseup', () => {
    input.style.color = 'black';
})