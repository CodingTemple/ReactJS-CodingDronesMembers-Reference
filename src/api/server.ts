const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjI0Y2M2ZTViZTM1NjQ0MzFkNTgwODAyMTFhMzE0ZGNiYmQxYWEzZTQ3MjY4MDY0YiIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE2IDIwOjIwOjE3LjgzNTU1MVwiIn0.TUT3rAbqjUcPmlMvLRUbun4Gc_mBccBFEzjnAe37xLw' // TODO: Add API-Access-Key

export const server_calls = {
    get: async () => {
        const response = await fetch(`/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`/drones/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`/drones`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    }
}


/*
 data = 
 {
    name: 'DJI Mavic 20',
    model: 'DJI Mavic 20 2021,
    price: 2000
 }

 JSON.stringify(data) == {
     "name": "DJI Mavic 20",
     "model": "DJI Mavic 20 2021",
     "price": 2000
 }
*/