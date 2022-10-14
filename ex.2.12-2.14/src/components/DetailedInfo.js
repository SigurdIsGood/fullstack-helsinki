const DetailedInfo = ({country}) => {

    const langList = Object.values(country.languages)

    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <br/>
            <div><strong>languages:</strong></div>
            <ul>
                {langList.map((lang) => {
                    return (<li key={lang}>{lang}</li>)
                })}
            </ul>
            |<img style={{width:200}} src={country.flags.png} />
        </>
    )
}

export default DetailedInfo