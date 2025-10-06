import { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom";

import "./CSS/ModalModifica.css"

const ModalModifica = ({elemAI, onClose, onSubmit}) => {

  const [errors, setErrors] = useState({});

  // Ref per tutti i campi non controllati
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const privacyLevelRef = useRef(null);
  const brandRef = useRef(null);
  const websiteRef = useRef(null);
  const logoUrlRef = useRef(null);
  const priceRef = useRef(null);
  const hasFreeVersionRef = useRef(null);
  const apiAvailableRef = useRef(null);
  const languagesRef = useRef(null);
  const platformsRef = useRef(null);
  const releaseYearRef = useRef(null);
  const ratingRef = useRef(null);
  const integrationsRef = useRef(null);
  const useCasesRef = useRef(null);

  
  // Focus automatico sul campo "title"
  useEffect(() => {
    titleRef.current?.focus();
  }, []);


  const validateForm = () => {
    const newErrors = {};

    if (!titleRef.current.value.trim()) newErrors.title = "Il nome è obbligatorio.";
    if (!categoryRef.current.value) newErrors.category = "La categoria è obbligatoria.";
    if (!privacyLevelRef.current.value) newErrors.privacyLevel = "Il livello di privacy è obbligatorio.";

    const releaseYearValue = Number(releaseYearRef.current.value)
        if (!releaseYearRef.current.value.trim() || isNaN(releaseYearValue) || releaseYearValue < 2018 || releaseYearValue > 2025) {
            newErrors.releaseYear = "L'anno di rilascio deve essere compreso tra 2018 e 2025"
        }

    const ratingValue = Number(ratingRef.current.value)
        if (!ratingRef.current.value.trim() || isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
            newErrors.rating = "Il voto deve essere un numero tra 0 e 5"
        }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const editedAI = {
      title: titleRef.current.value.trim(),
      category: categoryRef.current.value,
      description: descriptionRef.current.value.trim() || elemAI.description,
      privacyLevel: privacyLevelRef.current.value,
      brand: brandRef.current?.value.trim() || elemAI.brand,
      website: websiteRef.current?.value.trim().startsWith("http") ? websiteRef.current.value.trim() : elemAI.website,
      logoUrl: logoUrlRef.current?.value.trim().startsWith("http") ? logoUrlRef.current.value.trim() : elemAI.logoUrl,
      price: priceRef.current?.value.trim() || elemAI.price,
      hasFreeVersion: hasFreeVersionRef.current?.checked || false,
      apiAvailable: apiAvailableRef.current?.checked || false,
      supportedLanguages: languagesRef.current?.value
        ? languagesRef.current.value.split(",").map(e => e.trim())
        : elemAI.supportedLanguages,
      platforms: platformsRef.current?.value
        ? platformsRef.current.value.split(",").map(e => e.trim())
        : elemAI.platforms,
      releaseYear: releaseYearRef.current?.value
        ? Number(releaseYearRef.current.value)
        : elemAI.releaseYear,
      rating: ratingRef.current?.value
        ? Number(ratingRef.current.value)
        : elemAI.rating,
      integrations: integrationsRef.current?.value
        ? integrationsRef.current.value.split(",").map(e => e.trim())
        : elemAI.integrations,
      useCases: useCasesRef.current?.value
        ? useCasesRef.current.value.split(",").map(e => e.trim())
        : elemAI.useCases
    };

    onSubmit(editedAI);
  };


  const modalContent = (
    <div className="edit-modal-overlay">
            <div className="edit-modal-content container">
                <h2>Modifica IA</h2>
                <form onSubmit={handleSubmit} className="edit-modal-form">
                <label>Nome</label>
                <input
                    ref={titleRef}
                    defaultValue={elemAI?.title || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Immetti il nome della IA..."
                />
                {errors.title && <p className="error-msg">{errors.title}</p>}

                <label>Categoria</label>
                <select
                    ref={categoryRef}
                    defaultValue={elemAI?.category || ""}
                    className="editai-input"
                >
                    <option value="">Tutte le categorie</option>
                    <option value="Multimedia & Editing">Multimedia & Editing</option>
                    <option value="Design & Presentazioni">Design & Presentazioni</option>
                    <option value="Assistenti Generali">Assistenti Generali</option>
                    <option value="Scrittura & Contenuti">Scrittura & Contenuti</option>
                    <option value="Performance Management">Performance Management</option>
                    <option value="Ricerca AI">Ricerca AI</option>
                    <option value="Marketing & SEO">Marketing & SEO</option>
                </select>
                {errors.category && <p className="error-msg">{errors.category}</p>}

                <label>Brand</label>
                <input
                    ref={brandRef}
                    defaultValue={elemAI?.brand || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Immetti il nome del brand..."
                />

                <label>Descrizione</label>
                <textarea
                    ref={descriptionRef}
                    defaultValue={elemAI?.description || ""}
                    className="editai-input"
                    placeholder="Metti una nuova descrizione oppure lascia vuoto per non effettuare alcuna modifica..."
                />
                {errors.description && <p className="error-msg">{errors.description}</p>}

                <label>Piattaforme supportate</label>
                <input
                    ref={platformsRef}
                    defaultValue={elemAI?.platforms?.join(", ") || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Scrivi le piattaforme supportate..."
                />

                <label>Linguaggi supportati</label>
                <input
                    ref={languagesRef}
                    defaultValue={elemAI?.supportedLanguages?.join(", ") || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Scrivi i linguaggi supportati..."
                />

                <label>Prezzo</label>
                <input
                    ref={priceRef}
                    defaultValue={elemAI?.price || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Mensile? Annuale? Freemium?..."
                />

                <label>Anno di rilascio</label>
                <input
                    ref={releaseYearRef}
                    min="2018"
                    defaultValue={elemAI?.releaseYear || 2018}
                    className="editai-input"
                    type="number"
                    placeholder="Quando è stata rilasciato..."
                />
                {errors.releaseYear && <p className="error-msg">{errors.releaseYear}</p>}

                <label>Integrato in:</label>
                <input
                    ref={integrationsRef}
                    defaultValue={elemAI?.integrations?.join(", ") || ""}
                    className="editai-input"
                    type="text"
                    placeholder="È stata integrata in..."
                />

                <label>Casi d'uso:</label>
                <input
                    ref={useCasesRef}
                    defaultValue={elemAI?.useCases?.join(", ") || ""}
                    className="editai-input"
                    type="text"
                    placeholder="ES: Presentazioni, Design, ecc ecc..."
                />

                <label>Voto?</label>
                <input
                    ref={ratingRef}
                    min="0"
                    defaultValue={elemAI?.rating || 0}
                    className="editai-input"
                    type="number"
                    placeholder="Immetti il voto..."
                />
                {errors.rating && <p className="error-msg">{errors.rating}</p>}

                <label>URL del logo</label>
                <input
                    ref={logoUrlRef}
                    defaultValue={elemAI?.logoUrl || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Immetti l'url per l'immagine..."
                />

                <label>Sito Web</label>
                <input
                    ref={websiteRef}
                    defaultValue={elemAI?.website || ""}
                    className="editai-input"
                    type="text"
                    placeholder="Immetti il link del sito..."
                />

                <label>Livello Privacy</label>
                <select
                    ref={privacyLevelRef}
                    defaultValue={elemAI?.privacyLevel || ""}
                    className="editai-input"
                    >
                <option value="">Seleziona il livello</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </select>
                {errors.privacyLevel && <p className="error-msg">{errors.privacyLevel}</p>}

                <label>Ha una versione gratuita?</label>
                <input
                    ref={hasFreeVersionRef}
                    defaultChecked={Boolean(elemAI?.hasFreeVersion)}
                    className="edit-checkbox"
                    type="checkbox"
                />

                <label>API disponibile?</label>
                <input
                    ref={apiAvailableRef}
                    defaultChecked={Boolean(elemAI?.apiAvailable)}
                    className="edit-checkbox"
                    type="checkbox"
                />

                <div className="editai-btn-box">
                    <button type="submit" className="editai-btn-confirm">Salva modifiche</button>
                    <button type="button" onClick={onClose} className="editai-btn-back">Annulla</button>
                </div>
                </form>
            </div>
        </div>
  )

  const modalRoot = document.getElementById("modal-root");
    if (!elemAI || !modalRoot) return null;


    return ReactDOM.createPortal(modalContent, modalRoot);
}

export default ModalModifica