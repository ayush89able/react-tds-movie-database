import React from 'react';
import Input from '@tds/core-input'
import Card from '@tds/core-card'
import Box from '@tds/core-box'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Button from '@tds/core-button'

function Search({ handleInput, search }) {
    return (
        <div>
            <Card>
                <Box between={4}>
                    <Box between={3}>
                        <Heading level="h2">Search Movie</Heading>
                        <Paragraph>
                            Search your favourite movies
                        </Paragraph>
                    </Box>

                    <div>
                        <Input label=' Movie Name' hint='Enter movie you want to search and press Enter' hintPosition='below' placeholder='Enter Movie to Search'
                            onChange={handleInput} onKeyPress={search} type='text' />
                    </div>
                </Box>
            </Card>

            <section className="searchbox-wrap">

            </section>
        </div>
    )
}

export default Search