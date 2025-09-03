import "./CSS/ModalConfronto.css"

const ModalConfronto = ({isOpen, onClose, items}) => {
    if(!isOpen) return null

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}> X </button>
                <h2>Confronto IA</h2>
                <div>
                    {items.map((curItem) =>(
                        <div key={curItem.id}>
                            <h3>{curItem.title}</h3>
                            <p>{curItem.category}</p>
                            <p>{curItem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalConfronto