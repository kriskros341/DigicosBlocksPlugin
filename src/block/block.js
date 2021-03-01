import { useState, useEffect } from '@wordpress/element'
import Container from '../components/Container'

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks


registerBlockType( 'cgb/block-my-block', {
	title: __( 'Digicos Blocks - BlokTestowy' ),
	icon: 'smiley', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common',
	keywords: [
		__( 'Digicos Blocks — BlokTestowy' ),
		__( 'Digicos Blocks' ),
		__( 'BlokTestowy' ),
	],
  attributes: {
    cardList: {
      type: 'Array',
      default: [
        {
          "top": "abc",
          "middle": "def",
          "bottom": "ghi"
        }, {
          "top": "jkl",
          "middle": "mno",
          "bottom": "prs"
        }, {
          "top": "tuv",
          "middle": "wxy",
          "bottom": "zzz"
        }
      ],
    },
    topSquareTitle: {
      type: 'string',
      default: 'Tytul',
    },
    bottomSquareTitle: {
      type: 'string',
      default: 'dolny Tytul'
    }
  },
	edit: ( { attributes, setAttributes } ) => {
    const changeTopTitleFoo = (event) => {
      console.log("changing the top square title pog!", event.target.value)
      setAttributes({topSquareTitle: event.target.value})
      console.log(attributes)
    }
    return (
      <div>
        <Container edit="true" updateTopSquareFoo={ changeTopTitleFoo } attributes={ attributes }></Container>
      </div>
      )
  },
	save: ( props ) => {
      return (
        <div>
          <Container edit="false" attributes={ props.attributes }></Container>
        </div>
      )
    }
} );
