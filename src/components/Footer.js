import style from './Footer.module.css'

function Footer({text}) {
    return (
        <div className={style.footer}>
            <p> {text} </p>
        </div>
    )
}
export default Footer;