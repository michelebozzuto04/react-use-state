import './Description.css'

export default function Description({ language }) {
    return (
        <div className='descriptionContainer'>
            {language != null ?
                <>
                    <h2>{language.title}</h2>
                    <p>{language.description}</p>
                </>
                :
                <>
                    <h2>Nessun linguaggio selezionato</h2>
                    <p>Seleziona un linguaggio per vedere i dettagli.</p>
                </>
            }
        </div>
    )
}