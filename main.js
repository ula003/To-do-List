const button = document.querySelector('.addItem')
const input = document.querySelector('input')
const taskPanel = document.querySelector('.tasks')
const task = document.querySelector(".task")
let icon = document.createElement('i')

button.onclick=()=>{
    let taskNew = document.createElement('div')
    let name = document.createElement('span')
    let time = document.createElement('span')
    let text = document.createElement('div')
    if(input.value.trim() == ''){
        alert('Нужно заполнить поле названия')
    }else{
        taskNew.classList.add('task');
        taskNew.appendChild(text);
        taskNew.appendChild(icon)
        icon.classList.add('material-icons')
        icon.innerHTML = 'delete'
        text.classList.add('text')
        text.appendChild(name);
        text.appendChild(time);
        name.innerHTML = input.value;
        time.innerHTML = newHours();
        taskPanel.appendChild(taskNew);
        icon.onclick = function() {
            this.parentElement.style.display = 'none';
        };
    }
}
function newHours(){
    const date = new Date();
    return date.getHours() + ':' + ('0' + date.getMinutes()).slice(-2); // Форматирование времени "часы:минуты"
}