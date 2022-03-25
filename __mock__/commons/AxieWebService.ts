import { IAxieWebService } from "../../src/commons/IAxieWebService";
import { IAxieBriefs } from "../../src/types";

const axios = require('axios');


export class AxieWebService implements IAxieWebService {

    public async getAxieBriefs(): Promise<IAxieBriefs> {

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

        axieBriefs.AquaticClass.push({
            _id: '1',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Aquatic',
            currentPriceUSD: '10'
        });

        axieBriefs.BeastClass.push({
            _id: '2',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Beast',
            currentPriceUSD: '10'
        });

        axieBriefs.BirdClass.push({
            _id: '3',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Bird',
            currentPriceUSD: '10'
        });

        axieBriefs.BugClass.push({
            _id: '4',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Bug',
            currentPriceUSD: '10'
        });

        axieBriefs.DawnClass.push({
            _id: '5',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Dawn',
            currentPriceUSD: '10'
        });

        axieBriefs.DuskClass.push({
            _id: '6',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Dusk',
            currentPriceUSD: '10'
        });

        axieBriefs.MechClass.push({
            _id: '7',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Mech',
            currentPriceUSD: '10'
        });

        axieBriefs.PlantClass.push({
            _id: '8',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Plant',
            currentPriceUSD: '10'
        });

        axieBriefs.ReptileClass.push({
            _id: '9',
            name: 'Name 1',
            stage: 'Stage 1',
            class: 'Reptile',
            currentPriceUSD: '10'
        });

        return Promise.resolve(axieBriefs);
    }
}