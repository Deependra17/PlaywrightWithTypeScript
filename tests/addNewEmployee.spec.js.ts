import {test, expect} from '@playwright/test';
import {EmployeePage} from "../pages/EmployeePage";

test("Verify Add Employee Functionality", async ({page}) => {
    const employeePage = new EmployeePage(page);

    await employeePage.clickOnEmployeeModule();
    await employeePage.clickOnEmployeeSubModule();

    await employeePage.clickOnAddEmployeeButton();
    await employeePage.enterEmployeeId();
    await employeePage.enterPrefix();
    await employeePage.enterFirstName();
    await employeePage.enterMiddleName();
    await employeePage.enterLastName();
    await employeePage.enterHireDate();
    await employeePage.selectGender();
    await employeePage.clickOnUserAccessCheckbox();
    await employeePage.enterWorkEmail();
    await employeePage.clickOnSaveButton()
    console.log("Employee added successfully.");

    await employeePage.clickOnFilterSearchButton();
    await employeePage.searchByName();
    await employeePage.clickOnFilterButton();

});

test("Verify Edit Employee Functionality", async ({page}) => {
    const employeePage = new EmployeePage(page);

    await employeePage.clickOnEmployeeModule();
    await employeePage.clickOnEmployeeSubModule();

    await employeePage.clickOnEditButton();
    await employeePage.enterLastName();
    await employeePage.enterHireDate();

    await employeePage.clickOnSaveButton();
    console.log("Employee detail edited successfully.");

});
test("Verify Delete Employee Functionality", async ({page}) => {
    const employeePage = new EmployeePage(page);
    await employeePage.clickOnEmployeeModule();
    await employeePage.clickOnEmployeeSubModule();

    await employeePage.clickOnDeleteButton();
    console.log("Employee Deleted Successfully");
});

test("Search Employee By ID", async ({page}) => {
    const employeePage = new EmployeePage(page);
    await employeePage.clickOnEmployeeModule();
    await employeePage.clickOnEmployeeSubModule();

    await employeePage.clickOnFilterSearchButton();
    await employeePage.searchById();
    await employeePage.clickOnFilterButton();
});
test("Search Employee By Name", async ({page}) => {
    const employeePage = new EmployeePage(page);
    await employeePage.clickOnEmployeeModule();
    await employeePage.clickOnEmployeeSubModule();
    await employeePage.clickOnFilterSearchButton();
    await employeePage.searchByName();
    await employeePage.clickOnFilterButton()
});
test("Search Employee By Email", async ({page}) => {
    const employeePage = new EmployeePage(page);
    await employeePage.clickOnEmployeeModule();
    await employeePage.clickOnEmployeeSubModule();

    await employeePage.clickOnFilterSearchButton();
    await employeePage.searchByEmail();
    await employeePage.clickOnFilterButton();
});

