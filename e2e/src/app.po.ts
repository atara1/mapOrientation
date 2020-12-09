import { browser, By, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getAddAnnotationButton(){
   return element(By.id('addAnnotation'))
  }

  getSearchBtn(){
    return element(By.id('searchBtn'))
   }

  getList(){
    return element(By.className('list-group'));
  }

getInput(){
  return element(By.id('search'));
}
setInputText(value: string){
  let setInput =  element(By.css(`[id=search]`));
  setInput.sendKeys(value);
return setInput;      
}





}
