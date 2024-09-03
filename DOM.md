# Js DOM MANIPULATION

**Window Obj ---> global Obj** &nbsp;  &nbsp;    (sab kuch window object ke ander ata hain sab isi ke child hain)

**HTML code ---> convert javascript object  ---> document**

**HTML Tag  ---> Convert token ---> conver node ---> bunch of node is DOM**

## DOM Tree Structure

```mermaid
graph TB;
    Window --> DOM;
    Window --> BOM;
    Window --> CoreJavaScript;
    
    document --> html;
    html --> head;
    html --> body;
    head --> title;
    body --> h1;
    body --> p;
```
## DOM MANIPULATION
### Javascript code ke through ---> HTML ko manipulate karna

**documnet.querySelector("#id")**

```mermaid
graph TB;

    change_HTML --> document;
    document --> Access;
    Access --> getElementByID;
    Access --> getElementByClassName;
    Access --> getElementByTagName;
    Access --> $0;
    document --> update_existing_element;
    update_existing_element --> innerHTML;
    update_existing_element --> outerHTML;
    update_existing_element --> textContent;
    update_existing_element --> innerText;
    document --> add_element;
    add_element --> creation_element;
    add_element --> .appendChild;
    .appendChild --> insertAdjacentElement;
    insertAdjacentElement --> position;
    insertAdjacentElement --> HTMLcontent
    position --> beforeBegin;
    position --> afterBegin;
    position --> beforeEnd;
    position --> afterEnd;
    document --> removeElement;
    removeElement --> removeChild;


```
> access element

- documnet.getElementById("#myid")
- document.getElementByClassName("myClass") &nbsp; &nbsp; &nbsp; // return HTML collection
- document.getElementByTagName("p")
- document.querySelector(".myclass")
- document.querySelectorAll(".myclass") &nbsp; &nbsp; &nbsp; // return node list

**Node list and HTML collection are not pure array (array like)**

> update element

- innerHTML
```javascript
const button = documnet.querySelector("#btn")
button.innerHTML = "<p>hello jee <p/>
```
- innerText
```javascript
   //jese  hum apne element to render karte ui pr same usi prkar humara innerHTML output dega
```
- textContent
```javascript
   // wo sara text content jo aap ke tag ke ander hota hain eg. tab /n
```

> add element

- create element
  ```javascript
     const heading = document.createElement("h1")
     heading.textContent = "my name is sidd"
  ```
- append element
  
  **child humesa end mein add ho rha hota hain**
  
  ```javascript
     const body = document.querySelector("body")
     body.appendChild(heading)
  ```
  
- insertAdjacentElement
  
  ```javascript
     let mydiv = document.querySelector("#mydiv);    // jis dive ke relative mein rkhna chate hain use select karna
     let newElement = document.createElement("span") // kon sa element rkhna hai
     mydiv.insertAdjacentHTML("beforebegin",newElement)
  ```
  
> remove element

```javascript
   const parent = document.querySelector("#mydiv")
   const child = document.querySelector("#mychild")
   parent.removeChild(child)
```
### Javascript code ke through ---> css manipulation

```mermaid
graph TB;

    manipulate_css --> external;
    manipulate_css --> internal;
    manipulate_css --> inline;

```

> inline style

 ```javascript
    para.style.backgroundColor = "black"                             // ek bar mein ek hi property ko change kar pata hunn
    para.style.cssText = "background-color: black; color: pink;"    // ek sath multiple style change kar sakta hunn
```
> setAttribute
```javascript
   const para = document.querySelector("p")
   para.setAttribute("class","myClass")
   para.setAttribute("style","padding: 1rem")
   para.className = "sidd raj"                      // class add karta hain
   para.classList                                   // return array like
   para.classList.add("myaddingclass")
   para.classList.remove("myclass")
   para.toggle("myClass")                           // return true and false class add or remove karega
   para.contains("myclass")                         // return true and false check present and absent
```

# Js Part 2
## Event_listener (refer to BGCOLORCHANGER in root directory)
```javascript
let body = document.querySelector("body")
let btns = document.querySelectorAll(".buttons")

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        // console.log(e)
        // console.log(e.target)

        switch(e.target.id){
            case e.target.id : body.style.backgroundColor = e.target.id
            break;
            case e.target.id : body.style.backgroundColor = e.target.id
            break;
            case e.target.id : body.style.backgroundColor = e.target.id
            break;
            case e.target.id : body.style.backgroundColor = e.target.id;
            break;
            default : body.style.backgroundColor = "white"
        }
    })
})
```





