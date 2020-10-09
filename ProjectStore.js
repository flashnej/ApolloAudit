import { action, computed, decorate, observable } from "mobx";
import { createContext } from "react";

class ProjectStore {
    @observable projectName = ""
    @observable projectName = ""
    @observable contactName = ""
    @observable phoneNumber = ""
    @observable address = ""
    @observable city = ""
    @observable sqFt = ""
}


export const projectStore = new ProjectStore()