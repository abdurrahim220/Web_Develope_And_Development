// Add a Classes
export const addClasses = async ClassesData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(ClassesData),
    })
  
    const data = await response.json()
    return data
  }
  
  // Get all rooms
  export const getAllClasses = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`)
    const data = await response.json()
    return data
  }
  
  //get filtered classes for hosts
  export const getClasses = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${email}`)
    const data = await response.json()
    return data
  }
  
  // Get single classes
  export const getRoom = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`)
    const data = await response.json()
    return data
  }
  
  // Delete a classes
  export const deleteRoom = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
    const result = await response.json()
    return result
  }