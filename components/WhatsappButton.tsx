import styles from '../styles/WhatsappButton.module.css'

export default function WhatsappButton() {
  return (
    <div 
      className={styles.whatsappContact}
      title="Consultar por Whatsapp"
      onClick={()=> window.open("https://wa.me/595981568535?text=Hola!%20Me%20gustaría%20solicitar%20un%20presupuesto.", "_blank")}
    >
      <img className={styles.whatsappContactImg} src="/images/whatsapp.png" alt="Whatsapp"/><br/>
      <p style={{fontSize: '10px', color: 'white'}}>Consultar por Whatsapp</p>
    </div>
  )
}