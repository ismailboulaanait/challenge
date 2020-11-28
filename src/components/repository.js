import React from 'react'

function Repository() {
    return (
        <div className="card m-5">
            <div className="row">
                <div className="col-md-2 align-self-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle ml-3" width="150" />
                </div>
                <div className="col-md-10 ">
                        <div className="d-flex align-items-start flex-column ">
                            <h1>Repository name</h1>
                            <p className="text-secondary text-justify mr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eaque officia excepturi rerum. Ad temporibus, voluptatem impedit mollitia eveniet sed cumque nulla aspernatur aperiam id veritatis qui ea, perspiciatis ipsa.</p>
                        </div>

                        <div className="d-flex align-items-end ">
                            <span className="badge badge-warning m-2">Stars : 15k</span>
                            <span className="badge badge-danger m-2">Issues : 2.5k</span>
                            <small className="text-secondary m-2">submitted 30 days ago by ismail boulaanait</small>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Repository
