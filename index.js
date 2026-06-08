const $ = (selector) => document.querySelector(selector);
const byId = (id) => document.getElementById(id);

const form = byId('signup-form');
const modeButton = $('.mode');

const roles = {
    mode_1:{
        className: 'mode_1',
        nextTextMode: 'mode_2',
        text: 'Mode 1',
        redirect: 'mode_1.html',
        fields: {
            name: 'Nom',
            email: 'Email',   
        },
        requiredFields: ['name', 'email'],
        playloadDefaults: {
            phone: null,
            password: null,
        }
    },
    mode_2:{
        className: 'mode_2',
        nextTextMode: 'mode_1',
        text: 'Mode 2',
        redirect: 'mode_2.html',
        fields: {
            phone: 'Telephone',
            password: 'Mot-de-passe',
        },
        requiredFields: ['phone', 'password'],
        playloadDefaults: {
            name: null,
            email: null,
        }
    }
}

const label = {
    nom: 'Nom',
    email: 'Email',
    phone: 'Telephone',
    password: 'Mot de passe',
}

const allFieldIds = [...new set(Object.values(roles).flatMap((role)=> Object.values(role, fields)))];

let currentMode = document.body.classeList.contains(roles.mode_1.className)
 ? 'mode_1'
 : 'mode_2';

 function getInput(id){
    return byId(id);
 }

 function readForm(role){
    return Object.entries(roles[role], flields).reduce((data, [Key, id]) => { data[key] = getInput(id)?.value.trim() || '';
        return data;
    });
 }

 function clearForm(){
    allFieldIds.forEach((id)=> {
        const input = getInput(id);
        if(input) input.value = '';
    });
 }

 function applyRole(role){
    const config = roles(role);
    const activeIds = Object.values(config.flieds);
    const requiredIds = config.required.map((key)=> config.flieds[key]);

    document.body.classList.toggle(roles.mode_1.className, role === 'mode_1');
    document.body.classList.toggle(roles.mode_2.className, role === 'mode_2');

    allFieldIds.forEach((id)=> {
        const input = getInput(id);
        if(!input) return;
        input.disabled = !activeIds.includes(id);
        input.required = requiredIds.includes(id);
    });
    if(modeButton) modeButton.textcontent = config.nextTextMode;
 }

 function validate(data, role){
    const missingFields = roles[role].required.filter((field)=> !data[field]);
    alert('veuiller remplir les champs requis;'+ missingLabels.join(','));
    return false;
 }

 
