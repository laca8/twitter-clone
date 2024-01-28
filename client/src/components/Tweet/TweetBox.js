import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../StyleSheet/TweetBox.css'

import axios from 'axios'
const TweetBox = () =>{
  const profile = localStorage.getItem('profile') || '';
  const [tweet,setTweet] = useState('')
  const [file,setFile] = useState('')
  const [uploading, setUploading] = useState(false)

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0] //because upload single file
    const formData = new FormData()
    formData.append('file', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/uploadT', formData, config)

      setFile(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  const Tweet = (e) =>{
     try {
       e.preventDefault()
      const url = '/api/tweet';
      const token = localStorage.getItem('token')
      axios.post(url,{tweet,file},{
        headers:{
          "x-auth-token":token,
        }
      })
     } catch (err) {
       console.log(err);
     }
    
  }
    return(
        <div className='TweetBox__container'>
                <div className='TweetBox__title'>
                  <h2>Home</h2>
                </div>
                   <form onSubmit={Tweet}>
                   <div className='TweetBox'>
                  <Avatar alt='Ramy sharp' src={profile}/>
                  <input type='text' placeholder='Whats happening?' onChange={(e) => setTweet(e.target.value)}/>
                </div>
                <div className='Tweet__fileUpload'>
                    <div className='file'>
                    <label>File Upload</label>
                    <input type='text' value={file} onChange={(e) => setFile(e.target.value)}/>
                    <input id='image' label='choose file' type='file'  onChange={uploadFileHandler}></input>
                    </div>
                    <div className='Tweet__Button'>
                    <button disabled={tweet === ''} type='submit'>TWEET</button>
                    </div>
                
                </div>
                   </form>
               
        </div>
    )
}
export default TweetBox