import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Nabin-18')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, [])
  // for followers image
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Nabin-18/followers')
      const jsonData = await response.json();
      setPhotos(jsonData);

    } catch (error) {
      console.log("Error fetching")

    }

  };



  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers:{data.followers}
        <img className='rounded-3xl' src={data.avatar_url} alt="" width={300} />


        <h1>My Github Followers:</h1>
        <div className='flex px-2 py-2 mx-3 gap-2 flex-wrap'  >
          {
            photos.map(item => (
              <>
                <img className='rounded-lg' key={item.id} src={item.avatar_url} width={100} />
                <h1>{item.login}</h1>
              </>
            ))

          }
        </div>

      </div>
    </>
  )
}

export default Github