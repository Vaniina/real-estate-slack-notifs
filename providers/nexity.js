const fetch = require("node-fetch");

module.exports = async (options) => {
  const fetchResult = await fetch(
    "https://04qrmgy2ol-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20instantsearch.js%202.10.5%3B%20JS%20Helper%20(2.28.1)&x-algolia-application-id=04QRMGY2OL&x-algolia-api-key=e41fb2c28664e59f3ed40390bcf78c7d",
    {
      method: "post",
      body: JSON.stringify({
        requests: [
          {
            indexName: "prod_bien",
            params: `query=&numericFilters=%5B%22surface%3E%3D${options.minSpace}%22%2C%22prix%3C%3D${options.maxPrice}%22%2C%22is_avant_premiere%20%3D%200%22%2C%22nbPiece%3E%3D3%22%2C%22nbPiece%3C%3D9%22%2C%22source%20!%3D%204%22%5D&hitsPerPage=250&page=0&attributesToRetrieve=*&aroundLatLng=&aroundRadius=&insideBoundingBox=&insidePolygon=%5B%5B48.855122%2C2.224131%2C48.859381%2C2.225841%2C48.864188%2C2.227773%2C48.866887%2C2.229751%2C48.868766%2C2.231263%2C48.872003%2C2.240272%2C48.873133%2C2.242177%2C48.875569%2C2.244414%2C48.876598%2C2.245359%2C48.874135%2C2.255184%2C48.880702%2C2.258437%2C48.880257%2C2.261673%2C48.878414%2C2.277684%2C48.878376%2C2.277861%2C48.879143%2C2.279222%2C48.881905%2C2.280077%2C48.882483%2C2.280275%2C48.886058%2C2.283884%2C48.888394%2C2.288332%2C48.88841%2C2.288363%2C48.889999%2C2.291396%2C48.89011%2C2.291611%2C48.890114%2C2.292093%2C48.890176%2C2.294657%2C48.893048%2C2.300138%2C48.894818%2C2.303542%2C48.896549%2C2.3067%2C48.896634%2C2.307058%2C48.897204%2C2.308782%2C48.897997%2C2.311175%2C48.900527%2C2.319838%2C48.90047%2C2.321217%2C48.900763%2C2.330053%2C48.900788%2C2.335243%2C48.901008%2C2.344022%2C48.901236%2C2.352941%2C48.902135%2C2.352879%2C48.902082%2C2.354211%2C48.902233%2C2.365993%2C48.902234%2C2.370361%2C48.902531%2C2.379678%2C48.902524%2C2.380171%2C48.902626%2C2.384029%2C48.90261%2C2.385187%2C48.90165%2C2.389723%2C48.901351%2C2.390918%2C48.90126%2C2.391286%2C48.898969%2C2.39548%2C48.897938%2C2.396121%2C48.896106%2C2.397238%2C48.890459%2C2.398922%2C48.884793%2C2.399864%2C48.882516%2C2.402802%2C48.880531%2C2.409639%2C48.878553%2C2.411124%2C48.874394%2C2.413718%2C48.87357%2C2.413758%2C48.871067%2C2.41388%2C48.869454%2C2.414002%2C48.867906%2C2.414119%2C48.866423%2C2.41423%2C48.863188%2C2.414418%2C48.861026%2C2.414632%2C48.85538%2C2.415681%2C48.854554%2C2.415886%2C48.851444%2C2.416693%2C48.851217%2C2.416677%2C48.850164%2C2.416602%2C48.849298%2C2.416564%2C48.846606%2C2.416448%2C48.846592%2C2.416444%2C48.844668%2C2.415878%2C48.838786%2C2.414148%2C48.837426%2C2.413753%2C48.835316%2C2.413142%2C48.834128%2C2.411843%2C48.833876%2C2.416112%2C48.835903%2C2.422108%2C48.839648%2C2.420389%2C48.842234%2C2.419201%2C48.843628%2C2.420044%2C48.844496%2C2.421722%2C48.841892%2C2.424469%2C48.841614%2C2.428032%2C48.84085%2C2.435866%2C48.844499%2C2.439475%2C48.846028%2C2.440986%2C48.845907%2C2.44651%2C48.845114%2C2.446452%2C48.843052%2C2.461159%2C48.840919%2C2.465841%2C48.839245%2C2.4673%2C48.836234%2C2.470032%2C48.833842%2C2.468785%2C48.831687%2C2.465112%2C48.828635%2C2.464457%2C48.827166%2C2.465677%2C48.819989%2C2.464323%2C48.818357%2C2.460991%2C48.817342%2C2.458675%2C48.818006%2C2.455498%2C48.818834%2C2.44288%2C48.819877%2C2.435684%2C48.82235%2C2.432098%2C48.824066%2C2.428053%2C48.824081%2C2.419991%2C48.824833%2C2.415966%2C48.824659%2C2.412606%2C48.825143%2C2.409923%2C48.825859%2C2.408454%2C48.827873%2C2.405748%2C48.828933%2C2.404105%2C48.829705%2C2.4019%2C48.829656%2C2.401099%2C48.828764%2C2.398931%2C48.827508%2C2.391917%2C48.826486%2C2.388716%2C48.825769%2C2.38966%2C48.823378%2C2.383742%2C48.822419%2C2.381322%2C48.821407%2C2.378803%2C48.821301%2C2.37854%2C48.820788%2C2.376835%2C48.819783%2C2.373516%2C48.819603%2C2.373077%2C48.816412%2C2.364073%2C48.816242%2C2.363569%2C48.816145%2C2.36053%2C48.816476%2C2.356835%2C48.81655%2C2.356149%2C48.817946%2C2.353477%2C48.817951%2C2.350954%2C48.81639%2C2.346716%2C48.816292%2C2.343958%2C48.816895%2C2.33593%2C48.817459%2C2.334262%2C48.818469%2C2.332784%2C48.819318%2C2.329284%2C48.820066%2C2.325519%2C48.820964%2C2.321002%2C48.822484%2C2.314395%2C48.825352%2C2.301862%2C48.825555%2C2.301115%2C48.827558%2C2.292417%2C48.828344%2C2.290382%2C48.833027%2C2.27898%2C48.83056%2C2.276433%2C48.827992%2C2.272673%2C48.827911%2C2.27109%2C48.827824%2C2.267495%2C48.831612%2C2.267131%2C48.833092%2C2.269388%2C48.834623%2C2.267343%2C48.833711%2C2.262867%2C48.834933%2C2.255112%2C48.836806%2C2.25359%2C48.838199%2C2.252195%2C48.838629%2C2.251762%2C48.842906%2C2.251178%2C48.845466%2C2.252523%2C48.8456%2C2.250512%2C48.847899%2C2.241775%2C48.849892%2C2.239462%2C48.850271%2C2.237734%2C48.853337%2C2.224495%2C48.855122%2C2.224131%5D%2C%5B48.910311%2C2.264424%2C48.910671%2C2.266282%2C48.910291%2C2.271713%2C48.913213%2C2.272354%2C48.913432%2C2.272649%2C48.915893%2C2.275971%2C48.919189%2C2.280419%2C48.923106%2C2.275715%2C48.927044%2C2.273171%2C48.927192%2C2.272985%2C48.928238%2C2.271992%2C48.933739%2C2.27266%2C48.933921%2C2.277745%2C48.932912%2C2.282292%2C48.930275%2C2.284327%2C48.925636%2C2.284481%2C48.92295%2C2.286247%2C48.92252%2C2.286465%2C48.917951%2C2.291701%2C48.919784%2C2.294952%2C48.916988%2C2.295433%2C48.912917%2C2.296112%2C48.91736%2C2.307583%2C48.918297%2C2.310004%2C48.921201%2C2.318006%2C48.919033%2C2.3214%2C48.916081%2C2.320388%2C48.914193%2C2.313947%2C48.913852%2C2.312746%2C48.909995%2C2.297976%2C48.905121%2C2.287736%2C48.904097%2C2.28632%2C48.902922%2C2.283897%2C48.904674%2C2.282087%2C48.903884%2C2.280102%2C48.908318%2C2.27417%2C48.905856%2C2.267362%2C48.906592%2C2.265992%2C48.910311%2C2.264424%5D%2C%5B48.904097%2C2.28632%2C48.905121%2C2.287736%2C48.909995%2C2.297976%2C48.913852%2C2.312746%2C48.911385%2C2.314865%2C48.905443%2C2.320112%2C48.900527%2C2.319838%2C48.897997%2C2.311175%2C48.896634%2C2.307058%2C48.896549%2C2.3067%2C48.894818%2C2.303542%2C48.897146%2C2.299341%2C48.898245%2C2.297336%2C48.898904%2C2.296036%2C48.904097%2C2.28632%5D%2C%5B48.900742%2C2.231795%2C48.90078%2C2.232027%2C48.902641%2C2.241125%2C48.903538%2C2.245316%2C48.902009%2C2.246417%2C48.904745%2C2.256576%2C48.905413%2C2.255877%2C48.905649%2C2.255629%2C48.905669%2C2.255727%2C48.906158%2C2.258173%2C48.906775%2C2.261263%2C48.903647%2C2.263238%2C48.904514%2C2.26666%2C48.905856%2C2.267362%2C48.908318%2C2.27417%2C48.903884%2C2.280102%2C48.904674%2C2.282087%2C48.902922%2C2.283897%2C48.898673%2C2.271135%2C48.896381%2C2.264407%2C48.889944%2C2.256167%2C48.88718%2C2.252851%2C48.887629%2C2.251344%2C48.887549%2C2.251102%2C48.890962%2C2.24155%2C48.894934%2C2.24046%2C48.894637%2C2.237789%2C48.894913%2C2.236104%2C48.895011%2C2.235881%2C48.89597%2C2.233531%2C48.89783%2C2.232236%2C48.9005%2C2.230327%2C48.900742%2C2.231795%5D%2C%5B48.855122%2C2.224131%2C48.859381%2C2.225841%2C48.864188%2C2.227773%2C48.866887%2C2.229751%2C48.868766%2C2.231263%2C48.872003%2C2.240272%2C48.873133%2C2.242177%2C48.875569%2C2.244414%2C48.876598%2C2.245359%2C48.874135%2C2.255184%2C48.880702%2C2.258437%2C48.880257%2C2.261673%2C48.878414%2C2.277684%2C48.878376%2C2.277861%2C48.879143%2C2.279222%2C48.881905%2C2.280077%2C48.882483%2C2.280275%2C48.886058%2C2.283884%2C48.888394%2C2.288332%2C48.88841%2C2.288363%2C48.889999%2C2.291396%2C48.89011%2C2.291611%2C48.890114%2C2.292093%2C48.890176%2C2.294657%2C48.893048%2C2.300138%2C48.894818%2C2.303542%2C48.896549%2C2.3067%2C48.896634%2C2.307058%2C48.897204%2C2.308782%2C48.897997%2C2.311175%2C48.900527%2C2.319838%2C48.90047%2C2.321217%2C48.900763%2C2.330053%2C48.900788%2C2.335243%2C48.901008%2C2.344022%2C48.901236%2C2.352941%2C48.902135%2C2.352879%2C48.902082%2C2.354211%2C48.902233%2C2.365993%2C48.902234%2C2.370361%2C48.902531%2C2.379678%2C48.902524%2C2.380171%2C48.902626%2C2.384029%2C48.90261%2C2.385187%2C48.90165%2C2.389723%2C48.901351%2C2.390918%2C48.90126%2C2.391286%2C48.898969%2C2.39548%2C48.897938%2C2.396121%2C48.896106%2C2.397238%2C48.890459%2C2.398922%2C48.884793%2C2.399864%2C48.882516%2C2.402802%2C48.880531%2C2.409639%2C48.878553%2C2.411124%2C48.874394%2C2.413718%2C48.87357%2C2.413758%2C48.871067%2C2.41388%2C48.869454%2C2.414002%2C48.867906%2C2.414119%2C48.866423%2C2.41423%2C48.863188%2C2.414418%2C48.861026%2C2.414632%2C48.85538%2C2.415681%2C48.854554%2C2.415886%2C48.851444%2C2.416693%2C48.851217%2C2.416677%2C48.850164%2C2.416602%2C48.849298%2C2.416564%2C48.846606%2C2.416448%2C48.846592%2C2.416444%2C48.844668%2C2.415878%2C48.838786%2C2.414148%2C48.837426%2C2.413753%2C48.835316%2C2.413142%2C48.834128%2C2.411843%2C48.833876%2C2.416112%2C48.835903%2C2.422108%2C48.839648%2C2.420389%2C48.842234%2C2.419201%2C48.843628%2C2.420044%2C48.844496%2C2.421722%2C48.841892%2C2.424469%2C48.841614%2C2.428032%2C48.84085%2C2.435866%2C48.844499%2C2.439475%2C48.846028%2C2.440986%2C48.845907%2C2.44651%2C48.845114%2C2.446452%2C48.843052%2C2.461159%2C48.840919%2C2.465841%2C48.839245%2C2.4673%2C48.836234%2C2.470032%2C48.833842%2C2.468785%2C48.831687%2C2.465112%2C48.828635%2C2.464457%2C48.827166%2C2.465677%2C48.819989%2C2.464323%2C48.818357%2C2.460991%2C48.817342%2C2.458675%2C48.818006%2C2.455498%2C48.818834%2C2.44288%2C48.819877%2C2.435684%2C48.82235%2C2.432098%2C48.824066%2C2.428053%2C48.824081%2C2.419991%2C48.824833%2C2.415966%2C48.824659%2C2.412606%2C48.825143%2C2.409923%2C48.825859%2C2.408454%2C48.827873%2C2.405748%2C48.828933%2C2.404105%2C48.829705%2C2.4019%2C48.829656%2C2.401099%2C48.828764%2C2.398931%2C48.827508%2C2.391917%2C48.826486%2C2.388716%2C48.825769%2C2.38966%2C48.823378%2C2.383742%2C48.822419%2C2.381322%2C48.821407%2C2.378803%2C48.821301%2C2.37854%2C48.820788%2C2.376835%2C48.819783%2C2.373516%2C48.819603%2C2.373077%2C48.816412%2C2.364073%2C48.816242%2C2.363569%2C48.816145%2C2.36053%2C48.816476%2C2.356835%2C48.81655%2C2.356149%2C48.817946%2C2.353477%2C48.817951%2C2.350954%2C48.81639%2C2.346716%2C48.816292%2C2.343958%2C48.816895%2C2.33593%2C48.817459%2C2.334262%2C48.818469%2C2.332784%2C48.819318%2C2.329284%2C48.820066%2C2.325519%2C48.820964%2C2.321002%2C48.822484%2C2.314395%2C48.825352%2C2.301862%2C48.825555%2C2.301115%2C48.827558%2C2.292417%2C48.828344%2C2.290382%2C48.833027%2C2.27898%2C48.83056%2C2.276433%2C48.827992%2C2.272673%2C48.827911%2C2.27109%2C48.827824%2C2.267495%2C48.831612%2C2.267131%2C48.833092%2C2.269388%2C48.834623%2C2.267343%2C48.833711%2C2.262867%2C48.834933%2C2.255112%2C48.836806%2C2.25359%2C48.838199%2C2.252195%2C48.838629%2C2.251762%2C48.842906%2C2.251178%2C48.845466%2C2.252523%2C48.8456%2C2.250512%2C48.847899%2C2.241775%2C48.849892%2C2.239462%2C48.850271%2C2.237734%2C48.853337%2C2.224495%2C48.855122%2C2.224131%5D%2C%5B48.910311%2C2.264424%2C48.910671%2C2.266282%2C48.910291%2C2.271713%2C48.913213%2C2.272354%2C48.913432%2C2.272649%2C48.915893%2C2.275971%2C48.919189%2C2.280419%2C48.923106%2C2.275715%2C48.927044%2C2.273171%2C48.927192%2C2.272985%2C48.928238%2C2.271992%2C48.933739%2C2.27266%2C48.933921%2C2.277745%2C48.932912%2C2.282292%2C48.930275%2C2.284327%2C48.925636%2C2.284481%2C48.92295%2C2.286247%2C48.92252%2C2.286465%2C48.917951%2C2.291701%2C48.919784%2C2.294952%2C48.916988%2C2.295433%2C48.912917%2C2.296112%2C48.91736%2C2.307583%2C48.918297%2C2.310004%2C48.921201%2C2.318006%2C48.919033%2C2.3214%2C48.916081%2C2.320388%2C48.914193%2C2.313947%2C48.913852%2C2.312746%2C48.909995%2C2.297976%2C48.905121%2C2.287736%2C48.904097%2C2.28632%2C48.902922%2C2.283897%2C48.904674%2C2.282087%2C48.903884%2C2.280102%2C48.908318%2C2.27417%2C48.905856%2C2.267362%2C48.906592%2C2.265992%2C48.910311%2C2.264424%5D%2C%5B48.904097%2C2.28632%2C48.905121%2C2.287736%2C48.909995%2C2.297976%2C48.913852%2C2.312746%2C48.911385%2C2.314865%2C48.905443%2C2.320112%2C48.900527%2C2.319838%2C48.897997%2C2.311175%2C48.896634%2C2.307058%2C48.896549%2C2.3067%2C48.894818%2C2.303542%2C48.897146%2C2.299341%2C48.898245%2C2.297336%2C48.898904%2C2.296036%2C48.904097%2C2.28632%5D%2C%5B48.900742%2C2.231795%2C48.90078%2C2.232027%2C48.902641%2C2.241125%2C48.903538%2C2.245316%2C48.902009%2C2.246417%2C48.904745%2C2.256576%2C48.905413%2C2.255877%2C48.905649%2C2.255629%2C48.905669%2C2.255727%2C48.906158%2C2.258173%2C48.906775%2C2.261263%2C48.903647%2C2.263238%2C48.904514%2C2.26666%2C48.905856%2C2.267362%2C48.908318%2C2.27417%2C48.903884%2C2.280102%2C48.904674%2C2.282087%2C48.902922%2C2.283897%2C48.898673%2C2.271135%2C48.896381%2C2.264407%2C48.889944%2C2.256167%2C48.88718%2C2.252851%2C48.887629%2C2.251344%2C48.887549%2C2.251102%2C48.890962%2C2.24155%2C48.894934%2C2.24046%2C48.894637%2C2.237789%2C48.894913%2C2.236104%2C48.895011%2C2.235881%2C48.89597%2C2.233531%2C48.89783%2C2.232236%2C48.9005%2C2.230327%2C48.900742%2C2.231795%5D%5D&offset=&length=&optionalFilters=%5B%22ville%3A%20PARIS%22%5D&facetFilters=%5B%5B%22typeCommercialisation%3ALocation%22%5D%2C%5B%22typeBien%3AAppartement%22%5D%2C%5B%22typeCommercialisation%3ALocation%22%5D%2C%5B%22typeBien%3AAppartement%22%5D%5D&facets=%5B%5D&tagFilters=`,
          },
        ],
      }),
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
        Referer: `https://www.nexity.fr/annonces-immobilieres/location/appartement+t9/tout/paris/moins-de-1000?locationsId%5B1%5D=42707&locationsId%5B2%5D=42675&locationsId%5B3%5D=42702&min_surface=${options.minSpace}&nb_p%5B0%5D=3&nb_p%5B1%5D=4&nb_p%5B2%5D=5&nb_p%5B3%5D=6&nb_p%5B4%5D=7&nb_p%5B5%5D=8`,
      },
    }
  );

  const json = await fetchResult.json();

  return json.results[0].hits.map((appartment) => ({
    id: `Nexity-${appartment.location_id}`,
    provider: "nexity",
    minBedrooms: `${appartment.nbChambre} ch`,
    minRooms: `${appartment.nbPiece} p`,
    city: appartment.ville,
    description: appartment.description,
    maxPrice: `${appartment.prix} €`,
    minSpace: `${appartment.surface} m2`,
    images: [
      `https://media2-js.nexity.fr/${appartment.photo}?maxWidth=593&maxHeight=482&default_img=appartement.jpg`,
    ],
    url: `https://www.nexity.fr/location/${appartment.nativeId}`,
  }));
};
