import React from "react";
const Movie = (props) => {
    const imageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path
    return(

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        {props.data.poster_path == null?(
                            <img
                                src="https://picsum.photos/100/200"
                                alt=""
                                style={{ width: "100", height: "200"}}
                            />
                        ):(
                            <img
                                src={imageURL}
                                alt=""
                                style={{ width: "100", height: "200"}}
                            />
                        )}

                            <span className="card-title">{props.data.title}</span>

                    </div>
                    <div className="card-content">
                        <p>{props.data.release_date}</p>
                    </div>
                </div>
            </div>

    )
}

export default Movie
