import { action, computed, decorate, observable } from "mobx";
import { createContext } from "react";

class ProjectStore {

    @observable sqFt = ""

    @observable auditDetails =  {
        }
    }

export const projectStore = new ProjectStore()


// projectName: "",
// contactName: "",
// phoneNumber: "",
// address: "",
// city: "",
// sqFt: ""