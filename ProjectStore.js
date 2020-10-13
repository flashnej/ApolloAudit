import { action, computed, decorate, observable } from "mobx";
import { createContext } from "react";

class ProjectStore {

    @observable sqFt = ""

    @observable auditDetails =  {
        projectName: "",
        contactName: "",
        phoneNumber: "",
        address: "",
        city: "",
        sqFt: "",
        }
    }

export const projectStore = new ProjectStore()