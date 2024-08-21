
function customRender(reactElement,elemets){
  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.children
  for(const prop in reactElement.props){
     if(prop==='children')continue
      domElement.setAttribute(prop,reactElement.props[prop])
  }
  elemets.appendChild(domElement)
}

 const reactElement={
  type:'a',
  props:{
      href:"https://google.com",
      target:'_blank'

  },
  children:'Click me to visit google'
  
}
 const elemets=document.querySelector('#root')
 customRender(reactElement,elemets)