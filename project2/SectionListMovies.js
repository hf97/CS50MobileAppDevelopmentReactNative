import React from 'react'
import {SectionList, Text, Button} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'


const SectionListMovies = props => {
    return (
    <SectionList
        
    //   keyExtractor={item => item.Title}
      sections={props.movies}
      renderItem={({item}) => <Row {...item} onSelectMovie={props.onSelectMovie} />}
    //   renderSectionHeader={renderSectionHeader}
    />
    )
}

SectionListMovies.propTypes = {
  movies: PropTypes.array,
}

export default SectionListMovies
