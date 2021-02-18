import a from '../storage/airport.json'



const parser = () => {

    console.log(a)

    const getRunways = () => {
        const runways = Object.keys(a.RWY).map(r => {
            const R = a.RWY[r]
            return {
                name: R.NAME,
                heading: R.MAGNETICHEADING,
                latitude: parseInt(R.THRESHOLDLATITUDE.slice(0, -1)),
                longitude: parseInt(R.THRESHOLDLONGITUDE.slice(0, -1)),
                latitudeDir: R.THRESHOLDLATITUDE.substring(R.THRESHOLDLATITUDE.length - 1),
                longitudeDir: R.THRESHOLDLONGITUDE.substring(R.THRESHOLDLONGITUDE.length - 1),
                rawLatitude: R.THRESHOLDLATITUDE,
                rawLongitude: R.THRESHOLDLONGITUDE,
                maxLength: R.MAXLENGTH,
                width: R.WIDTH,
                tempIdent: R.TEMPIDENT,
                position: R.POSITION,
                number: R.RWYNO,
                fullRunway: !(R.TEMPIDENT || R.POSITION)
            }
        })
        return runways
    }

    const getRelativeLatitude = () => {
        const highestLat = getRunways().sort((a, b) => {
            return b.latitude - a.latitude
        })

        const high = highestLat[0].latitude
        const low = highestLat[highestLat.length - 1].latitude

        //console.log(highestLat)

        const pixelPerDegree = 1000 / (high - low)



        const latArr = highestLat.map(l => l.latitude)
        const relLat = latArr.map(l => (latArr[0] - l))

        const pixelArray = relLat.map(r => r * pixelPerDegree)












        //console.log(relLat)
    }

    getRelativeLatitude()





    const getRelativeLongitude = () => {

        const highestLon = getRunways().sort((a, b) => {
            return b.longitude - a.longitude
        })
        const lonArr = highestLon.map(l => l.longitude)

        const relLon = lonArr.map(l => (lonArr[0] - l) / 50)


        //console.log(relLon)
        return relLon
    }

    //getRelativeLongitude()


    return {
        name: a.NAME,
        latitude: a.LATITUDE,
        longitude: a.LONGITUDE,
        runways: getRunways()
    }
}

export default parser