export const fetchSent = () => {
    return {
        type: 'FETCH_SENT'
    }
}

export const fetchRcvd = (text) => {
    return {
        type: 'FETCH_RCVD',
        payload: text
    }
}

export const getModels = models => {
    console.log('action models: ', models)
    return {
        type: 'GET_MODELS',
        payload: models
    }
}
