
import { AppPage } from './app.po';

describe('information panel test', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });


    it('should be a Add annotation button', () => {
        const addBtn = page.getAddAnnotationButton();
        expect(addBtn.all.length == 1).toBeTruthy();
    });

    it('should be a search button', () => {
        const searchBtn = page.getSearchBtn();
        expect(searchBtn.all.length == 1).toBeTruthy();
    });

    it('should be one list', () => {
        const list = page.getList();
        console.log(list.all.length);
        expect(list.all.length == 1).toBeTruthy();
    });

    it('should be one input', () => {
        const input = page.getInput();
        console.log(input.all.length);
        expect(input.all.length == 1).toBeTruthy();
    });

});
