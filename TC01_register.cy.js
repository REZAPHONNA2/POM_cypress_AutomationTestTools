/// <reference types="cypress" />
import registerPage from "../../4-PageObjectModel/RegisterPage"; // File Object yang dipanggil

describe('Automation Test Store | Register Account Test', () => {   // Beri keterangan saat muncul GUI Cypress
  it('Registrasi Akun | Positive Test Case', () => {
    registerPage.visitHomePage();       // Memanggil tiap class di file registerPage.js
    registerPage.goToRegisterPage();

    registerPage.fillPersonalDetails(
      // Input tiap field
      'user',
      '456',
      'muhammadrezaphonna@gmail.com',
      '081210624421'
    );

    registerPage.fillAddressDetails(
      'Jalan Bukit Duri Tanjakan 1',
      'Jakarta',
      'Indonesia',
      'Jakarta Raya',
      '12840'
    );

    registerPage.fillLoginDetails('akuntest', 'Dodol1990');
    registerPage.acceptNewsletterAndPolicy();
    //    > File Hasil screenshot akan disimpan dengan nama berikut
    cy.screenshot('screenshot/Mandatory-Field-Registration'); 

    registerPage.submitRegistration(); // Memanggil fungsi sumbit Button 'Continue'

    // Validasi berhasil
    registerPage.assertSuccess();
  });
});
