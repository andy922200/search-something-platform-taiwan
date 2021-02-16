import axios from 'axios'

const googleSpreadSheetKey = '1DvtdEvXe5Kk8lQhDDHBDv5Dp-WAYWOTd8xvxAmZWA5M'
const baseURL = 'https://spreadsheets.google.com/feeds/list'
const motelDatabaseURL = `${baseURL}/${googleSpreadSheetKey}`

const motelDatabaseRequest = axios.create({
    baseURL: motelDatabaseURL
})

export const motelDatabaseAPIs = {
    getMotelList: () => {
        return motelDatabaseRequest.get('/1/public/values?alt=json')
    }
}
