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
**Javascript code ke through ---> HTML ko manipulate karna**
**documnet.querySelector("#id")**

```mermaid
graph TB;

    change_HTML --> document;
    document --> Access;
    Access --> getElementByID;
    Access --> getElementByClassName;
    Access --> getElementByTagName;
    Access --> $0;

```



