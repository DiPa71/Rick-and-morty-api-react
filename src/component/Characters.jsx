import React, {useState, useEffect} from 'react';
import Header from './Header';
import Loading from './loading';
import Error from './HandleError'

const Characters = () => {
//    const state = {
//         loading: true,
//         error: null,
//         data: undefined,
//       }
    const [characters, setCharacters] = useState({
        loading: true,
        error: null,
        data: undefined,
      });
    const [Page, setPage] = useState(1);
    var last = Page - 1;
    var next = Page + 1;

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${Page}`)
        .then(response => response.json())
        .then(data => !data ? setCharacters({
            loading: true,
            error: null,
            data: data.results,
          }) : setCharacters({
            loading: false,
            error: null,
            data: data.results,
          }))
          .catch(error => setCharacters({
            loading: false,
            error: error,
            data: null,
          }))
        
    }, [Page])

    const lastPage = ()=> {
        if(Page <= 1){
            setPage(34)
        }else{
            setPage(last)
        }
    }

    const nextPage = () =>{
        if(Page >= 34){
            setPage(1)
        } else{
            setPage(next)
        }
    }
    if(characters.loading === true){
        return(
        <React.Fragment>
            <Loading />
        </React.Fragment>
        );
    }
    if(characters.error){
        return(
        <React.Fragment>
            <Error error={Characters.error} />
        </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Header />
            <center>
                <div className="Page__number">
                    <button onClick= {lastPage} className="material-icons">
                        arrow_back
                    </button>
                    <span className='last' onClick= {lastPage}>
                    {Page <= 1 ? 'End' : last}
                    </span>
                    <span className='current'>
                    {Page}
                    </span>
                    <span className='next' onClick = {nextPage}>
                    {Page >= 34 ? 'Start' : next}
                    </span>
                    <button onClick= {nextPage} value={Page} className="material-icons">
                        arrow_forward
                    </button>
                </div>
            </center>
        <div className="cards__container">
            {characters.data.map(char => (
            <div key={char.id} className="card__container">
                <p className="card_title">
                    {char.name}
                </p>
                <img className="card__img" src={char.image} alt="" />
                {char.status === 'Alive' ? <p className="card__status-a">{char.status}</p> : char.status === 'unknown' ? <p className="card__status-u">{char.status}</p> :<p className="card__status-d">{char.status}</p>}
                <p className="card__species">{char.species}</p>
            </div>
            ))}
        </div>
        <center>
                <div className="Page__number">
                    <button onClick= {lastPage} className="material-icons">
                        arrow_back
                    </button>
                    <span className='last' onClick={lastPage}>
                    {Page <= 1 ? 'End' : last}
                    </span>
                    <span className='current'>
                    {Page}
                    </span>
                    <span className='next' onClick={nextPage}>
                    {Page >= 34 ? 'Start' : next}
                    </span>
                    <button onClick= {nextPage} value={Page} className="material-icons">
                        arrow_forward
                    </button>
                </div>
            </center>
        </React.Fragment>
    );
}

export default Characters;
