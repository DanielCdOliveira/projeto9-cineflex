function Description(){
    return(
        <div className="description">
          <div className="description-option">
            <div className="seat selected"></div>
            <p>Selecionado</p>
          </div>
          <div className="description-option">
            <div className="seat"></div>
            <p>Disponível</p>
          </div>
          <div className="description-option">
            <div className="seat occupied"></div>
            <p>Indisponível</p>
          </div>
        </div>
    )
}

export default Description;