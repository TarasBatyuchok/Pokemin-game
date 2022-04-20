import s from "./Header.module.css";

const Header = ({ title, descr})=>{
    return (
      <header class={s.root}>
        <div class={s.forest}></div>
        <div class={s.container}>
          <h1>{title}</h1>
          <p>{descr}</p>
        </div>
      </header>
    );
}

export default Header