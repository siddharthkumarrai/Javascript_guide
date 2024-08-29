# Js DOM MANIPULATION

**Window Obj ---> global Obj** &nbsp;  &nbsp;    (sab kuch window object ke ander ata hain sab isi ke child hain)

**HTML code ---> convert javascript object  ---> document**

**HTML Tag  ---> Convert token ---> conver node ---> bunch of node is DOM**

## DOM Tree and JavaScript Environment Overview

<div style="display: flex; justify-content: space-between;">

<div style="width: 48%;">

### DOM Tree Structure

```mermaid
graph TD;
    Document --> html;
    html --> head;
    html --> body;
    head --> title;
    body --> h1;
    body --> p;
</div> <div style="width: 48%;">

graph TD;
    Window --> DOM;
    Window --> BOM;
    Window --> "Core JavaScript";
</div> </div> ```



