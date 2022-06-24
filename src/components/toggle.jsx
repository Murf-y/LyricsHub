import React from 'react'
import "../styles/toggle.css"
function Toggle() {
  const [isToggled, setIsToggled] = React.useState(true);

  React.useEffect(() => {
    updateTheme(isToggled);
  }, []);


  const toggle = () => {
    setIsToggled(!isToggled);
    updateTheme(!isToggled);
  }

  const updateTheme = (dark) => {
    if(dark){
      document.documentElement.style.setProperty("--primary-color", "#2986cd");
      document.documentElement.style.setProperty("--secondary-color", "#0b263b");
      document.documentElement.style.setProperty("--secondary-light-color", "#0d304a");
      document.documentElement.style.setProperty("--background-color", "#191b1f");
      document.documentElement.style.setProperty("--background-secondary-color", "#1b1d21");
      document.documentElement.style.setProperty("--text-color", "#93a2ad");
      document.documentElement.style.setProperty("--text-secondary-color", "#475057");
    }
    else{
      document.documentElement.style.setProperty("--primary-color", "#2986cd");
      document.documentElement.style.setProperty("--secondary-color", "#2d6fa2");
      document.documentElement.style.setProperty("--secondary-light-color", "#164970");
      document.documentElement.style.setProperty("--background-color", "#a8acb3");
      document.documentElement.style.setProperty("--background-secondary-color", "#c8cacf");
      document.documentElement.style.setProperty("--text-color", "#93a2ad");
      document.documentElement.style.setProperty("--text-secondary-color", "#7f878d");
    }
  }

  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={isToggled} onChange = {toggle}/>
      <span className="slider round"></span>
    </label>
  )
}

export default Toggle