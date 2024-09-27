
const Main = (props) => {

  const {data,handleLeft,handleRight}=props;

  return (
    <div className="imgContainer">
            <img src={data?.hdurl} alt={data?.title || 'bg-img'} className="bgImage" />
<i className="fa-solid fa-arrow-left "id="leftArrow" onClick={handleLeft}></i>
<i className="fa-solid fa-arrow-right "id="rightArrow" onClick={handleRight}></i>
    </div>
  )
}
export default Main

