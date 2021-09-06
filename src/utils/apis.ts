import axios from 'axios'

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/'
const motelDatabaseRequest = axios.create({
    baseURL
})

export const motelDatabaseAPIs = {
    getMotelList: () => {
        return motelDatabaseRequest.get(`1DvtdEvXe5Kk8lQhDDHBDv5Dp-WAYWOTd8xvxAmZWA5M/values/Motels_TW?alt=json&key=${process.env.VUE_APP_GOOGLE_API_KEY}`)
    }
}
