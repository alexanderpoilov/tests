const changeTargetParam = () => {
  // если в имени класса объекта на котором находится мышь
  // содержит (indexOf) эти символы
  if (event.target.className.indexOf('cube') > -1) {
    // event.target.style.height = "120px";
    // event.target.style.width = "120px";
    // усли элементы в css в процентах то их можно растянуть
    // flexShrink (1 => 100%,0-0.9 => 0-90%)
    event.target.style.flexShrink = "0.7";
    console.log(event.target.style);
    // прозрачность 60%
    event.target.style.opacity = "0.6";
    event.target.style.backgroundColor = "black";
    event.target.style.color = "#fff"
  }
}

  const returnTargetParam = () => {
  // если в имени класса объекта на котором находится мышь
  // содержит (indexOf) эти символы
    if (event.target.className.indexOf('cube') > -1) {
      // event.target.style.height = "100px";
      // event.target.style.width = "100px";
      // усли элементы в css в процентах то их можно растянуть
      // flexShrink (1 => 100%,0-0.9 => 0-90%)
      event.target.style.flexShrink = "1";
      // прозрачность 100%
      event.target.style.opacity = "1";
      event.target.style.backgroundColor = "tomato";
      event.target.style.color = "#000"
    }
  }

// движение мыши на объекте
document.addEventListener("mouseover", changeTargetParam);
// движение мыши с объекта
document.addEventListener("mouseout", returnTargetParam);