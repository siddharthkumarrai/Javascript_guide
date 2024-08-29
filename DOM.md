# Js DOM MANIPULATION

**Window Obj ---> global Obj** &nbsp;  &nbsp;    (sab kuch window object ke ander ata hain sab isi ke child hain)

**HTML code ---> convert javascript object  ---> document**

**HTML Tag  ---> Convert token ---> conver node ---> bunch of node is DOM**

## DOM Tree Structure

```mermaid
graph TD;
    Document --> html;
    html --> head;
    html --> body;
    head --> title;
    body --> h1;
    body --> p;

graph TD;
    Window --> DOM;
    Window --> BOM;
    Window --> "Core JavaScript";

### Key Points:
1. **Separate Code Blocks**: Ensure that each Mermaid diagram is enclosed in its own triple backticks (```) and `mermaid` keyword.
2. **No Overlap**: Don't try to combine the two diagrams into one Mermaid block unless you intend to merge their contents.

### If Merging is Necessary:
If you want to combine both diagrams into a single Mermaid graph, you need to carefully structure the nodes so they don’t conflict. Here’s an example:

```markdown
## Combined Diagram

```mermaid
graph LR;
    Window --> DOM;
    Window --> BOM;
    Window --> "Core JavaScript";
    
    DOM --> html;
    html --> head;
    html --> body;
    head --> title;
    body --> h1;
    body --> p;
