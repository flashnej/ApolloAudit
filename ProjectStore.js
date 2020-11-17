import { observable } from "mobx";

class ProjectStore {

    @observable sqFt = ""

    @observable auditDetails =  {
        projectName: "",
        clientName: "",
        contactName: "",
        phoneNumber: "",
        address: "",
        city: "",
        sqFt: "",
        utility:"",
        acctNum:"",
        }
        @observable existingOptions = ["A-Line, 40/60W equivalent", "A-Line 75/100W equivalent", "PAR16 or MR16 (pin or GU10 base type)", "PAR20/R20", "PAR30 or BR30 or R30", "PAR38 or BR40 or R40", "G24", "G23", "Decorative (Globe, Candle, B-shapes)", "T8 4', 3' & 2' (UL Type A replacement ONLY)", "T8 8' (UL Type A replacement ONLY)", "T5 4' (UL Type A replacement ONLY)", "U-Bend 4' (UL Type A replacement ONLY", "Down-light kit", "1x4, 2x2, 2x4 Troffer", "High/Low Bay", "Stairwell Fixture", "Parking Garage & Canopy", "Exterior", "Strip/Wrap", "Mogul Interior High Bay", "Mogul Interior Low Bay", "Mogul Exterior", "Custom"]
    }


export const projectStore = new ProjectStore()