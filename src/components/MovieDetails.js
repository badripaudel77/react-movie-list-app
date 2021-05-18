import React from 'react'
import { useParams } from 'react-router'

export const MovieDetails = () => {
    const params = useParams()
    //console.log(params);
    return (
        <div>
            again grab the id {params.movieId} and make request call with that particular id, that's it.
        </div>
    )
}
