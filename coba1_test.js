
Feature('coba1');

Scenario('login_button', (I) => {
		I.amOnPage('http://devsgv1.cartenz.co.id/login');
		I.fillField('#userid_field','randall');
		I.fillField('#password_field','test@123');
		I.click('#login_button');
		I.wait(5);
		I.click('#supporting-features > div > div:nth-child(1) > div.col-md-8.col-md-offset-1 > a');
		I.wait(5);
		I.click('#sidebar > div.sidebar-body-pendataan > div > ul > li:nth-child(6) > a');
		I.wait(5)
		I.click('#pageSubmenuLaporan > li:nth-child(2) > a > span.pull-right.menu-open');
		I.wait(5)
		I.click('#pageSubmenuLaporanPajakLainnya > li:nth-child(5) > a > span');
		I.wait(10);
		//I.click('//*[@id="main_datatable"]/tbody/tr[1]/td[8]/button');
		I.click('#date_from');
		I.wait(5);
		I.click('#body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-bottom > div.datepicker-days > table > thead > tr:nth-child(2) > th.datepicker-switch');
		I.wait(5);
		I.click('#body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-bottom > div.datepicker-months > table > tbody > tr > td > span:nth-child(7)')
		I.wait(5);
		I.click('#body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-bottom > div.datepicker-days > table > tbody > tr:nth-child(2) > td:nth-child(1)');
		I.wait(5);
		I.click('#date_to');
		I.wait(5);
		I.click('#body > div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-bottom > div.datepicker-days > table > tbody > tr:nth-child(6) > td:nth-child(3)');
		I.wait(5);
		I.click('#filterDatatableButton');
		I.wait(5);
		I.click('#filter_wilayah');
		I.wait(5);
		// I.click('#main_datatable_filter_form > div:nth-child(1) > div.col-md-3.row-content-pendataan > div > div.box-custom > div:nth-child(3) > span > span.selection > span');
		// I.wait(5);
		I.selectOption('#kecamatan_filter_field','050');
		I.wait(5)
		// I.click('#select2-kelurahan_filter_field-container > span');
		// I.wait(5);
		I.selectOption('#kelurahan_filter_field','004');
		I.wait(5);
		I.click('#filter_wilayah');
		I.click('#filterDatatableButton');
		I.wait(5);
		I.selectOption('#jenis_pajak_filter_field','Reklame');
		I.wait(5);
		I.click('#filterDatatableButton');
		I.wait(5);
		I.click('#main_datatable > tbody > tr:nth-child(3) > td:nth-child(8) > button');
		I.wait(5);
		// I.switchToNextTab();
		// I.see('PT.HELINDO KELOLA SARANA 1234');
		// I.wait(10);
		// I.switchToPreviousTab();
		// I.see('Pendataan');
		// I.wait(5);

});
