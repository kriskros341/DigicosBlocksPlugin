

const Container = ({ edit, updateTopSquareFoo, attributes }) => {
    const cardList = attributes.cardList
    console.log("cardList:", attributes.cardList)
    const mainCard = Math.floor(cardList.length/2)
    const nextCard = () => {
      console.log("next")
      cardList.reverse()
    }
    const prevCard = () => {
      console.log("prev")
      cardList.reverse()
    }
    const editSqTop = (event) => {
      console.log(event.target.parentElement)
      event.target.parentElement.classList.toggle("edited")
    }


    console.log(edit)
    return(
      <div class="Card__Container">
        <div class="ar-t" onClick={ () => nextCard() }>
          <img src="http://localhost/wordpress/wp-content/uploads/2021/02/aw.png" alt=""></img>
        </div>
        <div class="ar-b" onClick={ () => prevCard() }>
          <img src="http://localhost/wordpress/wp-content/uploads/2021/02/aw.png" alt=""></img>
      </div>
          <div class="sq sq-t Border">
            {edit ? <input onChange={ updateTopSquareFoo } placeholder={ attributes.topSquareTitle } className="squareTitleEdit"></input> : ""}
            <div class="squareTitleEditView">{ attributes.topSquareTitle }</div>
            {edit ? <div onClick={ (e) => editSqTop(e) } id="editSqTop" class="edit"></div> : "" }
          </div>
          <div class="Container__Gradient" id="cards">
            { cardList.map((item, index) => {
              console.log(index, mainCard)
              return (
              <div style={{ order: index+1 }} class={index == mainCard ? "Card Card__main Border" : "Card Border" }>
              <div class="Card__top">
                <div class="Card__top__title">{ item.top }</div>
                <div class="Card__top__text"></div>
              </div>
              <div class="Card__middle">
                <div class="Card__middle__contnet">{ item.middle }</div>
              </div>
              <div class="Card__bottom">
                <div class="Card__bottom__text">{ item.bottom }</div>
              </div>
            </div>
            )}) }
          </div>
          <div class="ar-m" id="ar-m"></div>
          <div class="sq sq-b Border">d</div>
        </div>
      )
    }
export default Container
