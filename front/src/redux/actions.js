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
