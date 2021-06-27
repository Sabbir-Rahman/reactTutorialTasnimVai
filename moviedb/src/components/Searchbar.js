import React from "react";

const Searchbar = (props) => {
    return(
        <div className="container">
            <div className="row">
                <section className="col s6 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <input placeholder="Search For movies" type="text" onChange={props.handleChange}/>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Searchbar