export const fetchSent = () => {
    return {
        type: 'FETCH_SENT'
    }
}

export const fetchRcvd = text => {
    return {
        type: 'FETCH_RCVD',
        payload: text
    }
}

export const getModels = ( models, brand ) => {
    // console.log('action models: ', models, brand)
    return {
        type: 'GET_MODELS',
        models: typeof models === 'string' ? models.split(',') : [],
        brand: brand
    }
}
