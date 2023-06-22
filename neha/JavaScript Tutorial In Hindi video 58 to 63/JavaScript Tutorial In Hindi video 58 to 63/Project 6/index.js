console.log('This is my project 6 from javascript course');

//utility fucntions:
//1.utitlity fucntion to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}


//initialize no of parameters
let addedParamsCount = 0;

//hide the parameters box intitally
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

//if the user clicks on params ,    hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('ParametersBox').style.display = 'block';

})

//if the use clcikx on params ,hide the params box 

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})

//if the user clicks on + button,add more parametrs

let addParam = document.getElementById('addParam');
addParam, addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row">
            <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamsCount + 2}</label>
            <div class="col-md-4">
                <input type="text" class="form-control" id="parameterKey${addedParamsCount + 2}" placeholder="Enter parameter ${addedParamsCount + 2} key">
            </div>
            <div class="col md-4">
                <input type="text" class="form-control"id="ParameterValue ${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} value">
            </div>
            <button class="btn btn-primary  deleteParam">+</button>
            </div>`
    //convert the element string to dom node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement)

    //add an event listener to remove the parameter on clicking -button 

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of delteparam) {
        item.addEventListener('click', (e) => {
            //todo:add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();

        })
    }
    addedParamCount++;
})
//if the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show please wait int the response box to request patience from the user
    document.getElementById('responseJsonText').value = "Please wait...Fetching response...";

    //fetch all values user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;




    //if the user has used params option instead of json ,collect all the parameters is an object 
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamsCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1) != undefined)) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parametervalue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value
    }

    //  log all teh values in the console for debugging
    console.log('URL IS', url);
    console.log('requestType is', requestType);
    console.log('contentType is', contentType);
    console.log('data is', data);

    // if the request Type is GET,invoke fetch apito create a post request

    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response, text())
            .then((text) => {
                document.getElementById('responseJsonText').value = text;
            })
    }


})
