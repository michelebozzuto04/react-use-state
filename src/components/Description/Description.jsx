import './Description.css'

export default function Description({ language }) {
    return (
        <div className='descriptionContainer'>
            {language != null ?
                <>
                    <h2>{language.title}</h2>
                    <p>{language.description}</p>
                </>
                : <h2>nessun linguaggio selezionato</h2>
            }
        </div>
    )
}