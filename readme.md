### *Español*

# ¿De qué se trata?

Es un proyecto sencillo de una sola página web, hecho en typescript, también usando bootstrap.

## Diseño

Tomé ideas de diferentes plantillas de diseño y las adapté, empleando clases de bootstrap y agregando mis propios estilos con un archivo scss.

```html
<div class="col-auto my-1">
    <a href="" class="link-light social-media d-inline-block">Facebook</a>
    <span class="text-light">|</span>                    
</div>
```

```scss
$blueslate: #8ecae6;
$coolgray: #219ebc;
$indanblue: #023047;

@import '../bootstrap/scss/bootstrap.scss';
```

## Funcionamiento

Posteriormente, creé el código en typescript, importando hacia el archivo main distintas funciones para iniciar y cerrar sesión.

```ts
export class User{
    constructor(private _email:string, private _username:string, private _password:string){}

    get email():string{
        return this._email;
    }
    set email(address){
        this._email = address;
    }
```

## Debugging

Pude detectar también algunos bugs y corregirlos mediante las herramientas de desarrollador de [Google](https://developers.google.com/search/docs/guides/debug).

#
### *English*

# What is it about?

It is a simple project about a single page website made in typescript, using also bootstrap.

## Design

I got ideas from different design templates and I adapted them, used bootstrap classes and a scss file.

```html
<div class="col-auto my-1">
    <a href="" class="link-light social-media d-inline-block">Facebook</a>
    <span class="text-light">|</span>                    
</div>
```

```scss
$blueslate: #8ecae6;
$coolgray: #219ebc;
$indanblue: #023047;

@import '../bootstrap/scss/bootstrap.scss';
```

## Working

Afterwards, I developed the code in typescript, I made imports, to main file, of log in and log out functions and variables.

```ts
export class User{
    constructor(private _email:string, private _username:string, private _password:string){}

    get email():string{
        return this._email;
    }
    set email(address){
        this._email = address;
    }
```

## Debugging

In addition, I detect some bugs through the developer tools of [Google](https://developers.google.com/search/docs/guides/debug).