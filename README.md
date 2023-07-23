###TRACK MOVEMENT###

## NODE_RED

    catch location_data 👍
    send location_data to server 👍
    set timer

## SERVER

    ** post request **

    - create route to catch data 👍
    - handle errors
    - connect to db 👍

    ** get request **

    - get names of persons
    - get data for specific person

    - filter by specific timeframe for all persons
    - filter by specific timeframe for one person

    const filteredArray = (timeafter) => {
    const result = locationData.filter(entry => new Date(entry.last_changed_utc) > timeafter)
    return result
    }

    console.log(filteredArray(new Date))

## MONGODB

    - create collection 👍
    - create schema 👍
    - create model 👍
    - save recieved data to db 👍

## FRONTEND

    - fetchdata
    - show data
    - creating input for further filtering
    - create map
    - visualize data on map
    - using opacity on points to show POI
    - using connected lines for tracking
