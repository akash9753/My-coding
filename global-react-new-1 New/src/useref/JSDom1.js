import React, { useEffect, useLayoutEffect } from "react";

const JSDom1 = () => {
  useLayoutEffect(() => {

    //insert adjascent Html
     let elm = document.getElementById("intro")
     let html1 = "<h1>New h1</h1>"
    //  elm.insertAdjacentHTML('beforebegin',html1)
    // elm.insertAdjacentHTML('afterbegin',html1)
    // elm.insertAdjacentHTML('beforeend',html1)
    elm.insertAdjacentHTML('afterend',html1)

    //Replace
    // let parent = document.getElementById("menu")
    // let item = document.createElement("li")
    // item.textContent = "Service"
    // let replace = parent.firstElementChild.nextElementSibling
    // parent.replaceChild(item, replace)
    
    //Clone
    // let menu = document.getElementById("menu");
    // // let cloneElm = menu.cloneNode();
    // let cloneElm = menu.cloneNode(true);
    // console.log(cloneElm);
    // cloneElm.id="newMenu"
    // document.body.appendChild(cloneElm)


       //adding new li
  // let list1 = document.getElementById('list1')
  // let item = document.createElement("li")
  // item.textContent = "new list 5"
  // // let pos = list1.firstElementChild;
  // let pos = list1.firstElementChild.nextElementSibling;
  // list1.insertBefore(item,pos);
   
  //how to remove child
    //  let parent = document.getElementById("menu");
    // //  let elm = parent.firstElementChild
    // let elm = parent.firstElementChild.nextElementSibling
    //  parent.removeChild(elm);
    //  document.body.removeChild(parent);


    

    // let ele = document.getElementById("first");
    // console.log(ele);
    // console.log(ele.innerHTML);
    // ele.innerHTML = "<p> Hello </p>"


    // let ele1 = document.getElementsByClassName("cl pi");
    // console.log(ele1.length);
    // for (let index = 0; index < ele1.length; index++) {
    //     ele1[index].innerHTML = "<p> Hello </p>"
    // }
    
    // let ele2 = document.getElementsByTagName("h2")
    // console.log(ele2.length);
    // for (let i = 0; i < ele2.length; i++) {
    //     ele2[i].innerHTML = " akash "
    // }

    // let div1 = document.getElementById("div12")
    // let ele3 = div1.getElementsByTagName("h2")
    // console.log(ele3.length);
    // for (let i = 0; i < ele3.length; i++) {
    //     ele3[i].innerHTML = " hello "
    // }

    // let qs = document.querySelector("p.intro")
  //   let qs = document.querySelectorAll("p.intro")
  //   qs.innerHTML = "oopop"
  //   console.log(qs);
  //   for (let i = 0; i < qs.length; i++) {
  //     qs[i].innerHTML = "hello"
  // }
     
    //  parent Element
  // let te = document.getElementById("intro1")
  // let prt = te.parentElement;
  // prt.innerHTML = "hello";
  // console.log(prt);

  // slecting first child
  // let fs = document.getElementById("intro1")
  // let node = fs.firstElementChild
  // let node = fs.lastElementChild
  // let node = fs.children
  // console.log(node);
  // for (let i = 0; i < node.length; i++) {
  //       node[i].innerHTML = "hello" 
  //   }

  // slecting sibling
  // let sl = document.getElementById("intro1")
  // let node = sl.previousElementSibling
  // let node = sl.nextElementSibling
  // console.log(node);


  //  innerHTML
  //  let elm = document.getElementById("intro")
  //  console.log(elm);
  //  let content = elm.innerHTML
  //  console.log(content);  
  //  elm.innerHTML = "<h1>this is a heading</h1>"

  //  Append class id text
  //  let elm = document.getElementById("intro")
  //  let h1 = document.createElement('h1')
  //  h1.className = "try pi"
  //  h1.id = "int"
  // //  let text = document.createTextNode("this is h1 tag") //adding text trhough method
  // //  h1.appendChild(text);
  // h1.textContent = "content added"
  // //  elm.appendChild(h1);

  // document.body.appendChild(h1);

  // let pra = document.getElementById("p1");
  // console.log(pra.textContent);

  
  },[]);

  return (
    <>
    <div className="App">

      <div id="intro">
        <h2>Heading</h2>
        <p>This is a p tag</p>
      </div>

      {/* <ul id="menu">
        <li>Home</li>
        <li>Product</li>
        <li>Abut us</li>
      </ul> */}

      {/* <ul id="menu">
        <li>Home</li>
        <li>Service</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}

    {/* <ul id="menu">
      <li>Home</li>
      <li>Product</li>
      <li>About</li>
    </ul> */}


    {/* <ul id="list1"> 
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
      </ul> */}



      {/* <li className="cl">list 1</li> */}
      {/* <li className="cl pi">list 1</li>
      <li id="first">list 2</li>
      <li className="cl">list 3</li> */}

    {/* <h2>heading 1</h2>
    <p>paragraph 1</p>
    <h2>heading 2</h2>
    <p>paragraph 2</p>
    <h2>heading 3</h2>
    <p>paragraph 3</p> */}

    {/* <h2>heading 1</h2>
    <div id="div12">
    <p>paragraph 1</p>
    <h2>heading 2</h2>
    <p>paragraph 2</p>
    <h2>heading 3</h2>
    <p>paragraph 3</p>
    </div> */}
     

     <br />

     {/* <h1>Query Selector</h1>
     
     <h2 className="intro">heading 1</h2>
    <div id="divQS">
    <p className="intro">paragraph 1</p>
    <h2 className="intro">heading 2</h2>
    <p>paragraph 2</p>
    <h2>heading 3</h2>
    <p className="intro">paragraph 3</p>
    </div> */}
      <br />

      {/* <h1>Traversing element</h1>
      <h2>heading 1</h2>
      <ul>
        <li >list 1</li>
        <li id="intro1">list 2</li>
        <li>list 3</li>
        <li>list 4</li>
      </ul>

      <ul>
        <li>list a</li>
        <li>list b</li>
        <li>list c</li>
        <li>list d</li>
      </ul> */}

      {/* <div id="intro">
        <p id="p1">Hello this is a p tag</p>
      </div> */}
      
      
      
    </div>
    </>
  );
};

export default JSDom1;
