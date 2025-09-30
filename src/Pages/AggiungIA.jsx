import { GlobalContext } from "../contexts/GlobalContext"

import { useContext, useState, useRef, useEffect } from "react"

import "./CSS/AggiungiIA.css"

const AggiungiIA = () => {

    const [errors, setErrors] = useState({})

    const { createNewAI } = useContext(GlobalContext)


    const titleRef = useRef(null);
    const brandRef = useRef(null);
    const descriptionRef = useRef(null);
    const platformsRef = useRef(null);
    const languagesRef = useRef(null);
    const priceRef = useRef(null);
    const releaseYearRef = useRef(null);
    const integrationsRef = useRef(null);
    const useCasesRef = useRef(null);
    const categoryRef = useRef(null);
    const privacyLevelRef = useRef(null);
    const websiteRef = useRef(null);
    const ratingRef = useRef(null);
    const logoUrlRef = useRef(null);
    const hasFreeVersionRef = useRef(null);
    const apiAvailableRef = useRef(null);

    useEffect(() => {
        titleRef.current?.focus();
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!titleRef.current.value.trim()) newErrors.title = "Il nome è obbligatorio.";
        if (!categoryRef.current.value) newErrors.category = "La categoria è obbligatoria.";
        if (!descriptionRef.current.value.trim()) newErrors.description = "La descrizione è obbligatoria.";
        if (!privacyLevelRef.current.value) newErrors.privacyLevel = "Il livello di privacy è obbligatorio.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        const newAI = {
            title: titleRef.current.value.trim(),
            category: categoryRef.current.value,
            description: descriptionRef.current.value.trim(),
            brand: brandRef.current.value.trim() || "🤔",
            website: websiteRef.current.value.startsWith("http") ? websiteRef.current.value.trim() : "🤔",
            logoUrl: logoUrlRef.current.value.startsWith("http") ? logoUrlRef.current.value.trim() : "🤔",
            price: priceRef.current.value.trim() || "🤔",
            hasFreeVersion: hasFreeVersionRef.current.checked,
            apiAvailable: apiAvailableRef.current.checked,
            supportedLanguages: languagesRef.current.value
            ? languagesRef.current.value.split(",").map(e => e.trim())
            : ["🤔"],
            platforms: platformsRef.current.value
            ? platformsRef.current.value.split(",").map(e => e.trim())
            : ["🤔"],
            releaseYear: releaseYearRef.current.value
            ? Number(releaseYearRef.current.value)
            : 2025,
            rating: ratingRef.current.value
            ? Number(ratingRef.current.value)
            : 0,
            integrations: integrationsRef.current.value
            ? integrationsRef.current.value.split(",").map(e => e.trim())
            : ["🤔"],
            privacyLevel: privacyLevelRef.current.value,
            useCases: useCasesRef.current.value
            ? useCasesRef.current.value.split(",").map(e => e.trim())
            : ["🤔"]
        };

        try {
            await createNewAI(newAI);
            alert("IA aggiunta con successo!");
            setErrors({});
            event.target.reset();
        } catch (error) {
            const msg = error?.message || JSON.stringify(error);
            console.error("Errore nella creazione della IA:", msg);
            alert("Errore durante la creazione della IA");
        }
    };

    


    return (
        <section className="section-addai">
            <div className="container">
                <h1 className="addai-title">Aggiungi una IA <i className="fa-solid fa-plus"></i></h1>
                <form className="addai-form-flex" onSubmit={handleSubmit}>

                <label>Nome</label>
                <input
                    ref={titleRef}
                    className="addai-input"
                    type="text"
                    placeholder="Immetti il nome della IA..."
                />
                {errors.title && <p className="error-msg">{errors.title}</p>}

                <label>Categoria</label>
                <select
                    ref={categoryRef}
                    className="addai-input"
                    defaultValue=""
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
                    className="addai-input"
                    type="text"
                    placeholder="Immetti il nome del brand..."
                />

                <label>Descrizione</label>
                <textarea
                    ref={descriptionRef}
                    className="addai-input"
                    placeholder="Cosa fa la IA?..."
                />
                {errors.description && <p className="error-msg">{errors.description}</p>}

                <label>Piattaforme supportate</label>
                <input
                    ref={platformsRef}
                    className="addai-input"
                    type="text"
                    placeholder="Scrivi le piattaforme supportate..."
                />

                <label>Linguaggi supportati</label>
                <input
                    ref={languagesRef}
                    className="addai-input"
                    type="text"
                    placeholder="Scrivi i linguaggi supportati..."
                />

                <label>Prezzo</label>
                <input
                    ref={priceRef}
                    className="addai-input"
                    type="text"
                    placeholder="Mensile? Annuale? Freemium?..."
                />

                <label>Anno di rilascio</label>
                <input
                    ref={releaseYearRef}
                    className="addai-input"
                    type="number"
                    placeholder="Quando è stata rilasciato..."
                />

                <label>Integrato in:</label>
                <input
                    ref={integrationsRef}
                    className="addai-input"
                    type="text"
                    placeholder="È stata integrata in..."
                />

                <label>Casi d'uso:</label>
                <input
                    ref={useCasesRef}
                    className="addai-input"
                    type="text"
                    placeholder="ES: Presentazioni, Design, ecc ecc..."
                />

                <label>Voto?</label>
                <input
                    ref={ratingRef}
                    className="addai-input"
                    type="number"
                    placeholder="Immetti il voto..."
                />

                <label>URL del logo</label>
                <input
                    ref={logoUrlRef}
                    className="addai-input"
                    type="text"
                    placeholder="Immetti l'url per l'immagine..."
                />

                <label>Sito Web</label>
                <input
                    ref={websiteRef}
                    className="addai-input"
                    type="text"
                    placeholder="Immetti il link del sito..."
                />

                <label>Livello Privacy</label>
                <select
                    ref={privacyLevelRef}
                    className="addai-input"
                    defaultValue=""
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
                    className="checkbox"
                    type="checkbox"
                />

                <label>API disponibile?</label>
                <input
                    ref={apiAvailableRef}
                    className="checkbox"
                    type="checkbox"
                />

                <button type="submit" className="addai-btn-confirm">Conferma</button>
                </form>
            </div>
        </section>
    )
}

export default AggiungiIA