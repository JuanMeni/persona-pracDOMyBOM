export function validarNombre(min, max, input){
    if(input.value.trim().length >= min && input.value.trim().length <= max){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarEdad(input){
    let patron = /^[\d]{1,3}$/
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarDni(input){
    let patron = /^[\d]{1,2}[\d]{3,3}[\d]{3,3}$/
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarSexo(input){
    if(input.value.trim().length > 0){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarPeso(input){
    let patron = /^[\d]{1,3}(,[\d]{1,2})?$/;
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarAltura(input){
    let patron = /^[1-2]{1,1}(,[\d]{1,2})?$/;
    if(patron.test(input.value.trim())){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}

export function validarAnio(input){
    let anioActual = new Date().getFullYear
    if(input.value >= 1930 && input.value <= anioActual){
        input.className = 'form-control is-valid'
        return true
    }else{
        input.className = 'form-control is-invalid'
        return false
    }
}
