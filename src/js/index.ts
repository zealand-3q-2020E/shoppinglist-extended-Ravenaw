//Write your Typescript code here
document.getElementById("addButton").addEventListener('click', add);
function add()
{
    const list = document.getElementById("list");
    let health = (<HTMLInputElement>document.getElementById("health")).checked;
    let index = list.childElementCount;
    const li = document.createElement("li");
    li.id = index.toString();
    li.className = (health ? "healthy" : "unhealthy");
    li.textContent = (<HTMLInputElement>document.getElementById("item")).value;
    list.appendChild(li);
}