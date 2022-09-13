describe('eMag.ro', () => {

    it('should have the correct page title', async () => {
       await browser.url('https://www.emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');

    }); /* Verify page title */



    it('should open Emag Genius page' , async () => {

        const geniusButton = await $('[title="Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

    });  /* Go to the "Genius" page and check if we are on the correct page by checking the page title */


    it('should have a working search box' , async () => {

        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');
        await searchBox.setValue('adidasi nike');
        await searchButton.click();
        await expect(browser).toHaveTitle('Cauți adidasi nike? Alege din oferta eMAG.ro');

    }); /* It does the search function on the website, and searches for the keyword "adidasi nike" and press submit */

    it('should demonstrate the dragAndDrop command', async () => {
        const dragAndDropUp = await $('.navbar-brand')
        const dragAndDropdown = await $('.footer-copy footer-inverse')

    }); /* Drag an drop website page */

});
