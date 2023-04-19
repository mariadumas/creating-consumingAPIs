const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



const countriesController = {
    list: async (req, res) => {

        const response = await fetch("https://restcountries.com/v3.1/all")

        const countries = await response.json(); // Extracting data as a JSON Object from the response


        const response2 = await fetch("https://apis.datos.gob.ar/georef/api/provincias")

        const provincias = await response2.json();


      
        return res.render("countries", {countries, provincias: provincias.provincias});

    }
}



module.exports = countriesController