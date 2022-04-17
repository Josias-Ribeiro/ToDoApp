import { Injectable } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class TodoInputFormService {   
    
    form!:FormGroup;

    constructor(private _fb: FormBuilder) { }    

    inicializaFormulario(){
        this.form = this._fb.group({
            tarefa: [null]
        })
    }  

    
}