let token = '820a31e8337d74c5e9c16e2cc84cc5b98153bc2c3412d23b'

// Creating all the CRUD operations
// Get, Create, Update, Delete
// They need a const response and a way to catch the error in case something is wrong
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://skillful-paint-visitor.glitch.me/api/cars`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    // data: any = {} means that we take any data from th euser and assing it to a new fetch key, that will be the body
    create: async( data: any = {}) => {
        const response = await fetch(`https://skillful-paint-visitor.glitch.me/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async ( id: string, data: any = {} ) => {
        const response = await fetch(`https://skillful-paint-visitor.glitch.me/api/cars/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async ( id:string ) => {
        const response = await fetch(`https://skillful-paint-visitor.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }

};