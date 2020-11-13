const getInfo=()=> {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        for (let i = 0; i<7; i++) {
            let givenName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
            let target = document.getElementById(`row${i+1}`)
            let tableData = document.createElement('td')
            tableData.innerHTML = givenName
            target.append(tableData)
        }

        for (let i = 0; i<7; i++) {
            let driverId = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.driverId
            let target = document.getElementById(`row${i+1}`)
            let tableData = document.createElement('td')
            tableData.innerHTML = driverId
            target.append(tableData)
        }

        for (let i = 0; i<7; i++) {
            let points = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
            let target = document.getElementById(`row${i+1}`)
            let tableData = document.createElement('td')
            tableData.innerHTML = points
            target.append(tableData)
        }

        for (let i = 0; i<7; i++) {
            let wins = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].wins
            let target = document.getElementById(`row${i+1}`)
            let tableData = document.createElement('td')
            tableData.innerHTML = wins
            target.append(tableData)
        }

        for (let i = 0; i<7; i++) {
            let constructors_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name
            let target = document.getElementById(`row${i+1}`)
            let tableData = document.createElement('td')
            tableData.innerHTML = constructors_name
            target.append(tableData)
        }

    })
};