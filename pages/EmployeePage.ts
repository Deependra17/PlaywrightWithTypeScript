import type {Page, Locator} from '@playwright/test';

class EmployeePage {
    readonly page: Page;
    readonly employeeModule: Locator;
    readonly employeeSubModule: Locator;
    readonly addEmployeeButton: Locator;
    readonly employeeIdInput: Locator;
    readonly prefix: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly hireDateInput: Locator;
    readonly workEmailInput: Locator;
    readonly gender: Locator;
    readonly userAccessCheckbox: Locator;

    //buttons
    readonly saveButton: Locator;
    readonly cancelButton: Locator;
    readonly editButton: Locator;
    readonly deleteButton: Locator;
    readonly filterButton: Locator;

    //Search Locators
    readonly filterSearchButton: Locator;
    readonly empIdInputField: Locator;
    readonly empNameInputField: Locator;
    readonly empEmailInputField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.employeeModule = page.locator("");
        this.employeeSubModule = page.locator("");
        this.addEmployeeButton = page.locator("");
        this.employeeIdInput = page.locator("");
        this.prefix = page.locator("");
        this.firstNameInput = page.locator("");
        this.middleNameInput = page.locator("");
        this.lastNameInput = page.locator("");
        this.hireDateInput = page.locator("");
        this.gender = page.locator("");
        this.userAccessCheckbox = page.locator("");
        this.workEmailInput = page.locator("");
        this.saveButton = page.locator("");
        this.cancelButton = page.locator("");
        this.editButton = page.locator("");
        this.deleteButton = page.locator("");
        this.filterSearchButton = page.locator("");
        this.empIdInputField = page.locator("");
        this.empNameInputField = page.locator("");
        this.empEmailInputField = page.locator("");
        this.filterButton = page.locator("");
    }

    async clickOnEmployeeModule() {
        await this.employeeModule.waitFor({state: "visible", timeout: 2000})
        await this.employeeModule.click();
    }

    async clickOnEmployeeSubModule() {
        await this.employeeSubModule.waitFor({state: "visible", timeout: 2000})
        await this.employeeSubModule.click();
    }

    async clickOnAddEmployeeButton() {
        await this.addEmployeeButton.waitFor({state: "visible", timeout: 2000});
        await this.employeeIdInput.click();
    }

    async enterEmployeeId() {
        await this.employeeIdInput.waitFor({state: "visible", timeout: 2000});
        await this.employeeIdInput.fill("");

    }

    async enterPrefix() {
        await this.prefix.waitFor({state: "visible", timeout: 2000});
        await this.prefix.fill("");

    }

    async enterFirstName() {
        await this.firstNameInput.waitFor({state: "visible", timeout: 2000});
        await this.firstNameInput.fill("");
    }

    async enterMiddleName() {
        await this.middleNameInput.waitFor({state: "visible", timeout: 2000});
        await this.middleNameInput.fill("");
    }

    async enterLastName() {
        await this.lastNameInput.waitFor({state: "visible", timeout: 2000});
        await this.middleNameInput.fill("");
    }

    async enterHireDate() {
        await this.hireDateInput.waitFor({state: "visible", timeout: 2000});
        await this.hireDateInput.fill("");
    }

    async enterWorkEmail() {
        await this.workEmailInput.waitFor({state: "visible", timeout: 2000});
        await this.workEmailInput.fill("");
    }

    async selectGender() {
        await this.gender.waitFor({state: "visible", timeout: 2000});
        await this.gender.selectOption("Male");

    }

    async clickOnUserAccessCheckbox() {
        await this.userAccessCheckbox.waitFor({state: "visible", timeout: 2000});
        await this.userAccessCheckbox.click();
    }

    async clickOnSaveButton() {
        await this.saveButton.waitFor({state: "visible", timeout: 2000});
        await this.saveButton.click();
    }

    async clickOnCancelButton() {
        await this.cancelButton.waitFor({state: "visible", timeout: 2000});
        await this.cancelButton.click();
    }

    async clickOnEditButton() {
        await this.editButton.waitFor({state: "visible", timeout: 2000});
        await this.editButton.click();
    }

    async clickOnDeleteButton() {
        await this.deleteButton.waitFor({state: "visible", timeout: 2000});
        await this.deleteButton.click();
    }

    async clickOnFilterSearchButton() {
        await this.filterSearchButton.waitFor({state: "visible", timeout: 2000});
        await this.filterSearchButton.click();
    }

    async searchById() {
        await this.empIdInputField.waitFor({state: "visible", timeout: 2000});
        await this.empIdInputField.fill("");
    }

    async searchByName() {
        await this.empNameInputField.waitFor({state: "visible", timeout: 2000});
        await this.empNameInputField.fill("");
    }

    async searchByEmail() {
        await this.empEmailInputField.waitFor({state: "visible", timeout: 2000});
        await this.empEmailInputField.fill("");
    }
    async clickOnFilterButton() {
        await this.filterButton.waitFor({state: "visible", timeout: 2000});
        await this.filterSearchButton.click();
    }
}

export {EmployeePage};