import { action, computed, decorate, observable } from "mobx";
import { createContext } from "react";

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
    }

export const projectStore = new ProjectStore()