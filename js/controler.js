
function  createInfo ({flag,name,region,population,currencies,capital,callingCodes,alpha2Code}) {
    $(".info").append(`
            <div class="row mt-1" id="show-info">
            <div class="col-12 bg-second">
                <div class="info row d-flex mx-auto align-items-center">
                    <div class="col-12 col-md-2 text-center">
                        <span class="text-white">نام کشور:</span>
                        <span class="text-call">${name}</span>
                    </div>
                    <div class="col-12 col-md-2 text-center">
                        <span class="text-white">قاره:</span>
                        <span class="text-call">${region}</span>
                    </div>
                    <div class="col-12 col-md-2 text-center">
                        <span class="text-white">جمعیت:</span>
                        <span class="text-call">${population}</span>
                    </div>
                    <div class="col-12 col-md-2 text-center">
                        <span class="text-white">واحد پول:</span>
                        <span class="text-call">${currencies.map(item=> item["name"])}</span>
                    </div>
                    <div class="col-12 col-md-2 text-center">
                        <span class="text-white">پایتخت:</span>
                        <span class="text-call">${capital}</span>
                    </div>
                    <div class="col-12 col-md-2 text-center">
                        <span class="text-title text-white text-center m-0">کد تلفن:</span>
                        <span id="callCode" class="text-call">${callingCodes}</span>
                    </div>
                </div>
            </div>
            <div class="col-12 px-0 text-center rounded-circle">
                <div id="flag" class="d-flex mx-auto align-items-center justify-content-center" style="width:8rem;height:8rem">
                    <img class="w-100 rounded-circle" src="${flag}">
                </div>
            </div>
            <div class="col-12 mt-3">
            <div id="${alpha2Code}" style="height:12rem" class="col-12 map d-flex justify-content-between bg-value text-center px-0">
                
            </div>
        </div>
        </div>
    `)   
}