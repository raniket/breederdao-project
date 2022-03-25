const axios = require('axios');
import { IAxieWebService } from "./IAxieWebService";
import { IAxieBriefs } from "../types/IAxieBriefs";
import { AXIE } from '../config/axie';


export class AxieWebService implements IAxieWebService {

    public async getAxieBriefs(): Promise<IAxieBriefs> {
        try {
            const axieBriefList = await axios.post(AXIE.AXIE_GRAPHQL_BASE_URL, {
                "operationName": "GetAxieBriefList",
                "variables": {
                    "from": 0,
                    "size": 300,
                    "sort": "PriceAsc",
                    "auctionType": "Sale",
                    "criteria": {}
                },
                "query": "query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  name\n  stage\n  class\n  breedCount\n  image\n  title\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\n"
            });

            const axieBriefs: IAxieBriefs = {
                AquaticClass: [],
                BeastClass: [],
                BirdClass: [],
                BugClass: [],
                DawnClass: [],
                DuskClass: [],
                MechClass: [],
                PlantClass: [],
                ReptileClass: []
            };

            axieBriefList.data.data.axies.results.map((axie: any) => {
                const item = {
                    _id: axie.id,
                    name: axie.name,
                    stage: axie.stage,
                    class: axie.class,
                    currentPriceUSD: axie.auction.currentPriceUSD,
                };

                if (item.class === 'Aquatic') axieBriefs.AquaticClass.push(item);
                if (item.class === 'Beast') axieBriefs.BeastClass.push(item);
                if (item.class === 'Bird') axieBriefs.BirdClass.push(item);
                if (item.class === 'Bug') axieBriefs.BugClass.push(item);
                if (item.class === 'Dawn') axieBriefs.DawnClass.push(item);
                if (item.class === 'Dusk') axieBriefs.DuskClass.push(item);
                if (item.class === 'Mech') axieBriefs.MechClass.push(item);
                if (item.class === 'Plant') axieBriefs.PlantClass.push(item);
                if (item.class === 'Reptile') axieBriefs.ReptileClass.push(item);
            });

            return axieBriefs;
        } catch (error) {
            console.log('Could not fetch axie list: ' + error);
            throw new Error('Could not fetch axie list');
        }
    }
}