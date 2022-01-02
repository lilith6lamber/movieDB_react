function Movie(props) {
    const {
        Title : title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: img
    } = props;
    return (
        <li className="list-item" id={id}>
            <div className="card">
                <div className="card_media">
                    {
                        img !== 'N/A' ?  <img src={img} alt={title} /> : <img src={`https://via.placeholder.com/150?text=${title}`} alt={title} />
                    }
                </div>
                <div className="card_main">
                    <h3 className="card_main-title">{title}</h3>
                    <span className="card_main-year">{year}</span>
                    <span className="card_main-type">{type}</span>
                </div>
            </div>
        </li>
    )
}

export default Movie;