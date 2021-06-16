let latlng = null
getData()
.then((countries)=>{
    addCountryNameToSelect(countries)
    
    let select = document.querySelector(".select-country")
    console.log(select)
    let country_selected = null
    console.log(select)
    select.addEventListener("change",function (e) {
        
        country_selected = e.target.value
        console.log(e.target.value)
        $(".info").html("")
        for (const key in countries) {
            if (country_selected === countries[key]["name"]) {
                latlng = countries[key]["latlng"]
                console.log(latlng)
                
                createInfo({
                    flag: countries[key]["flag"],
                    name: countries[key]["name"],
                    region: countries[key]["region"],
                    population: countries[key]["population"],
                    currencies: countries[key]["currencies"],
                    capital: countries[key]["capital"],
                    callingCodes: countries[key]["callingCodes"],
                    alpha2Code: countries[key]["alpha2Code"],
                })
                showMap()
            }
            else{
                continue
            }
        }
    })
})
.catch(err =>{
    console.log(err)
})

function addCountryNameToSelect(countries) {
    const select = document.querySelector('.select-country')
    
    for (const key in countries) {
        select.innerHTML += `<option value="${countries[key]['name']}"><span>${countries[key]['translations']['fa']}</span></option>`
    }
}
// function changValue() {

//     let input, filter, selectd ,option, a, i, txtValue
//     input = document.querySelector('.search')
//     filter = input.value.toUpperCase()
//     selectd = document.querySelector(".select-country")
//     option = selectd.getElementsByTagName('option')
//     for (i = 0; i < option.length; i++) {
//       a = option[i].getElementsByTagName("span")[0]
//       txtValue = a.innerHTML || a.innerText
//       if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue !=="") {
//         li[i].style.display = "block"
//       } else {
//         li[i].style.display = "none"
//       }
//     }
//   }

function showMap() {
     console.log(latlng)
    let app = new Mapp({
            element: `.map`,
            presets: {
                latlng: {
                    lat: latlng[0],
                    lng: latlng[1],
                },
                zoom: 6
            },
            apiKey: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM4N2UxMDg3ZGZiYmRkYTg4YjgyMTY3Njk2ZDRkMGJjNDJiM2JmZTljNmU1MTYwNzI4ZmRhZmM5YmZhZjI4MjM2YmRlMWQ0MThhYWMxYjY3In0.eyJhdWQiOiIxNDQyNCIsImp0aSI6IjM4N2UxMDg3ZGZiYmRkYTg4YjgyMTY3Njk2ZDRkMGJjNDJiM2JmZTljNmU1MTYwNzI4ZmRhZmM5YmZhZjI4MjM2YmRlMWQ0MThhYWMxYjY3IiwiaWF0IjoxNjIzODQ3NTA3LCJuYmYiOjE2MjM4NDc1MDcsImV4cCI6MTYyNjQzOTUwNywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.RSK-8Snmqty9iQrexGAbTf5X1us-ShAhDrY6-H871gOyulYaj3cvSzUPAUrx32C_deTyH_xOdN31BH1OuynoNkC-ZonXicXv21p4Fas3BrHItrTNf_Yquwk2eV487Jaoe8cPXkp8Ec0FNJfm_iYfvbwMUWfmlt5bZaNIGqbb-fqH7W_6Uy3XYbck1PqtcREoZIJM6lpBFtwi9RYodivH8hpDW5K1rzEoPP01_XL64QUifQQFiNtswvIIOwq9wpjbjoA32K5t6t_6cAubrTa2AcbtPVo-VvXiXKsOrmBHZAHMp3snQGmtzrPa8atW-9KqPzvc9Txr4GPeOcPMctAeTA"
        })
        app.addLayers()
    
}