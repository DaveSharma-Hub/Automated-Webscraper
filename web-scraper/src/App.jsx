import { useState } from 'react'
import axios from 'axios'
import './App.scss'
import { useEffect } from 'react'

function App() {
  const [websiteList, setWebsiteList]= useState([])
  const [website, setWebsite] = useState('')
  const [htmlElement, setHtmlElement]= useState('')
  const [ids, setIds]= useState('')
  const [idTag, setIdTag]= useState('')

  const handleAddWebsite = () =>{
    axios({
      method: 'post',
      url: 'http://localhost:5000/addWebsite',
      data: {
        website: website,
        html: htmlElement,
        id:ids,
        tag:idTag
      }
    }).then(function (response) {
      setWebsiteList(response.data)
      setWebsite('')
      setHtmlElement('')
      setIds('')
      setIdTag('')
    })
    .catch(function (error) {
      console.log(error);
      alert('Try again')
    });
  }

  const handleGetAllWebsites = () =>{
    axios({
      method: 'get',
      url: 'http://localhost:5000/getWebsites',
    }).then(function (response) {
      setWebsiteList(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    handleGetAllWebsites()
  },[])

  return (
    <div className="mainApp">
      <div className='AppForm'>
      <h3>Webscrapio</h3>
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            handleAddWebsite()
          }}
        >
          <input placeholder='Website' value={website} onChange={(e)=>{setWebsite(e.target.value)}}/>
          <div className='AppIdentifierTypes'>
            <input placeholder='HTML element(eg.div,p,h1,etc)' value={htmlElement} onChange={(e)=>{setHtmlElement(e.target.value)}}/>
            <input placeholder='Identifier(eg.class,id,custom-id,etc)' value={ids} onChange={(e)=>{setIds(e.target.value)}}/>
            <input placeholder='Identifier tag(eg.5 where id=5)' value={idTag} onChange={(e)=>{setIdTag(e.target.value)}}/>
          </div>
          <button>Add</button>
        </form>
      </div>
          {
            websiteList?.map((website)=>{
              return(
                <div className='displayWebsite'>
                  <div>
                    <h4><a>{website.website}</a></h4>
                    <p>Data: {website.data}</p>
                  </div>
                </div>
              )
            })
          }
    </div>
  )
}

export default App
