import React from 'react';

import Card from '@tds/core-card';
import Image from '@tds/core-image'
import Text from '@tds/core-text'
import Box from '@tds/core-box'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Button from '@tds/core-button'
import FlexGrid from '@tds/core-flex-grid'
import Modal from 'react-modal';

import noImage from '../noImage.png';

const MovieList = ({ result }) => {
    console.log('result', result)

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    function closeModal() {
        setIsOpen(false);
    }

    function showImage(result) {
        if (result.Poster == 'N/A') {
            return (
                <Image
                    // src='https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
                    src={noImage}
                    rounded="corners"
                    width={300}
                    height={300}
                    alt="Image not Found"
                />
            )
        }
        else {
            return (
                <Image
                    src={result.Poster}
                    rounded="corners"
                    width={500}
                    height={500}
                    alt="Image not Found"
                />
            )
        }
    }
    return (
        <span className='result'>


            <Box inline between={3}>
                <Card variant="branded" onClick={() => { openModal(result) }}>
                    <Box between={3}>
                        <Heading level="h4">{result.Title}</Heading>
                        {showImage(result)}
                        <Paragraph size="medium">
                            Title :{result.Title} <br />
                            Type: {result.Type}   <br />
                            Year:  {result.Year}
                        </Paragraph>
                    </Box>
                </Card>
            </Box>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >

                <FlexGrid>
                    <FlexGrid.Row>
                        <FlexGrid.Col xs={12} md={6}>
                            {showImage(result)}
                        </FlexGrid.Col>
                        <FlexGrid.Col xs={12} md={6}>
                            <Heading level="h3" style={{ display: 'block', margin: 'auto', width: '50%' }}> Title :{result.Title}</Heading>
                            <Heading level="h3"> Type: {result.Type}</Heading>
                            <Heading level="h3"> Year:  {result.Year}</Heading>
                            <Button onClick={closeModal} style={{ marginTop: '10px' }}>Close</Button>
                        </FlexGrid.Col>
                    </FlexGrid.Row>
                </FlexGrid>

            </Modal>


        </span >
    )
}
export default MovieList;