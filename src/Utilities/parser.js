import a from '../storage/airport.json'

const parser = () => {
    const getRunways = () => {
        return Object.keys(a.RWY).map(r => {
            const R = a.RWY[r]
            return {
                name: R.NAME,
                heading: R.MAGNETICHEADING,
                latitude: R.THRESHOLDLATITUDE,
                longitude: R.THRESHOLDLONGITUDE,
                maxLength: R.MAXLENGTH,
                width: R.WIDTH,
                tempIdent: R.TEMPIDENT,
                position: R.POSITION,
                number: R.RWYNO,
                fullRunway: !(R.TEMPIDENT || R.POSITION)
            }
        })
    }



    const getStrips = () => {
        const full = getRunways().filter(r => r.fullRunway)
        const opposite = full.map(r => {
            return {
                ...r,
                opposite: r.heading <= 180 ? parseInt(r.heading) + 180 : parseInt(r.heading) - 180

            }
        })
        console.log(opposite)
    }
    getStrips()



    return {
        name: a.NAME,
        latitude: a.LATITUDE,
        longitude: a.LONGITUDE,
        runways: getRunways()
    }
}

export default parser