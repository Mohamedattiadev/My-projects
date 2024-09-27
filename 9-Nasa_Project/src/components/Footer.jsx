export default function Footer(props) {
  const { handleToggleModal, data } = props
  return (
    <footer>
      <div className="bgGradient"></div>
        <div>
              <h1>APOD PROJECT</h1>

              <h2>{data?.title}</h2>
         </div>

      <div className="footer-date-div">
        <h3 className="footer-date">{data?.date}</h3>

      <button onClick={handleToggleModal}>

        <i className="fa-solid fa-circle-info"></i>

      </button>
      </div>

    </footer>
  )
}
