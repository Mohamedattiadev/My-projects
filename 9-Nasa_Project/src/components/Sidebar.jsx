export default function sidebar(props) {
    const { handleToggleModal, data } = props
  // const date = String(data?.date).split("-")
  // const year = date[0]
  // const month = date[1]
  // const day = date[2]
  


  return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>

            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">



            {data?.date}</p>


                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

        </div>
    )
}
