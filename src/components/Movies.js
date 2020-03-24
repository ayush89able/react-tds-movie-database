import React from 'react';
import MovieList from './MovieList';
import FlexGrid from '@tds/core-flex-grid'
function Movies({ results }) {
    return (
        <div>
            <FlexGrid>
                <FlexGrid.Row>
                    {results.map(result => (
                        <FlexGrid.Col xs={12} sm={6} md={4}>
                            <MovieList key={result.imdbID} result={result} />
                        </FlexGrid.Col>
                    ))}
                </FlexGrid.Row>
            </FlexGrid>
        </div>
    )
}
export default Movies;