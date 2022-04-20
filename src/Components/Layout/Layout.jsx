import s from "./Layout.module.css"


const Layout = ({ id, colorBg, title, urlBg, children }) => {


  const stylebg ={};

  if (colorBg) {
    stylebg.background = colorBg;
  }

  if (urlBg) {
      stylebg.backgroundImage = `url(${urlBg})`
  }

  return (
    <>
      <section className={s.root}  style={stylebg} id={id}>
        <div className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3> {title} </h3>
              <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
              {children}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Layout;