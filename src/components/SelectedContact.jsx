import { useEffect, useState} from "react"

function SelectedContact({selectedContactId, setSelectedId}) {
  const [singleContact, setSingleContact] = useState(null)
  
    useEffect(() => {
      // define our async function for getting a single contact by ID
      async function fetchContact(){
        try{
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
          const result = await response.json()
          setSingleContact(result)
        } catch(err){
          console.log(err)
        }
      }
      // call that function
      fetchContact();
      // use the results to display some contact data
    }, [selectedContactId])


  console.log(selectedContactId)
  return (
    <>
      {singleContact === null
        ? <div>Loading...</div>
        : <div>
            <p>{singleContact.name}</p>
            <p>{singleContact.email}</p>
            <p>{singleContact.phone}</p>
            <p>{singleContact.website}</p>
            <button onClick ={() => setSelectedId(null)}>Back to List</button>
          </div>
        }
    </>
  )
}

export default SelectedContact