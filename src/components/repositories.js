import React from 'react';
import axion from 'axios';
import Repository from './repository';
import disableScroll from 'disable-scroll';
import {formatDate} from '../utils/dateUtil'


class Repositories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            loading: true,
            error: false,
            page: 1,
        };
    }

    



    componentDidMount() {
        const that = this;
        window.addEventListener('scroll', function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                that.next()
            }
        });
        this.loadData()

    }


    next = () => {
        this.setState({
            loading: true,
            error : false 
        });
        this.loadData();

    }


    async loadData()  {
        const {repos , page } = this.state
        disableScroll.on();
        let yesterday = new Date(Date.now() - 86400000)

        await axion.get(`https://api.github.com/search/repositories?q=created:>${formatDate(yesterday)}&sort=stars&order=desc&page=${page}`)
            .then(
                res => {
                    
                    let newData = repos.concat(res.data.items)
                    this.setState(  {
                        repos: newData,
                        loading: false,
                        page: page + 1,
                        error : false
                    })
                    disableScroll.off()
                }
            )
            .catch(
                err => {
                    this.setState( {
                        error: true,
                        loading: false,
                    })
                    disableScroll.off()
                }
            )


    }

    render() {
        const {repos , loading , error} = this.state
        return (
            <div>
                { repos.map(item => <Repository key={item.id} repo={item}></Repository>)}
                { loading ?
                    (<div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>) : null
                }
                {
                    error ? 
                    (<div className="alert alert-danger m-5" role="alert">
                        oops, an error occurred !
                        <button className="btn btn-secondary" onClick={this.next.bind(this)}>Try again ...</button>
                    </div>) : null
                }

            </div>
        )

    }
}



export default Repositories
