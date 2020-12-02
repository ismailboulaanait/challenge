import React from 'react';
import axion from 'axios';
import Repository from './repository';


class Repositories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: true,
            page: 1,
         };
    }
    
    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }



    componentDidMount() {
        const that = this;
        window.addEventListener('scroll', function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                console.log("you're at the bottom of the page");
                that.next()
            }
        });
        this.loadData()

    }


    next = () => {
        this.setState({
            loading : true,
        });
        this.loadData();

    }


    async loadData()  {
        console.log('page => ', this.state.page);
        let yesterday = new Date(Date.now() - 86400000)
       
            await axion.get(`https://api.github.com/search/repositories?q=created:>${this.formatDate(yesterday)}&sort=stars&order=desc&page=${this.state.page}`)
            .then(
                res => {
                    console.log(res.data.items)
                    let newData = this.state.repos.concat(res.data.items)
                    this.setState({
                        repos : newData  ,
                        loading : false,
                        page : this.state.page + 1,
                        lastFetchedPage : this.state.lastFetchedPage + 1
                    })
                }
            )
            .catch(
                err => console.log(err)
            )
        
    }

    render() {
        return (
            <div>
                { this.state.repos.map(item => <Repository key={item.id} repo={item}></Repository>)}
                { this.state.loading ?
                    (<div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>) : null
                }

            </div>
        )

    }
}



export default Repositories
