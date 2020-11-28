import React , {useState , useEffect} from 'react'
import axion from 'axios'
import Repository from './repository'


function Repositories() {

    const [repos, setRepos] = useState([])

    useEffect( () => {
        loadData()
        

    }, [])

    const loadData = async () =>  {
        await axion.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2')
        .then(
            res => {
                console.log(res.data.items)
                setRepos(res.data.items)
            }
        )
    }

  

    return (
        <div>
        { repos.map(item => <Repository key={item.id}  repo={item}></Repository>)}
      </div>
    )
}

export default Repositories
