import "./creditCard.css"

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const cardNumbers = number.slice(-4)
  const year = expirationYear.toString().slice(-2)
  const divStyles = {
    backgroundColor: bgColor,
    color: color
  }
  return (
    <div className="creditCard" style={divStyles}>
      <div>
        <span>{type}</span>
      </div>
      <div>
        <span>···· ···· ···· {cardNumbers}</span>
      </div>
      <div>
        <span>Expires {expirationMonth}/{year}</span>
        <span>{bank}</span>
      </div>
      <div>
        <span>{owner}</span>
      </div>

    </div>
  )
}

export default CreditCard