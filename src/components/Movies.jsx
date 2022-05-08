import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4 style={{ margin: '20px 10px 0' }}>No results</h4>
      )}
    </div>
  );
}

export { Movies };
