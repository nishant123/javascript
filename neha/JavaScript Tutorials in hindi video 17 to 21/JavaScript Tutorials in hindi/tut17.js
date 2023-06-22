console.log('this is tutorial 17 on events js');
document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('you have clicked the heading');


    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);
    variable = e.target.id;
    variable = e.offsetX;
    console.log(variable);
    //
})