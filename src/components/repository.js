import React from 'react'

function Repository(props) {

    const { name, description, stargazers_count , open_issues_count , updated_at } = props.repo
    const {  avatar_url , login } = props.repo.owner

    return (
        <div className="card m-5">
            <div className="row">
                <div className="col-md-2 align-self-center">
                    <img src={avatar_url} alt="Admin" className="rounded-circle ml-3" width="150" />
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex align-items-start flex-column ">
                        <h1>{name}</h1>
                        <p className="text-secondary text-justify mr-2">{description}</p>
                    </div>

                    <div className="d-flex align-items-end ">
                        <span className="badge badge-warning m-2">Stars : { stargazers_count}</span>
                        <span className="badge badge-danger m-2">Issues : {open_issues_count}</span>
                        <small className="text-secondary m-2">submitted {updated_at} ago by {login}</small>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Repository
